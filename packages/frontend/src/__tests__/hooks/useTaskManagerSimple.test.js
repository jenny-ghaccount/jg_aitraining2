// This file has been removed to avoid duplicate test conflicts.
// The canonical useTaskManager tests are in useTaskManager.test.js
    const mockTasks = [
      { id: 1, title: 'Task 1', completed: false }
    ];
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockTasks
    });

    const { result, rerender } = renderHook(() => useTaskManager());

    await act(async () => {
      rerender();
    });

    expect(fetch).toHaveBeenCalledWith('/api/tasks');
  });

  test('changes filter correctly', () => {
    const { result } = renderHook(() => useTaskManager());
    
    act(() => {
      result.current.setFilter('active');
    });

    expect(result.current.filter).toBe('active');
  });

  test('adds task successfully', async () => {
    const newTask = { id: 1, title: 'New Task', completed: false };
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => newTask
    });

    const { result } = renderHook(() => useTaskManager());

    await act(async () => {
      await result.current.addTask({ title: 'New Task' });
    });

    expect(fetch).toHaveBeenCalledWith('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'New Task' })
    });
  });

  test('updates task successfully', async () => {
    const updatedTask = { id: 1, title: 'Updated Task', completed: true };
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => updatedTask
    });

    const { result } = renderHook(() => useTaskManager());

    await act(async () => {
      await result.current.updateTask(1, { completed: true });
    });

    expect(fetch).toHaveBeenCalledWith('/api/tasks/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true })
    });
  });

  test('deletes task successfully', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useTaskManager());

    await act(async () => {
      await result.current.deleteTask(1);
    });

    expect(fetch).toHaveBeenCalledWith('/api/tasks/1', {
      method: 'DELETE'
    });
  });
});