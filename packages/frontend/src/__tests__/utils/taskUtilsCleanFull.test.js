// Clean task utility function tests
describe('Task Utility Functions', () => {
  // Mock utility functions for validation
  const validateTask = (task) => {
    const errors = [];
    
    if (!task || typeof task !== 'object') {
      errors.push('Task must be an object');
    }
    
    if (!task.title || typeof task.title !== 'string' || task.title.trim() === '') {
      errors.push('Title is required');
    }
    
    if (task.title && task.title.length > 200) {
      errors.push('Title must be less than 200 characters');
    }
    
    return { isValid: errors.length === 0, errors };
  };

  const formatTaskDate = (date) => {
    if (!date) return '';
    
    try {
      const taskDate = new Date(date);
      if (isNaN(taskDate.getTime())) {
        return 'Invalid Date';
      }
      return taskDate.toLocaleDateString();
    } catch (error) {
      return 'Invalid Date';
    }
  };

  const sanitizeTaskInput = (input) => {
    if (!input || typeof input !== 'string') {
      return '';
    }
    
    // Remove HTML tags and trim whitespace
    return input.replace(/<[^>]*>/g, '').trim();
  };

  const getTaskPriority = (task) => {
    const priority = task?.priority;
    const validPriorities = ['low', 'medium', 'high'];
    
    if (validPriorities.includes(priority)) {
      return priority;
    }
    
    return 'medium'; // default priority
  };

  describe('validateTask', () => {
    test('should validate correct task data', () => {
      const validTask = { title: 'Test Task', description: 'Test Description' };
      const result = validateTask(validTask);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should reject empty title', () => {
      const invalidTask = { title: '' };
      const result = validateTask(invalidTask);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Title is required');
    });

    test('should reject missing title', () => {
      const invalidTask = { description: 'No title' };
      const result = validateTask(invalidTask);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Title is required');
    });

    test('should reject very long titles', () => {
      const longTitle = 'x'.repeat(201);
      const invalidTask = { title: longTitle };
      const result = validateTask(invalidTask);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Title must be less than 200 characters');
    });

    test('should reject non-object inputs', () => {
      expect(validateTask(null).isValid).toBe(false);
      expect(validateTask('string').isValid).toBe(false);
      expect(validateTask(123).isValid).toBe(false);
    });
  });

  describe('formatTaskDate', () => {
    test('should format valid dates', () => {
      const testDate = new Date('2024-01-15T10:30:00Z');
      const formatted = formatTaskDate(testDate);
      
      expect(formatted).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
    });

    test('should handle invalid dates', () => {
      expect(formatTaskDate(null)).toBe('');
      expect(formatTaskDate(undefined)).toBe('');
      expect(formatTaskDate('invalid-date')).toBe('Invalid Date');
      expect(formatTaskDate('2024-13-45')).toBe('Invalid Date');
    });

    test('should handle various date formats', () => {
      expect(formatTaskDate('2024-01-15')).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
      expect(formatTaskDate('2024/01/15')).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
    });
  });

  describe('sanitizeTaskInput', () => {
    test('should remove HTML tags', () => {
      expect(sanitizeTaskInput('<script>alert("xss")</script>Hello')).toBe('Hello');
      expect(sanitizeTaskInput('<b>Bold</b> text')).toBe('Bold text');
      expect(sanitizeTaskInput('<div><span>Nested</span></div>')).toBe('Nested');
    });

    test('should trim whitespace', () => {
      expect(sanitizeTaskInput('  Hello World  ')).toBe('Hello World');
      expect(sanitizeTaskInput('\n\t  Test  \n\t')).toBe('Test');
    });

    test('should handle empty or invalid inputs', () => {
      expect(sanitizeTaskInput('')).toBe('');
      expect(sanitizeTaskInput(null)).toBe('');
      expect(sanitizeTaskInput(undefined)).toBe('');
      expect(sanitizeTaskInput(123)).toBe('');
    });

    test('should preserve safe text content', () => {
      expect(sanitizeTaskInput('Normal text content')).toBe('Normal text content');
      expect(sanitizeTaskInput('Text with 123 numbers')).toBe('Text with 123 numbers');
    });
  });

  describe('getTaskPriority', () => {
    test('should return valid priority levels', () => {
      expect(getTaskPriority({ priority: 'low' })).toBe('low');
      expect(getTaskPriority({ priority: 'medium' })).toBe('medium');
      expect(getTaskPriority({ priority: 'high' })).toBe('high');
    });

    test('should return default priority for invalid values', () => {
      expect(getTaskPriority({ priority: 'invalid' })).toBe('medium');
      expect(getTaskPriority({ priority: 'urgent' })).toBe('medium');
      expect(getTaskPriority({ priority: '' })).toBe('medium');
    });

    test('should handle missing priority property', () => {
      expect(getTaskPriority({})).toBe('medium');
      expect(getTaskPriority(null)).toBe('medium');
      expect(getTaskPriority(undefined)).toBe('medium');
    });
  });

  describe('integration tests', () => {
    test('should work together for complete task processing', () => {
      const rawTask = {
        title: '  <b>Important</b> Task  ',
        description: '<script>alert("test")</script>Clean description',
        priority: 'high'
      };

      // Process the task
      const cleanTitle = sanitizeTaskInput(rawTask.title);
      const cleanDescription = sanitizeTaskInput(rawTask.description);
      const priority = getTaskPriority(rawTask);

      const processedTask = {
        title: cleanTitle,
        description: cleanDescription,
        priority: priority
      };

      // Validate the processed task
      const validation = validateTask(processedTask);

      expect(validation.isValid).toBe(true);
      expect(processedTask.title).toBe('Important Task');
      expect(processedTask.description).toBe('Clean description');
      expect(processedTask.priority).toBe('high');
    });
  });
});