import { renderHook, act } from '@testing-library/react';
import { useState, useEffect } from 'react';

// Custom hooks to test (these would be extracted from your App.js)
const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  const fetchTasks = async (filterType = 'all', sortBy = 'dueDate') => {
    try {
      setLoading(true);
      setError(null);
      
      let url = '/api/tasks';
      const params = new URLSearchParams();
      
      if (filterType !== 'all') {
        params.append('status', filterType);
      }
      if (sortBy && sortBy !== 'dueDate') {
        params.append('sort', sortBy);
      }
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      setError(null);
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const newTask = await response.json();
      setTasks(prevTasks => [...prevTasks, newTask]);
      return newTask;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateTask = async (taskId, updates) => {
    try {
      setError(null);
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const updatedTask = await response.json();
      setTasks(prevTasks => 
        prevTasks.map(task => task.id === taskId ? updatedTask : task)
      );
      return updatedTask;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const toggleTaskCompletion = async (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    try {
      setError(null);
      const response = await fetch(`/api/tasks/${taskId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.completed }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const updatedTask = await response.json();
      setTasks(prevTasks => 
        prevTasks.map(t => t.id === taskId ? updatedTask : t)
      );
      return updatedTask;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      setError(null);
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const clearError = () => setError(null);

  return {
    tasks,
    loading,
    error,
    filter,
    setFilter,
    fetchTasks,
    addTask,
    updateTask,
    toggleTaskCompletion,
    deleteTask,
    clearError
  };
};

// Mock fetch for testing
const mockFetch = (response, options = {}) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: options.ok !== false,
      status: options.status || 200,
      statusText: options.statusText || 'OK',
      json: () => Promise.resolve(response),
    })
  );
};

describe('useTaskManager Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    global.fetch?.mockRestore?.();
  });

  describe('Initial State', () => {
    test('should initialize with correct default values', () => {
      const { result } = renderHook(() => useTaskManager());

      expect(result.current.tasks).toEqual([]);
      expect(result.current.loading).toBe(true);
      expect(result.current.error).toBe(null);
      expect(result.current.filter).toBe('all');
    });
  });

  describe('fetchTasks', () => {
    test('should fetch tasks successfully', async () => {
      const mockTasks = [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true }
      ];

      mockFetch(mockTasks);

      const { result } = renderHook(() => useTaskManager());

      await act(async () => {
        await result.current.fetchTasks();
      });

      expect(result.current.tasks).toEqual(mockTasks);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
      expect(global.fetch).toHaveBeenCalledWith('/api/tasks');
    });

    test('should fetch tasks with filters and sorting', async () => {
      mockFetch([]);

      const { result } = renderHook(() => useTaskManager());

      await act(async () => {
        await result.current.fetchTasks('active', 'title');
      });

      expect(global.fetch).toHaveBeenCalledWith('/api/tasks?status=active&sort=title');
    });

    test('should handle fetch errors properly', async () => {
      mockFetch({}, { ok: false, status: 500, statusText: 'Server Error' });

      const { result } = renderHook(() => useTaskManager());

      await act(async () => {
        await result.current.fetchTasks();
      });

      expect(result.current.tasks).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe('HTTP 500: Server Error');
    });

    test('should handle network errors', async () => {
      global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

      const { result } = renderHook(() => useTaskManager());

      await act(async () => {
        await result.current.fetchTasks();
      });

      expect(result.current.error).toBe('Network error');
      expect(result.current.loading).toBe(false);
    });
  });

  describe('addTask', () => {
    test('should add task successfully', async () => {
      const newTask = { id: 3, title: 'New Task', completed: false };
      mockFetch(newTask, { status: 201 });

      const { result } = renderHook(() => useTaskManager());

      // Set initial tasks
      act(() => {
        result.current.tasks = [{ id: 1, title: 'Existing Task' }];
      });

      await act(async () => {
        await result.current.addTask({ title: 'New Task' });
      });

      expect(result.current.tasks).toHaveLength(2);
      expect(result.current.tasks[1]).toEqual(newTask);
      expect(result.current.error).toBe(null);
    });

    test('should handle add task validation errors', async () => {
      mockFetch({ error: 'Title is required' }, { ok: false, status: 400 });

      const { result } = renderHook(() => useTaskManager());

      await act(async () => {
        try {
          await result.current.addTask({ title: '' });
        } catch (error) {
          // Expected to throw
        }
      });

      expect(result.current.error).toBe('Title is required');
    });
  });

  describe('updateTask', () => {
    test('should update task successfully', async () => {
      const updatedTask = { id: 1, title: 'Updated Task', completed: false };
      mockFetch(updatedTask);

      const { result } = renderHook(() => useTaskManager());

      // Set initial tasks
      act(() => {
        result.current.tasks = [{ id: 1, title: 'Original Task', completed: false }];
      });

      await act(async () => {
        await result.current.updateTask(1, { title: 'Updated Task' });
      });

      expect(result.current.tasks[0]).toEqual(updatedTask);
      expect(result.current.error).toBe(null);
    });

    test('should handle update task errors', async () => {
      mockFetch({ error: 'Task not found' }, { ok: false, status: 404 });

      const { result } = renderHook(() => useTaskManager());

      await act(async () => {
        try {
          await result.current.updateTask(999, { title: 'Updated' });
        } catch (error) {
          // Expected to throw
        }
      });

      expect(result.current.error).toBe('Task not found');
    });
  });

  describe('toggleTaskCompletion', () => {
    test('should toggle task completion successfully', async () => {
      const toggledTask = { id: 1, title: 'Task 1', completed: true };
      mockFetch(toggledTask);

      const { result } = renderHook(() => useTaskManager());

      // Set initial tasks
      act(() => {
        result.current.tasks = [{ id: 1, title: 'Task 1', completed: false }];
      });

      await act(async () => {
        await result.current.toggleTaskCompletion(1);
      });

      expect(result.current.tasks[0].completed).toBe(true);
      expect(global.fetch).toHaveBeenCalledWith('/api/tasks/1/status', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: true })
      });
    });

    test('should handle non-existent task gracefully', async () => {
      const { result } = renderHook(() => useTaskManager());

      act(() => {
        result.current.tasks = [];
      });

      const toggleResult = await act(async () => {
        return await result.current.toggleTaskCompletion(999);
      });

      expect(toggleResult).toBeUndefined();
      expect(global.fetch).not.toHaveBeenCalled();
    });
  });

  describe('deleteTask', () => {
    test('should delete task successfully', async () => {
      mockFetch({ message: 'Task deleted successfully' });

      const { result } = renderHook(() => useTaskManager());

      // Set initial tasks
      act(() => {
        result.current.tasks = [
          { id: 1, title: 'Task 1' },
          { id: 2, title: 'Task 2' }
        ];
      });

      await act(async () => {
        await result.current.deleteTask(1);
      });

      expect(result.current.tasks).toHaveLength(1);
      expect(result.current.tasks[0].id).toBe(2);
    });

    test('should handle delete errors', async () => {
      mockFetch({ error: 'Task not found' }, { ok: false, status: 404 });

      const { result } = renderHook(() => useTaskManager());

      await act(async () => {
        try {
          await result.current.deleteTask(999);
        } catch (error) {
          // Expected to throw
        }
      });

      expect(result.current.error).toBe('Task not found');
    });
  });

  describe('Error Management', () => {
    test('should clear errors', () => {
      const { result } = renderHook(() => useTaskManager());

      // Set an error
      act(() => {
        result.current.error = 'Test error';
      });

      act(() => {
        result.current.clearError();
      });

      expect(result.current.error).toBe(null);
    });

    test('should clear previous errors on successful operations', async () => {
      mockFetch([]);

      const { result } = renderHook(() => useTaskManager());

      // Set initial error
      act(() => {
        result.current.error = 'Previous error';
      });

      await act(async () => {
        await result.current.fetchTasks();
      });

      expect(result.current.error).toBe(null);
    });
  });

  describe('State Management Edge Cases', () => {
    test('should handle rapid successive operations', async () => {
      const { result } = renderHook(() => useTaskManager());

      // Mock successful responses for multiple operations
      mockFetch({ id: 1, title: 'Task 1' }, { status: 201 });

      // Perform multiple operations rapidly
      const operations = [
        result.current.addTask({ title: 'Task 1' }),
        result.current.addTask({ title: 'Task 2' }),
        result.current.addTask({ title: 'Task 3' })
      ];

      await act(async () => {
        await Promise.all(operations);
      });

      // Should handle all operations without state corruption
      expect(result.current.tasks).toHaveLength(3);
    });

    test('should maintain referential integrity during updates', async () => {
      const { result } = renderHook(() => useTaskManager());

      const initialTasks = [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: false }
      ];

      act(() => {
        result.current.tasks = initialTasks;
      });

      mockFetch({ id: 1, title: 'Updated Task 1', completed: true });

      await act(async () => {
        await result.current.updateTask(1, { title: 'Updated Task 1', completed: true });
      });

      // Task 2 should remain unchanged (same reference)
      expect(result.current.tasks[1]).toBe(initialTasks[1]);
      // Task 1 should be updated
      expect(result.current.tasks[0].title).toBe('Updated Task 1');
    });
  });
});