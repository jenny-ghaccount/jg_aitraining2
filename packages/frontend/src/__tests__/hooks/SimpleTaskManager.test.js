import { renderHook, act } from '@testing-library/react';
import React from 'react';

// Simple mock hook for testing
const useSimpleTaskManager = () => {
  const [tasks, setTasks] = React.useState([]);
  const [filter, setFilter] = React.useState('all');
  const [loading, setLoading] = React.useState(false);

  const addTask = React.useCallback((task) => {
    setTasks(prev => [...prev, { ...task, id: Date.now() }]);
  }, []);

  const removeTask = React.useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  return {
    tasks,
    filter,
    loading,
    setFilter,
    addTask,
    removeTask
  };
};

describe('Simple Task Manager Hook', () => {
  test('initializes with empty tasks', () => {
    const { result } = renderHook(() => useSimpleTaskManager());
    
    expect(result.current.tasks).toEqual([]);
    expect(result.current.filter).toBe('all');
    expect(result.current.loading).toBe(false);
  });

  test('can add a task', () => {
    const { result } = renderHook(() => useSimpleTaskManager());
    
    act(() => {
      result.current.addTask({ title: 'Test Task' });
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe('Test Task');
  });

  test('can remove a task', () => {
    const { result } = renderHook(() => useSimpleTaskManager());
    
    act(() => {
      result.current.addTask({ title: 'Test Task' });
    });

    const taskId = result.current.tasks[0].id;

    act(() => {
      result.current.removeTask(taskId);
    });

    expect(result.current.tasks).toHaveLength(0);
  });

  test('can change filter', () => {
    const { result } = renderHook(() => useSimpleTaskManager());
    
    act(() => {
      result.current.setFilter('active');
    });

    expect(result.current.filter).toBe('active');
  });
});