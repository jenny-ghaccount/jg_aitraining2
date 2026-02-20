// Basic utility function tests
describe('Basic Utility Functions', () => {
  describe('String utilities', () => {
    const capitalize = (str) => {
      if (!str) return '';
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const truncate = (str, length = 50) => {
      if (!str) return '';
      return str.length > length ? str.slice(0, length) + '...' : str;
    };

    test('capitalize function works', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('WORLD')).toBe('World');
      expect(capitalize('')).toBe('');
      expect(capitalize(null)).toBe('');
    });

    test('truncate function works', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
      expect(truncate('short', 10)).toBe('short');
      expect(truncate('', 5)).toBe('');
    });
  });

  describe('Array utilities', () => {
    const unique = (array) => {
      return [...new Set(array)];
    };

    const groupBy = (array, key) => {
      return array.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
      }, {});
    };

    test('unique function removes duplicates', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b']);
      expect(unique([])).toEqual([]);
    });

    test('groupBy function groups correctly', () => {
      const items = [
        { category: 'A', name: 'item1' },
        { category: 'B', name: 'item2' },
        { category: 'A', name: 'item3' }
      ];
      
      const grouped = groupBy(items, 'category');
      expect(grouped.A).toHaveLength(2);
      expect(grouped.B).toHaveLength(1);
    });
  });

  describe('Date utilities', () => {
    const isToday = (date) => {
      const today = new Date();
      const checkDate = new Date(date);
      return checkDate.toDateString() === today.toDateString();
    };

    const daysAgo = (days) => {
      const date = new Date();
      date.setDate(date.getDate() - days);
      return date;
    };

    test('isToday identifies current date', () => {
      const today = new Date();
      expect(isToday(today)).toBe(true);
      
      const yesterday = daysAgo(1);
      expect(isToday(yesterday)).toBe(false);
    });

    test('daysAgo calculates correctly', () => {
      const fiveDaysAgo = daysAgo(5);
      const today = new Date();
      const diffTime = today - fiveDaysAgo;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      expect(diffDays).toBe(5);
    });
  });
});