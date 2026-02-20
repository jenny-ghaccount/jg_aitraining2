// App utility functions tests
describe('App Utility Functions', () => {
  
  describe('Date formatting utilities', () => {
    const formatDueDate = (dateString) => {
      if (!dateString) return null;
      const date = new Date(dateString);
      const today = new Date();
      const daysDiff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
      
      if (daysDiff === 0) return 'Due today';
      if (daysDiff === 1) return 'Due tomorrow';
      if (daysDiff === -1) return 'Due yesterday';
      if (daysDiff < 0) return `${Math.abs(daysDiff)} days overdue`;
      if (daysDiff > 0) return `Due in ${daysDiff} days`;
      
      return date.toLocaleDateString();
    };

    test('formats due dates correctly', () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      expect(formatDueDate(today.toISOString())).toBe('Due today');
      expect(formatDueDate(tomorrow.toISOString())).toBe('Due tomorrow');
      expect(formatDueDate(yesterday.toISOString())).toBe('Due yesterday');
    });

    test('handles null and undefined dates', () => {
      expect(formatDueDate(null)).toBe(null);
      expect(formatDueDate(undefined)).toBe(null);
      expect(formatDueDate('')).toBe(null);
    });

    test('formats overdue dates', () => {
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      
      expect(formatDueDate(threeDaysAgo.toISOString())).toBe('3 days overdue');
    });

    test('formats future dates', () => {
      const inFiveDays = new Date();
      inFiveDays.setDate(inFiveDays.getDate() + 5);
      
      expect(formatDueDate(inFiveDays.toISOString())).toBe('Due in 5 days');
    });
  });

  describe('Task status utilities', () => {
    const getTaskStatus = (task) => {
      if (task.completed) return 'completed';
      if (!task.dueDate) return 'normal';
      
      const today = new Date();
      const dueDate = new Date(task.dueDate);
      const daysDiff = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
      
      if (daysDiff < 0) return 'overdue';
      if (daysDiff <= 1) return 'due-soon';
      return 'normal';
    };

    test('returns correct status for completed tasks', () => {
      const task = { completed: true, dueDate: '2026-02-20' };
      expect(getTaskStatus(task)).toBe('completed');
    });

    test('returns correct status for tasks without due date', () => {
      const task = { completed: false, dueDate: null };
      expect(getTaskStatus(task)).toBe('normal');
    });

    test('returns overdue for past due dates', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      const task = { completed: false, dueDate: yesterday.toISOString() };
      expect(getTaskStatus(task)).toBe('overdue');
    });

    test('returns due-soon for tasks due today or tomorrow', () => {
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const taskToday = { completed: false, dueDate: today.toISOString() };
      const taskTomorrow = { completed: false, dueDate: tomorrow.toISOString() };
      
      expect(getTaskStatus(taskToday)).toBe('due-soon');
      expect(getTaskStatus(taskTomorrow)).toBe('due-soon');
    });

    test('returns normal for future tasks', () => {
      const nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);
      
      const task = { completed: false, dueDate: nextWeek.toISOString() };
      expect(getTaskStatus(task)).toBe('normal');
    });
  });

  describe('Task filtering utilities', () => {
    const getFilteredTasks = (tasks, filter) => {
      let filtered;
      switch (filter) {
        case 'active':
          filtered = tasks.filter(task => !task.completed);
          break;
        case 'completed':
          filtered = tasks.filter(task => task.completed);
          break;
        default:
          filtered = tasks;
      }
      
      return filtered.sort((a, b) => {
        if (a.dueDate && b.dueDate) {
          return new Date(a.dueDate) - new Date(b.dueDate);
        }
        if (a.dueDate && !b.dueDate) return -1;
        if (!a.dueDate && b.dueDate) return 1;
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    };

    const sampleTasks = [
      { id: 1, completed: false, dueDate: '2026-02-25', createdAt: '2026-02-19T10:00:00Z' },
      { id: 2, completed: true, dueDate: '2026-02-20', createdAt: '2026-02-19T09:00:00Z' },
      { id: 3, completed: false, dueDate: null, createdAt: '2026-02-19T11:00:00Z' },
      { id: 4, completed: true, dueDate: null, createdAt: '2026-02-19T08:00:00Z' }
    ];

    test('filters active tasks correctly', () => {
      const result = getFilteredTasks(sampleTasks, 'active');
      expect(result).toHaveLength(2);
      expect(result.every(task => !task.completed)).toBe(true);
    });

    test('filters completed tasks correctly', () => {
      const result = getFilteredTasks(sampleTasks, 'completed');
      expect(result).toHaveLength(2);
      expect(result.every(task => task.completed)).toBe(true);
    });

    test('shows all tasks for "all" filter', () => {
      const result = getFilteredTasks(sampleTasks, 'all');
      expect(result).toHaveLength(4);
    });

    test('sorts tasks by due date then creation date', () => {
      const result = getFilteredTasks(sampleTasks, 'all');
      
      // Tasks with due dates should come first, sorted by due date
      // Then tasks without due dates, sorted by creation date
      expect(result[0].dueDate).toBe('2026-02-20'); // Earliest due date
      expect(result[1].dueDate).toBe('2026-02-25'); // Later due date
      
      // Among tasks without due dates, earliest created should come first
      const noDueDateTasks = result.filter(task => !task.dueDate);
      expect(new Date(noDueDateTasks[0].createdAt) <= new Date(noDueDateTasks[1].createdAt)).toBe(true);
    });
  });

  describe('Input validation', () => {
    const validateTask = (taskData) => {
      const errors = [];
      
      if (!taskData.title || taskData.title.trim() === '') {
        errors.push('Title is required');
      }
      
      if (taskData.title && taskData.title.length > 100) {
        errors.push('Title must be less than 100 characters');
      }
      
      if (taskData.description && taskData.description.length > 500) {
        errors.push('Description must be less than 500 characters');
      }
      
      return errors;
    };

    test('validates required title', () => {
      expect(validateTask({})).toContain('Title is required');
      expect(validateTask({ title: '' })).toContain('Title is required');
      expect(validateTask({ title: '   ' })).toContain('Title is required');
    });

    test('validates title length', () => {
      const longTitle = 'x'.repeat(101);
      expect(validateTask({ title: longTitle })).toContain('Title must be less than 100 characters');
    });

    test('validates description length', () => {
      const longDescription = 'x'.repeat(501);
      expect(validateTask({ title: 'Valid', description: longDescription }))
        .toContain('Description must be less than 500 characters');
    });

    test('accepts valid task data', () => {
      const validTask = {
        title: 'Valid Task',
        description: 'Valid description'
      };
      expect(validateTask(validTask)).toHaveLength(0);
    });
  });
});