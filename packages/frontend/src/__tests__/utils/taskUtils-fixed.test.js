// Test utilities for task management
describe('Task Utilities', () => {
  describe('validateTaskData', () => {
    const validateTaskData = (taskData) => {
      const errors = [];
      
      if (!taskData || !taskData.title || taskData.title.trim() === '') {
        errors.push('Title is required');
      }
      
      if (taskData.title && taskData.title.length > 100) {
        errors.push('Title must be less than 100 characters');
      }
      
      return errors;
    };

    test('should require title', () => {
      expect(validateTaskData({})).toContain('Title is required');
      expect(validateTaskData({ title: '' })).toContain('Title is required');
      expect(validateTaskData({ title: '   ' })).toContain('Title is required');
    });

    test('should accept valid title', () => {
      expect(validateTaskData({ title: 'Valid task' })).toHaveLength(0);
    });

    test('should reject very long titles', () => {
      const longTitle = 'x'.repeat(101);
      expect(validateTaskData({ title: longTitle })).toContain('Title must be less than 100 characters');
    });
  });

  describe('formatDate', () => {
    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };

    test('should format dates correctly', () => {
      const result = formatDate('2024-01-15');
      expect(result).toMatch(/\d+\/\d+\/\d+/);
    });

    test('should handle empty dates', () => {
      expect(formatDate('')).toBe('');
      expect(formatDate(null)).toBe('');
      expect(formatDate(undefined)).toBe('');
    });
  });

  describe('sanitizeInput', () => {
    const sanitizeInput = (input) => {
      if (typeof input !== 'string') return '';
      return input.trim().replace(/<[^>]*>/g, '');
    };

    test('should trim whitespace', () => {
      expect(sanitizeInput('  hello  ')).toBe('hello');
    });

    test('should remove HTML tags', () => {
      expect(sanitizeInput('<script>alert("test")</script>')).toBe('alert("test")');
      expect(sanitizeInput('Hello <b>world</b>')).toBe('Hello world');
    });

    test('should handle non-string inputs', () => {
      expect(sanitizeInput(null)).toBe('');
      expect(sanitizeInput(undefined)).toBe('');
      expect(sanitizeInput(123)).toBe('');
    });
  });
});