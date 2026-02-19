// This file has been removed to avoid duplicate test conflicts.
// The canonical taskUtils tests are in taskUtils.test.js
    });

    test('rejects empty title', () => {
      const invalidTask = { title: '', description: 'Description' };
      expect(validateTaskData(invalidTask)).toBe(false);
    });

    test('rejects missing title', () => {
      const invalidTask = { description: 'Description' };
      expect(validateTaskData(invalidTask)).toBe(false);
    });

    test('accepts task without description', () => {
      const validTask = { title: 'Valid Task' };
      expect(validateTaskData(validTask)).toBe(true);
    });
  });

  describe('formatDate', () => {
    test('formats date correctly', () => {
      const testDate = new Date('2024-01-15T10:30:00Z');
      const formatted = formatDate(testDate);
      expect(formatted).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
    });

    test('handles invalid date', () => {
      expect(formatDate(null)).toBe('Invalid Date');
      expect(formatDate(undefined)).toBe('Invalid Date');
      expect(formatDate('invalid')).toBe('Invalid Date');
    });
  });

  describe('sanitizeInput', () => {
    test('removes HTML tags', () => {
      const input = '<script>alert("xss")</script>Hello';
      expect(sanitizeInput(input)).toBe('Hello');
    });

    test('trims whitespace', () => {
      const input = '  Hello World  ';
      expect(sanitizeInput(input)).toBe('Hello World');
    });

    test('handles empty input', () => {
      expect(sanitizeInput('')).toBe('');
      expect(sanitizeInput(null)).toBe('');
      expect(sanitizeInput(undefined)).toBe('');
    });
  });

  describe('truncateText', () => {
    test('truncates long text', () => {
      const longText = 'This is a very long text that should be truncated';
      expect(truncateText(longText, 20)).toBe('This is a very long...');
    });

    test('keeps short text unchanged', () => {
      const shortText = 'Short text';
      expect(truncateText(shortText, 20)).toBe('Short text');
    });
  });

  describe('getTaskStats', () => {
    test('calculates correct statistics', () => {
      const tasks = [
        { id: 1, completed: true },
        { id: 2, completed: false },
        { id: 3, completed: true }
      ];
      
      const stats = getTaskStats(tasks);
      expect(stats.total).toBe(3);
      expect(stats.completed).toBe(2);
      expect(stats.active).toBe(1);
    });

    test('handles empty task list', () => {
      const stats = getTaskStats([]);
      expect(stats.total).toBe(0);
      expect(stats.completed).toBe(0);
      expect(stats.active).toBe(0);
    });
  });

  describe('filterTasks', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: false },
      { id: 3, title: 'Task 3', completed: true }
    ];

    test('filters active tasks', () => {
      const activeTasks = filterTasks(tasks, 'active');
      expect(activeTasks).toHaveLength(1);
      expect(activeTasks[0].completed).toBe(false);
    });

    test('filters completed tasks', () => {
      const completedTasks = filterTasks(tasks, 'completed');
      expect(completedTasks).toHaveLength(2);
      expect(completedTasks.every(task => task.completed)).toBe(true);
    });

    test('returns all tasks for "all" filter', () => {
      const allTasks = filterTasks(tasks, 'all');
      expect(allTasks).toHaveLength(3);
    });
  });

  describe('sortTasks', () => {
    const tasks = [
      { id: 1, title: 'C Task', createdAt: '2024-01-01' },
      { id: 2, title: 'A Task', createdAt: '2024-01-03' },
      { id: 3, title: 'B Task', createdAt: '2024-01-02' }
    ];

    test('sorts by title', () => {
      const sorted = sortTasks(tasks, 'title');
      expect(sorted[0].title).toBe('A Task');
      expect(sorted[1].title).toBe('B Task');
      expect(sorted[2].title).toBe('C Task');
    });

    test('sorts by date', () => {
      const sorted = sortTasks(tasks, 'date');
      expect(sorted[0].createdAt).toBe('2024-01-03');
      expect(sorted[1].createdAt).toBe('2024-01-02');
      expect(sorted[2].createdAt).toBe('2024-01-01');
    });
  });
});