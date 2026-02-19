// Test utilities and helper functions
import { 
  validateTaskData, 
  formatDate, 
  isOverdue, 
  sortTasks, 
  filterTasks,
  generateTaskId,
  sanitizeInput,
  debounce,
  throttle
} from '../utils/taskUtils';

// Utility functions (these would be extracted from your components)
export const validateTaskData = (taskData) => {
  const errors = [];
  
  if (!taskData.title || taskData.title.trim() === '') {
    errors.push('Title is required');
  }
  
  if (taskData.title && taskData.title.length > 255) {
    errors.push('Title cannot exceed 255 characters');
  }
  
  if (taskData.description && taskData.description.length > 1000) {
    errors.push('Description cannot exceed 1000 characters');
  }
  
  if (taskData.dueDate) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(taskData.dueDate)) {
      errors.push('Due date must be in YYYY-MM-DD format');
    } else {
      const date = new Date(taskData.dueDate);
      if (isNaN(date.getTime())) {
        errors.push('Invalid date');
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const formatDate = (dateString, options = {}) => {
  if (!dateString) return null;
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return null;
    
    const defaultOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      ...options
    };
    
    return date.toLocaleDateString('en-US', defaultOptions);
  } catch (error) {
    return null;
  }
};

export const isOverdue = (dueDate) => {
  if (!dueDate) return false;
  
  try {
    const due = new Date(dueDate);
    const now = new Date();
    
    // Set both dates to start of day for comparison
    due.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    
    return due < now;
  } catch (error) {
    return false;
  }
};

