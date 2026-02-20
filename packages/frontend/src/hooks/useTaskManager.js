import { useState, useCallback } from 'react';
import { validateTask } from '../utils/taskUtils';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Counter for unique IDs (consistent with our earlier fix)
  let idCounter = 1;
  
  const addTask = useCallback((taskData) => {
    const validation = validateTask(taskData);
    
    if (!validation.isValid) {
      setError(validation.errors.join(', '));
      return null;
    }
    
    const newTask = {
      id: idCounter++,
      title: taskData.title,
      description: taskData.description || '',
      completed: false,
      priority: taskData.priority || 'medium',
      createdAt: new Date().toISOString(),
      ...taskData
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
    setError(null);
    return newTask;
  }, []);
  
  const updateTask = useCallback((taskId, updates) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, ...updates, updatedAt: new Date().toISOString() }
          : task
      )
    );
  }, []);
  
  const deleteTask = useCallback((taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, []);
  
  const toggleTaskCompletion = useCallback((taskId) => {
    updateTask(taskId, { 
      completed: !tasks.find(task => task.id === taskId)?.completed 
    });
  }, [tasks, updateTask]);
  
  const clearCompleted = useCallback(() => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  }, []);
  
  const getTasks = useCallback((filter = 'all') => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks]);
  
  return {
    tasks,
    filter,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
    clearCompleted,
    getTasks,
    setFilter
  };
};

export default useTaskManager;