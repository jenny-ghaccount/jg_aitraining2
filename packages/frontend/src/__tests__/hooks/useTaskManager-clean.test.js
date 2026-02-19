import { renderHook, act } from '@testing-library/react';
import { useState } from 'react';

// Mock custom hook for testing (this would be a real hook in your app)
const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addTask = (taskText) => {
    if (!taskText.trim()) {
      setError('Task cannot be empty');
      return;
    }
    
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTasks(prev => [...prev, newTask]);
    setError(null);
  };

  const removeTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    removeTask,
    toggleTask,
    clearCompleted
  };
};

describe('useTaskManager Hook', () => {
  test('should initialize with empty state', () => {
    const { result } = renderHook(() => useTaskManager());
    
    expect(result.current.tasks).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  test('should add new tasks', () => {
    const { result } = renderHook(() => useTaskManager());
    
    act(() => {
      result.current.addTask('Test task');
    });
    
    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].text).toBe('Test task');
    expect(result.current.tasks[0].completed).toBe(false);
  });

  test('should not add empty tasks', () => {
    const { result } = renderHook(() => useTaskManager());
    
    act(() => {
      result.current.addTask('   ');
    });
    
    expect(result.current.tasks).toHaveLength(0);
    expect(result.current.error).toBe('Task cannot be empty');
  });

  test('should remove tasks', () => {
    const { result } = renderHook(() => useTaskManager());
    
    act(() => {
      result.current.addTask('Test task');
    });
    
    const taskId = result.current.tasks[0].id;
    
    act(() => {
      result.current.removeTask(taskId);
    });
    
    expect(result.current.tasks).toHaveLength(0);
  });

  test('should toggle task completion', () => {
    const { result } = renderHook(() => useTaskManager());
    
    act(() => {
      result.current.addTask('Test task');
    });
    
    const taskId = result.current.tasks[0].id;
    
    act(() => {
      result.current.toggleTask(taskId);
    });
    
    expect(result.current.tasks[0].completed).toBe(true);
    
    act(() => {
      result.current.toggleTask(taskId);
    });
    
    expect(result.current.tasks[0].completed).toBe(false);
  });

  test('should clear completed tasks', () => {
    const { result } = renderHook(() => useTaskManager());
    
    // Add tasks
    act(() => {
      result.current.addTask('Task 1');
      result.current.addTask('Task 2');
      result.current.addTask('Task 3');
    });
    
    // Complete some tasks
    act(() => {
      result.current.toggleTask(result.current.tasks[0].id);
      result.current.toggleTask(result.current.tasks[2].id);
    });
    
    expect(result.current.tasks.filter(t => t.completed)).toHaveLength(2);
    
    // Clear completed
    act(() => {
      result.current.clearCompleted();
    });
    
    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].text).toBe('Task 2');
    expect(result.current.tasks[0].completed).toBe(false);
  });

  test('should handle multiple operations', () => {
    const { result } = renderHook(() => useTaskManager());
    
    // Add multiple tasks
    act(() => {
      result.current.addTask('Task 1');
      result.current.addTask('Task 2');
      result.current.addTask('Task 3');
    });
    
    expect(result.current.tasks).toHaveLength(3);
    
    // Toggle and remove
    act(() => {
      result.current.toggleTask(result.current.tasks[1].id);
      result.current.removeTask(result.current.tasks[0].id);
    });
    
    expect(result.current.tasks).toHaveLength(2);
    expect(result.current.tasks.some(t => t.completed)).toBe(true);
  });
});