export const sortTasks = (tasks, sortBy = 'dueDate') => {
  if (!Array.isArray(tasks)) return [];
  
  const tasksCopy = [...tasks];
  
  switch (sortBy) {
    case 'title':
      return tasksCopy.sort((a, b) => a.title.localeCompare(b.title));
      
    case 'createdAt':
      return tasksCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
    case 'dueDate':
    default:
      return tasksCopy.sort((a, b) => {
        // Tasks with due dates come first
        if (!a.dueDate && !b.dueDate) {
          return new Date(a.createdAt) - new Date(b.createdAt);
        }
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
  }
};

export const filterTasks = (tasks, filter = 'all') => {
  if (!Array.isArray(tasks)) return [];
  
  switch (filter) {
    case 'active':
      return tasks.filter(task => !task.completed);
      
    case 'completed':
      return tasks.filter(task => task.completed);
      
    case 'overdue':
      return tasks.filter(task => !task.completed && isOverdue(task.dueDate));
      
    case 'today':
      const today = new Date().toISOString().split('T')[0];
      return tasks.filter(task => task.dueDate === today);
      
    case 'upcoming':
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const weekFromNow = new Date();
      weekFromNow.setDate(weekFromNow.getDate() + 7);
      
      return tasks.filter(task => {
        if (!task.dueDate) return false;
        const dueDate = new Date(task.dueDate);
        return dueDate >= tomorrow && dueDate <= weekFromNow;
      });
      
    case 'all':
    default:
      return tasks;
  }
};

export const generateTaskId = () => {
  return Date.now() + Math.random().toString(36).substr(2, 9);
};

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>\"']/g, '') // Remove potentially dangerous characters
    .slice(0, 1000); // Limit length
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

describe('Task Utility Functions', () => {
  describe('validateTaskData', () => {
    test('should validate correct task data', () => {
      const validTask = {
        title: 'Valid Task',
        description: 'Valid description',
        dueDate: '2026-12-31'
      };
      
      const result = validateTaskData(validTask);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
    
    test('should reject empty title', () => {
      const invalidTask = { title: '' };
      const result = validateTaskData(invalidTask);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Title is required');
    });
    
    test('should reject whitespace-only title', () => {
      const invalidTask = { title: '   ' };
      const result = validateTaskData(invalidTask);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Title is required');
    });
    
    test('should reject title exceeding 255 characters', () => {
      const invalidTask = { title: 'a'.repeat(256) };
      const result = validateTaskData(invalidTask);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Title cannot exceed 255 characters');
    });
    
    test('should reject description exceeding 1000 characters', () => {
      const invalidTask = {
        title: 'Valid Title',
        description: 'a'.repeat(1001)
      };
      const result = validateTaskData(invalidTask);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Description cannot exceed 1000 characters');
    });
    
    test('should validate date format', () => {
      const testCases = [
        { dueDate: '2026-02-29', shouldBeValid: false }, // Invalid date
        { dueDate: '2026-13-01', shouldBeValid: false }, // Invalid month
        { dueDate: '2026/02/25', shouldBeValid: false }, // Wrong format
        { dueDate: '25-02-2026', shouldBeValid: false }, // Wrong format
        { dueDate: 'invalid', shouldBeValid: false },     // Invalid string
        { dueDate: '2026-02-25', shouldBeValid: true },   // Valid date
        { dueDate: '2025-01-01', shouldBeValid: true }    // Valid past date
      ];
      
      testCases.forEach(({ dueDate, shouldBeValid }) => {
        const task = { title: 'Valid Title', dueDate };
        const result = validateTaskData(task);
        
        if (shouldBeValid) {
          expect(result.isValid).toBe(true);
        } else {
          expect(result.isValid).toBe(false);
        }
      });
    });
    
    test('should handle multiple validation errors', () => {
      const invalidTask = {
        title: '',
        description: 'a'.repeat(1001),
        dueDate: 'invalid-date'
      };
      const result = validateTaskData(invalidTask);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(3);
    });
  });
  
  describe('formatDate', () => {
    test('should format valid dates correctly', () => {
      expect(formatDate('2026-02-25')).toBe('Feb 25, 2026');
      expect(formatDate('2025-12-31')).toBe('Dec 31, 2025');
    });
    
    test('should handle invalid dates', () => {
      expect(formatDate('invalid')).toBe(null);
      expect(formatDate('2026-13-01')).toBe(null);
      expect(formatDate('')).toBe(null);
      expect(formatDate(null)).toBe(null);
      expect(formatDate(undefined)).toBe(null);
    });
    
    test('should accept custom formatting options', () => {
      const options = { 
        year: '2-digit', 
        month: 'numeric', 
        day: 'numeric' 
      };
      
      const result = formatDate('2026-02-25', options);
      expect(result).toMatch(/2\/25\/26/);
    });
  });
  
  describe('isOverdue', () => {
    test('should identify overdue tasks', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toISOString().split('T')[0];
      
      expect(isOverdue(yesterdayString)).toBe(true);
    });
    
    test('should not mark future tasks as overdue', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split('T')[0];
      
      expect(isOverdue(tomorrowString)).toBe(false);
    });
    
    test('should not mark today\'s tasks as overdue', () => {
      const today = new Date().toISOString().split('T')[0];
      expect(isOverdue(today)).toBe(false);
    });
    
    test('should handle invalid dates', () => {
      expect(isOverdue('invalid')).toBe(false);
      expect(isOverdue('')).toBe(false);
      expect(isOverdue(null)).toBe(false);
      expect(isOverdue(undefined)).toBe(false);
    });
    
    test('should handle null due dates', () => {
      expect(isOverdue(null)).toBe(false);
    });
  });
  
  describe('sortTasks', () => {
    const sampleTasks = [
      { 
        id: 1, 
        title: 'Z Task', 
        dueDate: '2026-03-01', 
        createdAt: '2026-02-20T10:00:00Z',
        completed: false 
      },
      { 
        id: 2, 
        title: 'A Task', 
        dueDate: '2026-02-25', 
        createdAt: '2026-02-19T10:00:00Z',
        completed: true 
      },
      { 
        id: 3, 
        title: 'M Task', 
        dueDate: null, 
        createdAt: '2026-02-21T10:00:00Z',
        completed: false 
      }
    ];
    
    test('should sort by title alphabetically', () => {
      const sorted = sortTasks(sampleTasks, 'title');
      
      expect(sorted[0].title).toBe('A Task');
      expect(sorted[1].title).toBe('M Task');
      expect(sorted[2].title).toBe('Z Task');
    });
    
    test('should sort by creation date (newest first)', () => {
      const sorted = sortTasks(sampleTasks, 'createdAt');
      
      expect(sorted[0].id).toBe(3); // Most recent
      expect(sorted[2].id).toBe(2); // Oldest
    });
    
    test('should sort by due date (default)', () => {
      const sorted = sortTasks(sampleTasks);
      
      expect(sorted[0].dueDate).toBe('2026-02-25'); // Earliest due date
      expect(sorted[1].dueDate).toBe('2026-03-01');  // Later due date
      expect(sorted[2].dueDate).toBe(null);          // No due date (last)
    });
    
    test('should handle empty array', () => {
      expect(sortTasks([])).toEqual([]);
    });
    
    test('should handle invalid input', () => {
      expect(sortTasks(null)).toEqual([]);
      expect(sortTasks(undefined)).toEqual([]);
      expect(sortTasks('not-array')).toEqual([]);
    });
    
    test('should not mutate original array', () => {
      const originalTasks = [...sampleTasks];
      sortTasks(sampleTasks, 'title');
      
      expect(sampleTasks).toEqual(originalTasks);
    });
  });
  
  describe('filterTasks', () => {
    const sampleTasks = [
      { 
        id: 1, 
        title: 'Active Task', 
        completed: false, 
        dueDate: '2026-02-25' 
      },
      { 
        id: 2, 
        title: 'Completed Task', 
        completed: true, 
        dueDate: '2026-03-01' 
      },
      { 
        id: 3, 
        title: 'Overdue Task', 
        completed: false, 
        dueDate: '2025-12-01' 
      },
      { 
        id: 4, 
        title: 'No Due Date Task', 
        completed: false, 
        dueDate: null 
      }
    ];
    
    test('should filter active tasks', () => {
      const filtered = filterTasks(sampleTasks, 'active');
      
      expect(filtered).toHaveLength(3);
      expect(filtered.every(task => !task.completed)).toBe(true);
    });
    
    test('should filter completed tasks', () => {
      const filtered = filterTasks(sampleTasks, 'completed');
      
      expect(filtered).toHaveLength(1);
      expect(filtered[0].completed).toBe(true);
    });
    
    test('should filter overdue tasks', () => {
      const filtered = filterTasks(sampleTasks, 'overdue');
      
      expect(filtered).toHaveLength(1);
      expect(filtered[0].title).toBe('Overdue Task');
    });
    
    test('should filter today\'s tasks', () => {
      const today = new Date().toISOString().split('T')[0];
      const tasksWithToday = [
        ...sampleTasks,
        { id: 5, title: 'Today Task', completed: false, dueDate: today }
      ];
      
      const filtered = filterTasks(tasksWithToday, 'today');
      
      expect(filtered).toHaveLength(1);
      expect(filtered[0].title).toBe('Today Task');
    });
    
    test('should return all tasks by default', () => {
      const filtered = filterTasks(sampleTasks);
      
      expect(filtered).toHaveLength(4);
      expect(filtered).toEqual(sampleTasks);
    });
    
    test('should handle invalid input', () => {
      expect(filterTasks(null)).toEqual([]);
      expect(filterTasks(undefined)).toEqual([]);
      expect(filterTasks('not-array')).toEqual([]);
    });
  });
  
  describe('generateTaskId', () => {
    test('should generate unique IDs', () => {
      const id1 = generateTaskId();
      const id2 = generateTaskId();
      
      expect(id1).not.toBe(id2);
      expect(typeof id1).toBe('string');
      expect(typeof id2).toBe('string');
    });
    
    test('should generate IDs of reasonable length', () => {
      const id = generateTaskId();
      
      expect(id.length).toBeGreaterThan(10);
      expect(id.length).toBeLessThan(30);
    });
  });
  
  describe('sanitizeInput', () => {
    test('should remove dangerous characters', () => {
      const dangerous = '<script>alert("xss")</script>';
      const sanitized = sanitizeInput(dangerous);
      
      expect(sanitized).toBe('scriptalert(xss)/script');
    });
    
    test('should trim whitespace', () => {
      const untrimmed = '  test input  ';
      const sanitized = sanitizeInput(untrimmed);
      
      expect(sanitized).toBe('test input');
    });
    
    test('should limit input length', () => {
      const longInput = 'a'.repeat(2000);
      const sanitized = sanitizeInput(longInput);
      
      expect(sanitized.length).toBe(1000);
    });
    
    test('should handle non-string input', () => {
      expect(sanitizeInput(null)).toBe('');
      expect(sanitizeInput(undefined)).toBe('');
      expect(sanitizeInput(123)).toBe('');
      expect(sanitizeInput({})).toBe('');
    });
  });
  
  describe('debounce', () => {
    jest.useFakeTimers();
    
    test('should delay function execution', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);
      
      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();
      
      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    
    test('should cancel previous calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);
      
      debouncedFn();
      debouncedFn();
      debouncedFn();
      
      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    
    afterEach(() => {
      jest.clearAllTimers();
    });
  });
  
  describe('throttle', () => {
    jest.useFakeTimers();
    
    test('should limit function calls', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 100);
      
      throttledFn();
      throttledFn();
      throttledFn();
      
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      jest.advanceTimersByTime(100);
      throttledFn();
      
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
    
    afterEach(() => {
      jest.clearAllTimers();
    });
  });
});