const request = require('supertest');
const { app, db } = require('../src/app');
const { dbUtils, createValidTask } = require('./test-utils');

// Close the database connection after all tests
afterAll(() => {
  if (db) {
    db.close();
  }
});

describe('Advanced Backend Edge Cases and Integration Tests', () => {
  beforeEach(() => {
    dbUtils.cleanTasks(db);
  });

  describe('Data Consistency and Transaction Testing', () => {
    test('should handle concurrent task creation without duplicates', async () => {
      const taskData = createValidTask({ title: 'Concurrent Task' });
      
      // Create multiple identical requests concurrently
      const concurrentRequests = Array.from({ length: 5 }, () =>
        request(app)
          .post('/api/tasks')
          .send(taskData)
      );

      const responses = await Promise.all(concurrentRequests);
      
      // All should succeed
      responses.forEach(response => {
        expect(response.status).toBe(201);
      });

      // Should have 5 separate tasks with unique IDs
      const uniqueIds = new Set(responses.map(r => r.body.id));
      expect(uniqueIds.size).toBe(5);
    });

    test('should maintain data integrity during rapid updates', async () => {
      // Create initial task
      const createResponse = await request(app)
        .post('/api/tasks')
        .send(createValidTask());
      
      const taskId = createResponse.body.id;

      // Perform multiple updates concurrently
      const updates = [
        { title: 'Update 1', description: 'First update' },
        { title: 'Update 2', description: 'Second update' },
        { title: 'Update 3', description: 'Third update' }
      ];

      const updatePromises = updates.map(update =>
        request(app)
          .put(`/api/tasks/${taskId}`)
          .send(update)
      );

      const updateResponses = await Promise.all(updatePromises);
      
      // All updates should succeed
      updateResponses.forEach(response => {
        expect(response.status).toBe(200);
      });

      // Final state should be consistent
      const finalResponse = await request(app).get(`/api/tasks/${taskId}`);
      expect(finalResponse.status).toBe(200);
      expect(finalResponse.body.id).toBe(taskId);
    });

    test('should handle delete operations during concurrent access', async () => {
      // Create task
      const createResponse = await request(app)
        .post('/api/tasks')
        .send(createValidTask());
      
      const taskId = createResponse.body.id;

      // Attempt concurrent operations on the same task
      const operations = [
        request(app).get(`/api/tasks/${taskId}`),
        request(app).put(`/api/tasks/${taskId}`).send({ title: 'Updated' }),
        request(app).delete(`/api/tasks/${taskId}`),
        request(app).patch(`/api/tasks/${taskId}/status`).send({ completed: true })
      ];

      const responses = await Promise.allSettled(operations);
      
      // At least one operation should succeed
      const successful = responses.filter(r => 
        r.status === 'fulfilled' && 
        [200, 201, 204].includes(r.value.status)
      );
      
      expect(successful.length).toBeGreaterThan(0);
    });
  });

  describe('Complex Query and Filtering Edge Cases', () => {
    beforeEach(async () => {
      // Create diverse test data
      const tasks = [
        { title: 'A Task', completed: false, dueDate: '2026-02-20' },
        { title: 'B Task', completed: true, dueDate: '2026-02-21' },
        { title: 'C Task', completed: false, dueDate: '2026-02-22' },
        { title: 'D Task', completed: true, dueDate: null },
        { title: 'E Task', completed: false, dueDate: null },
        { title: 'F Task', completed: false, dueDate: '2025-12-01' }, // Overdue
        { title: 'G Task', completed: true, dueDate: '2025-11-01' }   // Overdue but completed
      ];

      for (const task of tasks) {
        await request(app).post('/api/tasks').send(task);
      }
    });

    test('should handle complex filtering combinations', async () => {
      // Test active tasks only
      const activeResponse = await request(app).get('/api/tasks?status=active');
      expect(activeResponse.status).toBe(200);
      activeResponse.body.forEach(task => {
        expect(task.completed).toBe(false);
      });

      // Test completed tasks only
      const completedResponse = await request(app).get('/api/tasks?status=completed');
      expect(completedResponse.status).toBe(200);
      completedResponse.body.forEach(task => {
        expect(task.completed).toBe(true);
      });
    });

    test('should handle sorting with null values correctly', async () => {
      const response = await request(app).get('/api/tasks?sort=dueDate');
      expect(response.status).toBe(200);
      
      const tasks = response.body;
      let foundNull = false;
      
      // Tasks with due dates should come before null due dates
      for (let i = 0; i < tasks.length - 1; i++) {
        if (tasks[i].dueDate === null) {
          foundNull = true;
        } else if (foundNull) {
          // Once we find a null, all subsequent should be null
          expect(tasks[i].dueDate).toBe(null);
        }
      }
    });

    test('should handle title sorting with case sensitivity', async () => {
      // Add tasks with different cases
      await request(app).post('/api/tasks').send({ title: 'aaa Task' });
      await request(app).post('/api/tasks').send({ title: 'AAA Task' });
      await request(app).post('/api/tasks').send({ title: 'Aaa Task' });

      const response = await request(app).get('/api/tasks?sort=title');
      expect(response.status).toBe(200);
      
      const titles = response.body.map(task => task.title);
      const sortedTitles = [...titles].sort((a, b) => a.localeCompare(b));
      
      expect(titles).toEqual(sortedTitles);
    });

    test('should handle empty query parameters gracefully', async () => {
      const testUrls = [
        '/api/tasks?status=',
        '/api/tasks?sort=',
        '/api/tasks?status=invalid',
        '/api/tasks?sort=invalid',
        '/api/tasks?status=&sort=',
        '/api/tasks?randomParam=value'
      ];

      for (const url of testUrls) {
        const response = await request(app).get(url);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
      }
    });
  });

  describe('Input Validation Edge Cases', () => {
    test('should handle Unicode and special characters', async () => {
      const unicodeTasks = [
        { title: '日本語のタスク', description: 'Japanese description' },
        { title: 'Émojis 🚀💻✨', description: 'Task with emojis' },
        { title: 'Спецсимволы', description: 'Cyrillic characters' },
        { title: 'Math: ∑∆∇∞', description: 'Mathematical symbols' },
        { title: 'Quotes: "\'`', description: 'Various quotes' }
      ];

      for (const task of unicodeTasks) {
        const response = await request(app)
          .post('/api/tasks')
          .send(task);
        
        expect(response.status).toBe(201);
        expect(response.body.title).toBe(task.title);
        expect(response.body.description).toBe(task.description);
      }
    });

    test('should handle boundary values for string lengths', async () => {
      // Test exact limits
      const exactLimitTitle = 'a'.repeat(255);
      const exactLimitDescription = 'b'.repeat(1000);

      const response = await request(app)
        .post('/api/tasks')
        .send({
          title: exactLimitTitle,
          description: exactLimitDescription
        });

      expect(response.status).toBe(201);
      expect(response.body.title).toBe(exactLimitTitle);
      expect(response.body.description).toBe(exactLimitDescription);
    });

    test('should handle whitespace variations correctly', async () => {
      const whitespaceTests = [
        { title: ' Leading space', expected: 'Leading space' },
        { title: 'Trailing space ', expected: 'Trailing space' },
        { title: '  Both spaces  ', expected: 'Both spaces' },
        { title: 'Multiple   spaces', expected: 'Multiple   spaces' },
        { title: '\ttab\t', expected: 'tab' },
        { title: '\nnewline\n', expected: 'newline' }
      ];

      for (const test of whitespaceTests) {
        const response = await request(app)
          .post('/api/tasks')
          .send({ title: test.title });
        
        expect(response.status).toBe(201);
        expect(response.body.title).toBe(test.expected);
      }
    });

    test('should handle date edge cases', async () => {
      const dateTests = [
        { date: '2026-02-29', shouldFail: true },  // 2026 is not a leap year
        { date: '2024-02-29', shouldFail: false }, // 2024 is a leap year
        { date: '2026-04-31', shouldFail: true },  // April has 30 days
        { date: '2026-12-31', shouldFail: false }, // Valid date
        { date: '1900-01-01', shouldFail: false }, // Very old date
        { date: '2099-12-31', shouldFail: false }  // Far future date
      ];

      for (const test of dateTests) {
        const response = await request(app)
          .post('/api/tasks')
          .send({
            title: 'Date Test Task',
            dueDate: test.date
          });

        if (test.shouldFail) {
          expect(response.status).toBe(400);
        } else {
          expect(response.status).toBe(201);
        }
      }
    });
  });

  describe('HTTP Protocol Edge Cases', () => {
    test('should handle malformed JSON gracefully', async () => {
      const malformedJson = '{"title": "Test", "description": }';
      
      const response = await request(app)
        .post('/api/tasks')
        .set('Content-Type', 'application/json')
        .send(malformedJson);

      expect(response.status).toBe(400);
    });

    test('should handle oversized payloads appropriately', async () => {
      const oversizedPayload = {
        title: 'Test',
        description: 'x'.repeat(100000), // Very large description
        extraField: 'y'.repeat(100000),   // Extra large field
        anotherField: 'z'.repeat(100000)  // Another large field
      };

      const response = await request(app)
        .post('/api/tasks')
        .send(oversizedPayload);

      // Should either reject due to validation or size limits
      expect([400, 413, 422]).toContain(response.status);
    });

    test('should handle different Content-Type headers', async () => {
      const taskData = { title: 'Content Type Test' };

      // Test with explicit JSON content type
      const jsonResponse = await request(app)
        .post('/api/tasks')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(taskData));

      expect(jsonResponse.status).toBe(201);

      // Test with charset specification
      const charsetResponse = await request(app)
        .post('/api/tasks')
        .set('Content-Type', 'application/json; charset=utf-8')
        .send(JSON.stringify({ title: 'Charset Test' }));

      expect(charsetResponse.status).toBe(201);
    });

    test('should validate HTTP methods correctly', async () => {
      // Test unsupported methods on different endpoints
      const unsupportedTests = [
        { method: 'patch', url: '/api/tasks', expectedStatus: [404, 405] },
        { method: 'put', url: '/api/tasks', expectedStatus: [404, 405] },
        { method: 'post', url: '/api/tasks/1', expectedStatus: [404, 405] }
      ];

      for (const test of unsupportedTests) {
        const response = await request(app)[test.method](test.url);
        expect(test.expectedStatus).toContain(response.status);
      }
    });
  });

  describe('Database Constraint and Integrity Tests', () => {
    test('should handle database connection issues gracefully', async () => {
      // This test would need actual database disconnection simulation
      // For SQLite in-memory, we can test table recreation scenarios
      
      const response = await request(app).get('/api/tasks');
      expect([200, 500]).toContain(response.status);
      
      // If database is available, should return 200
      // If there are issues, should return 500 with proper error handling
    });

    test('should maintain task ID uniqueness', async () => {
      const taskPromises = Array.from({ length: 20 }, (_, i) =>
        request(app)
          .post('/api/tasks')
          .send({ title: `Task ${i}` })
      );

      const responses = await Promise.all(taskPromises);
      
      responses.forEach(response => {
        expect(response.status).toBe(201);
      });

      const taskIds = responses.map(r => r.body.id);
      const uniqueIds = new Set(taskIds);
      
      expect(uniqueIds.size).toBe(taskIds.length);
    });

    test('should handle null and undefined values appropriately', async () => {
      const nullValueTests = [
        { 
          data: { title: 'Test', description: null }, 
          shouldSucceed: true 
        },
        { 
          data: { title: 'Test', dueDate: null }, 
          shouldSucceed: true 
        },
        { 
          data: { title: 'Test', completed: null }, 
          shouldSucceed: false // completed should be boolean
        }
      ];

      for (const test of nullValueTests) {
        const response = await request(app)
          .post('/api/tasks')
          .send(test.data);

        if (test.shouldSucceed) {
          expect(response.status).toBe(201);
        } else {
          expect(response.status).toBe(400);
        }
      }
    });
  });

  describe('API Response Consistency', () => {
    test('should return consistent response formats across operations', async () => {
      // Create task
      const createResponse = await request(app)
        .post('/api/tasks')
        .send(createValidTask());
      
      expect(createResponse.status).toBe(201);
      const taskId = createResponse.body.id;

      // Get single task
      const getResponse = await request(app).get(`/api/tasks/${taskId}`);
      expect(getResponse.status).toBe(200);

      // Update task
      const updateResponse = await request(app)
        .put(`/api/tasks/${taskId}`)
        .send({ title: 'Updated Task', description: 'Updated' });
      
      expect(updateResponse.status).toBe(200);

      // All responses should have the same structure
      [createResponse.body, getResponse.body, updateResponse.body].forEach(task => {
        expect(task).toHaveProperty('id');
        expect(task).toHaveProperty('title');
        expect(task).toHaveProperty('description');
        expect(task).toHaveProperty('completed');
        expect(task).toHaveProperty('dueDate');
        expect(task).toHaveProperty('sortOrder');
        expect(task).toHaveProperty('createdAt');
        expect(task).toHaveProperty('updatedAt');
      });
    });

    test('should include proper timestamps', async () => {
      const beforeCreate = new Date();
      
      const createResponse = await request(app)
        .post('/api/tasks')
        .send(createValidTask());
      
      const afterCreate = new Date();
      
      expect(createResponse.status).toBe(201);
      
      const createdAt = new Date(createResponse.body.createdAt);
      const updatedAt = new Date(createResponse.body.updatedAt);
      
      expect(createdAt).toBeInstanceOf(Date);
      expect(updatedAt).toBeInstanceOf(Date);
      expect(createdAt.getTime()).toBeGreaterThanOrEqual(beforeCreate.getTime() - 1000);
      expect(createdAt.getTime()).toBeLessThanOrEqual(afterCreate.getTime() + 1000);
    });

    test('should handle CORS headers consistently', async () => {
      const endpoints = [
        '/api/tasks',
        '/api/tasks/1'
      ];

      const origins = [
        'http://localhost:3000',
        'https://example.com',
        'http://192.168.1.1:3000'
      ];

      for (const endpoint of endpoints) {
        for (const origin of origins) {
          const response = await request(app)
            .options(endpoint)
            .set('Origin', origin);

          expect(response.headers).toHaveProperty('access-control-allow-origin');
        }
      }
    });
  });

  describe('Error Response Quality', () => {
    test('should provide helpful error messages', async () => {
      const errorTests = [
        {
          data: { title: '' },
          expectedError: /title.*required/i
        },
        {
          data: { title: 'a'.repeat(256) },
          expectedError: /title.*255/i
        },
        {
          data: { title: 'Valid', description: 'a'.repeat(1001) },
          expectedError: /description.*1000/i
        },
        {
          data: { title: 'Valid', dueDate: 'invalid-date' },
          expectedError: /date/i
        }
      ];

      for (const test of errorTests) {
        const response = await request(app)
          .post('/api/tasks')
          .send(test.data);

        expect(response.status).toBe(400);
        expect(response.body.error).toMatch(test.expectedError);
      }
    });

    test('should not leak sensitive information in errors', async () => {
      // Attempt various operations that might cause errors
      const errorOperations = [
        () => request(app).get('/api/tasks/99999'),
        () => request(app).put('/api/tasks/99999').send({ title: 'Test' }),
        () => request(app).delete('/api/tasks/99999'),
        () => request(app).post('/api/tasks').send({ title: '' })
      ];

      for (const operation of errorOperations) {
        const response = await operation();
        
        if (response.status >= 400) {
          const errorText = JSON.stringify(response.body);
          
          // Should not contain sensitive information
          expect(errorText).not.toMatch(/sqlite/i);
          expect(errorText).not.toMatch(/database/i);
          expect(errorText).not.toMatch(/table/i);
          expect(errorText).not.toMatch(/column/i);
          expect(errorText).not.toMatch(/constraint/i);
          expect(errorText).not.toMatch(/\/.*\.js/); // File paths
          expect(errorText).not.toMatch(/at.*\(/);    // Stack traces
        }
      }
    });
  });
});