// This file has been removed to avoid duplicate test conflicts.
// The canonical useTaskManager tests are in useTaskManager.test.js
    
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

  return {
    tasks,
    loading,
    error,
    addTask,
    removeTask,
    toggleTask
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
});