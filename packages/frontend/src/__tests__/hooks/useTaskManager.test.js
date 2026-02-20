import { renderHook, act } from '@testing-library/react';
import useTaskManager from '../../hooks/useTaskManager';

// Mock fetch for API calls
global.fetch = jest.fn();

describe('Task Manager Hook Tests', () => {
  beforeEach(() => {
    if (global.fetch && global.fetch.mockClear) {
      global.fetch.mockClear();
    }
  });

  test('initializes with correct default state', () => {
    const { result } = renderHook(() => useTaskManager());
    
    expect(result.current.tasks).toEqual([]);
    expect(result.current.filter).toBe('all');
    expect(result.current.isLoading).toBe(false);
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
});