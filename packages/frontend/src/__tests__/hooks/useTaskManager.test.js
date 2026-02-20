import { renderHook, act } from '@testing-library/react';
import useTaskManager from '../../hooks/useTaskManager';

// Mock fetch for API calls
global.fetch = jest.fn();

describe('Task Manager Hook Tests', () => {
  beforeEach(() => {
    // Reset fetch mock
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve([]),
      })
    );
  });

  test('initializes with correct default state', () => {
    const { result } = renderHook(() => useTaskManager());
    
    expect(result.current.tasks).toEqual([]);
    expect(result.current.filter).toBe('all');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  test('provides all necessary functions', () => {
    const { result } = renderHook(() => useTaskManager());
    
    expect(typeof result.current.addTask).toBe('function');
    expect(typeof result.current.updateTask).toBe('function');
    expect(typeof result.current.deleteTask).toBe('function');
    expect(typeof result.current.setFilter).toBe('function');
  });

  test('can add a task', () => {
    const { result } = renderHook(() => useTaskManager());
    
    act(() => {
      result.current.addTask({ title: 'Test Task' });
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe('Test Task');
    expect(result.current.tasks[0].completed).toBe(false);
    expect(result.current.tasks[0].id).toBeDefined();
  });

  test('can update a task', () => {
    const { result } = renderHook(() => useTaskManager());
    
    // Add a task first
    act(() => {
      result.current.addTask({ title: 'Test Task' });
    });

    const taskId = result.current.tasks[0].id;

    // Update the task
    act(() => {
      result.current.updateTask(taskId, { completed: true });
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  test('can delete a task', () => {
    const { result } = renderHook(() => useTaskManager());
    
    // Add a task first
    act(() => {
      result.current.addTask({ title: 'Test Task' });
    });

    const taskId = result.current.tasks[0].id;

    // Delete the task
    act(() => {
      result.current.deleteTask(taskId);
    });

    expect(result.current.tasks).toHaveLength(0);
  });

  test('can change filter', () => {
    const { result } = renderHook(() => useTaskManager());
    
    act(() => {
      result.current.setFilter('active');
    });

    expect(result.current.filter).toBe('active');

    act(() => {
      result.current.setFilter('completed');
    });

    expect(result.current.filter).toBe('completed');
  });

  test('maintains state consistency across operations', () => {
    const { result } = renderHook(() => useTaskManager());
    
    // Add multiple tasks
    act(() => {
      result.current.addTask({ title: 'Task 1' });
      result.current.addTask({ title: 'Task 2' });
      result.current.addTask({ title: 'Task 3' });
    });

    expect(result.current.tasks).toHaveLength(3);

    // Complete one task
    const firstTaskId = result.current.tasks[0].id;
    act(() => {
      result.current.updateTask(firstTaskId, { completed: true });
    });

    // Verify state
    expect(result.current.tasks[0].completed).toBe(true);
    expect(result.current.tasks[1].completed).toBe(false);
    expect(result.current.tasks[2].completed).toBe(false);

    // Delete one task
    const secondTaskId = result.current.tasks[1].id;
    act(() => {
      result.current.deleteTask(secondTaskId);
    });

    expect(result.current.tasks).toHaveLength(2);
    expect(result.current.tasks.some(task => task.id === secondTaskId)).toBe(false);
  });

  // ============================================
  // MEANINGFUL TESTS FOR UNCOVERED USER WORKFLOWS
  // ============================================

  describe('toggleTaskCompletion - marking tasks done/undone', () => {
    test('toggles a task from incomplete to complete', () => {
      const { result } = renderHook(() => useTaskManager());
      
      // Add a task (starts as incomplete)
      act(() => {
        result.current.addTask({ title: 'Buy groceries' });
      });

      const taskId = result.current.tasks[0].id;
      expect(result.current.tasks[0].completed).toBe(false);

      // User marks task as done
      act(() => {
        result.current.toggleTaskCompletion(taskId);
      });

      expect(result.current.tasks[0].completed).toBe(true);
    });

    test('toggles a task from complete back to incomplete', () => {
      const { result } = renderHook(() => useTaskManager());
      
      // Add and complete a task
      act(() => {
        result.current.addTask({ title: 'Send email' });
      });

      const taskId = result.current.tasks[0].id;
      act(() => {
        result.current.updateTask(taskId, { completed: true });
      });
      expect(result.current.tasks[0].completed).toBe(true);

      // User decides task isn't done after all
      act(() => {
        result.current.toggleTaskCompletion(taskId);
      });

      expect(result.current.tasks[0].completed).toBe(false);
    });

    test('only toggles the specific task, not others', () => {
      const { result } = renderHook(() => useTaskManager());
      
      // Add multiple tasks
      act(() => {
        result.current.addTask({ title: 'Task A' });
        result.current.addTask({ title: 'Task B' });
        result.current.addTask({ title: 'Task C' });
      });

      const taskBId = result.current.tasks[1].id;

      // Toggle only Task B
      act(() => {
        result.current.toggleTaskCompletion(taskBId);
      });

      // Only Task B should be completed
      expect(result.current.tasks[0].completed).toBe(false);
      expect(result.current.tasks[1].completed).toBe(true);
      expect(result.current.tasks[2].completed).toBe(false);
    });
  });

  describe('clearCompleted - batch removal of done tasks', () => {
    test('removes all completed tasks at once', () => {
      const { result } = renderHook(() => useTaskManager());
      
      // Add tasks and complete some
      act(() => {
        result.current.addTask({ title: 'Done task 1' });
        result.current.addTask({ title: 'Active task' });
        result.current.addTask({ title: 'Done task 2' });
      });

      // Mark first and third as complete
      act(() => {
        result.current.updateTask(result.current.tasks[0].id, { completed: true });
        result.current.updateTask(result.current.tasks[2].id, { completed: true });
      });

      expect(result.current.tasks).toHaveLength(3);

      // User clears all completed tasks
      act(() => {
        result.current.clearCompleted();
      });

      // Only the active task should remain
      expect(result.current.tasks).toHaveLength(1);
      expect(result.current.tasks[0].title).toBe('Active task');
      expect(result.current.tasks[0].completed).toBe(false);
    });

    test('does nothing when no tasks are completed', () => {
      const { result } = renderHook(() => useTaskManager());
      
      act(() => {
        result.current.addTask({ title: 'Task 1' });
        result.current.addTask({ title: 'Task 2' });
      });

      expect(result.current.tasks).toHaveLength(2);

      act(() => {
        result.current.clearCompleted();
      });

      // All tasks should remain
      expect(result.current.tasks).toHaveLength(2);
    });

    test('removes all tasks when all are completed', () => {
      const { result } = renderHook(() => useTaskManager());
      
      act(() => {
        result.current.addTask({ title: 'Task 1' });
        result.current.addTask({ title: 'Task 2' });
      });

      // Complete all tasks
      act(() => {
        result.current.updateTask(result.current.tasks[0].id, { completed: true });
        result.current.updateTask(result.current.tasks[1].id, { completed: true });
      });

      act(() => {
        result.current.clearCompleted();
      });

      expect(result.current.tasks).toHaveLength(0);
    });
  });

  describe('getTasks - filtering tasks by status', () => {
    test('returns all tasks when filter is "all"', () => {
      const { result } = renderHook(() => useTaskManager());
      
      act(() => {
        result.current.addTask({ title: 'Active task' });
        result.current.addTask({ title: 'Completed task' });
      });

      act(() => {
        result.current.updateTask(result.current.tasks[1].id, { completed: true });
      });

      const allTasks = result.current.getTasks('all');
      expect(allTasks).toHaveLength(2);
    });

    test('returns only incomplete tasks when filter is "active"', () => {
      const { result } = renderHook(() => useTaskManager());
      
      act(() => {
        result.current.addTask({ title: 'Active task 1' });
        result.current.addTask({ title: 'Completed task' });
        result.current.addTask({ title: 'Active task 2' });
      });

      // Complete the middle task
      act(() => {
        result.current.updateTask(result.current.tasks[1].id, { completed: true });
      });

      const activeTasks = result.current.getTasks('active');
      
      expect(activeTasks).toHaveLength(2);
      expect(activeTasks.every(task => !task.completed)).toBe(true);
      expect(activeTasks.map(t => t.title)).toEqual(['Active task 1', 'Active task 2']);
    });

    test('returns only completed tasks when filter is "completed"', () => {
      const { result } = renderHook(() => useTaskManager());
      
      act(() => {
        result.current.addTask({ title: 'Active task' });
        result.current.addTask({ title: 'Completed task 1' });
        result.current.addTask({ title: 'Completed task 2' });
      });

      // Complete the last two tasks
      act(() => {
        result.current.updateTask(result.current.tasks[1].id, { completed: true });
        result.current.updateTask(result.current.tasks[2].id, { completed: true });
      });

      const completedTasks = result.current.getTasks('completed');
      
      expect(completedTasks).toHaveLength(2);
      expect(completedTasks.every(task => task.completed)).toBe(true);
    });

    test('defaults to "all" filter when no filter specified', () => {
      const { result } = renderHook(() => useTaskManager());
      
      act(() => {
        result.current.addTask({ title: 'Task 1' });
        result.current.addTask({ title: 'Task 2' });
      });

      act(() => {
        result.current.updateTask(result.current.tasks[0].id, { completed: true });
      });

      // Call without filter argument - should return all
      const tasks = result.current.getTasks();
      expect(tasks).toHaveLength(2);
    });
  });

  describe('addTask validation - preventing invalid tasks', () => {
    test('rejects task without a title and sets error', () => {
      const { result } = renderHook(() => useTaskManager());
      
      let returnValue;
      act(() => {
        returnValue = result.current.addTask({ title: '' });
      });

      // Should not add the task
      expect(result.current.tasks).toHaveLength(0);
      // Should return null on failure
      expect(returnValue).toBe(null);
      // Should set an error message
      expect(result.current.error).toBeTruthy();
    });

    test('rejects task with only whitespace title', () => {
      const { result } = renderHook(() => useTaskManager());
      
      let returnValue;
      act(() => {
        returnValue = result.current.addTask({ title: '   ' });
      });

      expect(result.current.tasks).toHaveLength(0);
      expect(returnValue).toBe(null);
      expect(result.current.error).toBeTruthy();
    });

    test('clears error after successful task addition', () => {
      const { result } = renderHook(() => useTaskManager());
      
      // First, cause an error
      act(() => {
        result.current.addTask({ title: '' });
      });
      expect(result.current.error).toBeTruthy();

      // Then add a valid task
      act(() => {
        result.current.addTask({ title: 'Valid task' });
      });

      // Error should be cleared
      expect(result.current.error).toBe(null);
      expect(result.current.tasks).toHaveLength(1);
    });
  });

  describe('task data integrity', () => {
    test('new tasks include all required fields', () => {
      const { result } = renderHook(() => useTaskManager());
      
      act(() => {
        result.current.addTask({ 
          title: 'Complete project',
          description: 'Finish all remaining items'
        });
      });

      const task = result.current.tasks[0];
      
      expect(task.id).toBeDefined();
      expect(task.title).toBe('Complete project');
      expect(task.description).toBe('Finish all remaining items');
      expect(task.completed).toBe(false);
      expect(task.createdAt).toBeDefined();
      expect(task.priority).toBe('medium'); // default priority
    });

    test('updated tasks include updatedAt timestamp', () => {
      const { result } = renderHook(() => useTaskManager());
      
      act(() => {
        result.current.addTask({ title: 'Test task' });
      });

      const originalTask = result.current.tasks[0];
      expect(originalTask.updatedAt).toBeUndefined();

      act(() => {
        result.current.updateTask(originalTask.id, { title: 'Updated title' });
      });

      const updatedTask = result.current.tasks[0];
      expect(updatedTask.updatedAt).toBeDefined();
      expect(updatedTask.title).toBe('Updated title');
    });

    test('preserves custom priority when specified', () => {
      const { result } = renderHook(() => useTaskManager());
      
      act(() => {
        result.current.addTask({ 
          title: 'Urgent task',
          priority: 'high'
        });
      });

      expect(result.current.tasks[0].priority).toBe('high');
    });
  });
});