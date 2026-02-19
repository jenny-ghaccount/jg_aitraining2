// This file has been removed to avoid duplicate test conflicts.
// The canonical taskUtils tests are in taskUtils.test.js
  };

  const sanitizeInput = (input) => {
    if (!input) return '';
    return input.replace(/<[^>]*>/g, '').trim();
  };

  describe('validateTaskData', () => {
    test('should require title', () => {
      expect(validateTaskData({})).toBe(false);
      expect(validateTaskData({ title: '' })).toBe(false);
      expect(validateTaskData({ title: '   ' })).toBe(false);
    });

    test('should accept valid title', () => {
      expect(validateTaskData({ title: 'Valid task' })).toBe(true);
    });
  });

  describe('formatDate', () => {
    test('should format date correctly', () => {
      const testDate = new Date('2024-01-15');
      expect(formatDate(testDate)).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
    });

    test('should handle invalid dates', () => {
      expect(formatDate(null)).toBe('Invalid Date');
      expect(formatDate('invalid')).toBe('Invalid Date');
    });
  });

  describe('sanitizeInput', () => {
    test('should remove HTML tags', () => {
      expect(sanitizeInput('<script>alert("xss")</script>Hello')).toBe('Hello');
    });

    test('should handle empty input', () => {
      expect(sanitizeInput('')).toBe('');
      expect(sanitizeInput(null)).toBe('');
    });
  });
});