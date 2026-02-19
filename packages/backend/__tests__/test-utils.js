const request = require('supertest');

/**
 * Test utilities for backend testing
 */

/**
 * API Testing Utilities
 */
const apiTestHelpers = {
  // Create a task via API
  async createTask(app, taskData = {}) {
    const defaultTask = {
      title: 'Test Task',
      description: 'Test description',
      completed: false,
      dueDate: '2026-03-01'
    };
    
    const response = await request(app)
      .post('/api/tasks')
      .send({ ...defaultTask, ...taskData })
      .set('Accept', 'application/json');
      
    return response;
  },

  // Get all tasks via API
  async getAllTasks(app, query = {}) {
    let url = '/api/tasks';
    const queryParams = new URLSearchParams(query).toString();
    if (queryParams) {
      url += `?${queryParams}`;
    }
    
    const response = await request(app).get(url);
    return response;
  },

  // Update a task via API
  async updateTask(app, taskId, updateData) {
    const response = await request(app)
      .put(`/api/tasks/${taskId}`)
      .send(updateData)
      .set('Accept', 'application/json');
      
    return response;
  },

  // Delete a task via API
  async deleteTask(app, taskId) {
    const response = await request(app).delete(`/api/tasks/${taskId}`);
    return response;
  },

  // Toggle task completion status
  async toggleTaskStatus(app, taskId, completed) {
    const response = await request(app)
      .patch(`/api/tasks/${taskId}/status`)
      .send({ completed })
      .set('Accept', 'application/json');
      
    return response;
  }
};

/**
 * Database Testing Utilities
 */
const dbTestHelpers = {
  // Clean up database tables
  cleanupTables(db, tables = ['tasks']) {
    tables.forEach(table => {
      try {
        db.prepare(`DELETE FROM ${table}`).run();
      } catch (error) {
        // Table might not exist, ignore
      }
    });
  },

  // Get table row count
  getRowCount(db, table) {
    try {
      const result = db.prepare(`SELECT COUNT(*) as count FROM ${table}`).get();
      return result.count;
    } catch (error) {
      return 0;
    }
  },

  // Insert test data
  insertTestData(db, table, data) {
    if (Array.isArray(data)) {
      data.forEach(row => {
        const columns = Object.keys(row).join(', ');
        const placeholders = Object.keys(row).map(() => '?').join(', ');
        const stmt = db.prepare(`INSERT INTO ${table} (${columns}) VALUES (${placeholders})`);
        stmt.run(...Object.values(row));
      });
    } else {
      const columns = Object.keys(data).join(', ');
      const placeholders = Object.keys(data).map(() => '?').join(', ');
      const stmt = db.prepare(`INSERT INTO ${table} (${columns}) VALUES (${placeholders})`);
      stmt.run(...Object.values(data));
    }
  }
};

/**
 * Validation Test Utilities
 */
const validationHelpers = {
  // Test cases for title validation
  titleTestCases: {
    valid: [
      'Simple Task',
      'Task with numbers 123',
      'a'.repeat(255), // Max length
      'Task with special chars !@#$%'
    ],
    invalid: [
      '', // Empty
      ' ', // Whitespace only
      null,
      undefined,
      'a'.repeat(256), // Too long
      123, // Not a string
      []
    ]
  },

  // Test cases for description validation  
  descriptionTestCases: {
    valid: [
      '',
      'Short description',
      'a'.repeat(1000), // Max length
      null
    ],
    invalid: [
      'a'.repeat(1001), // Too long
      123,
      []
    ]
  },

  // Test cases for date validation
  dateTestCases: {
    valid: [
      '2026-01-01',
      '2026-12-31',
      '2025-02-28',
      null
    ],
    invalid: [
      'invalid-date',
      '2026-13-01', // Invalid month
      '2026-01-32', // Invalid day
      '26-01-01', // Wrong format
      '01/01/2026', // Wrong format
      123,
      'today'
    ]
  }
};

/**
 * Performance Test Utilities
 */
const performanceHelpers = {
  // Measure execution time
  async measureExecutionTime(fn) {
    const start = Date.now();
    const result = await fn();
    const end = Date.now();
    return {
      result,
      duration: end - start
    };
  },

  // Create bulk test data
  generateBulkTasks(count = 100) {
    return Array.from({ length: count }, (_, i) => ({
      title: `Bulk Task ${i + 1}`,
      description: `Description for bulk task ${i + 1}`,
      completed: i % 3 === 0,
      dueDate: i % 2 === 0 ? 
        new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0] : 
        null,
      sortOrder: i
    }));
  },

  // Test API response time
  async testResponseTime(app, endpoint, maxTime = 500) {
    const { result, duration } = await this.measureExecutionTime(
      () => request(app).get(endpoint)
    );
    
    return {
      response: result,
      duration,
      withinLimit: duration <= maxTime
    };
  }
};

module.exports = {
  apiTestHelpers,
  dbTestHelpers,
  validationHelpers,
  performanceHelpers
};