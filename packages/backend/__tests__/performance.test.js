const request = require('supertest');
const { app, db } = require('../src/app');
const { createMultipleTasks, dbUtils } = require('./test-utils');

// Close the database connection after all tests
afterAll(() => {
  if (db) {
    db.close();
  }
});

describe('Performance Tests', () => {
  beforeEach(() => {
    // Clean up tasks before each test
    dbUtils.cleanTasks(db);
  });

  describe('API Response Times (FR-044)', () => {
    test('GET /api/tasks should respond within 500ms', async () => {
      // Create 100 tasks for realistic testing
      const tasks = createMultipleTasks(100);
      dbUtils.insertTasks(db, tasks);

      const startTime = performance.now();
      const response = await request(app).get('/api/tasks');
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThan(500); // FR-044: API responses within 500ms
      expect(response.body).toHaveLength(100);
    });

    test('POST /api/tasks should respond within 500ms', async () => {
      const taskData = {
        title: 'Performance Test Task',
        description: 'Testing response time',
        dueDate: '2026-03-01'
      };

      const startTime = performance.now();
      const response = await request(app)
        .post('/api/tasks')
        .send(taskData);
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(201);
      expect(responseTime).toBeLessThan(500); // FR-044: API responses within 500ms
    });

    test('PUT /api/tasks/:id should respond within 500ms', async () => {
      // Create a task first
      const createResponse = await request(app)
        .post('/api/tasks')
        .send({ title: 'Test Task' });
      
      const taskId = createResponse.body.id;
      const updateData = {
        title: 'Updated Test Task',
        description: 'Updated description',
        completed: true
      };

      const startTime = performance.now();
      const response = await request(app)
        .put(`/api/tasks/${taskId}`)
        .send(updateData);
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThan(500); // FR-044: API responses within 500ms
    });

    test('DELETE /api/tasks/:id should respond within 500ms', async () => {
      // Create a task first
      const createResponse = await request(app)
        .post('/api/tasks')
        .send({ title: 'Test Task' });
      
      const taskId = createResponse.body.id;

      const startTime = performance.now();
      const response = await request(app)
        .delete(`/api/tasks/${taskId}`);
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThan(500); // FR-044: API responses within 500ms
    });
  });

  describe('Large Dataset Handling (FR-045)', () => {
    test('should handle 1000 tasks without performance degradation', async () => {
      // Create 1000 tasks
      const tasks = createMultipleTasks(1000, (i) => ({
        title: `Task ${i + 1}`,
        completed: i % 5 === 0, // 20% completed
        dueDate: i % 3 === 0 ? '2026-03-01' : null // Some with due dates
      }));

      dbUtils.insertTasks(db, tasks);

      const startTime = performance.now();
      const response = await request(app).get('/api/tasks');
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1000);
      expect(responseTime).toBeLessThan(500); // Should still be under 500ms
    });

    test('should handle filtering 1000 tasks efficiently', async () => {
      // Create 1000 tasks with varied completion status
      const tasks = createMultipleTasks(1000, (i) => ({
        completed: i % 2 === 0 // 50% completed
      }));

      dbUtils.insertTasks(db, tasks);

      const startTime = performance.now();
      const response = await request(app).get('/api/tasks?status=completed');
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(500); // Should return 500 completed tasks
      expect(responseTime).toBeLessThan(500);
    });

    test('should handle sorting 1000 tasks efficiently', async () => {
      // Create 1000 tasks with different titles
      const tasks = createMultipleTasks(1000, (i) => ({
        title: `Task ${String(i + 1).padStart(4, '0')}`
      }));

      // Shuffle the tasks before inserting to test sorting
      const shuffledTasks = tasks.sort(() => Math.random() - 0.5);
      dbUtils.insertTasks(db, shuffledTasks);

      const startTime = performance.now();
      const response = await request(app).get('/api/tasks?sort=title');
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1000);
      expect(responseTime).toBeLessThan(500);

      // Verify sorting is correct
      expect(response.body[0].title).toBe('Task 0001');
      expect(response.body[999].title).toBe('Task 1000');
    });
  });

  describe('Sorting and Filtering Performance (FR-046)', () => {
    beforeEach(() => {
      // Create a standardized dataset for consistent testing
      const tasks = createMultipleTasks(500, (i) => ({
        title: `Task ${String(i + 1).padStart(3, '0')}`,
        completed: i % 3 === 0,
        dueDate: i % 4 === 0 ? `2026-${String((i % 12) + 1).padStart(2, '0')}-01` : null
      }));

      dbUtils.insertTasks(db, tasks);
    });

    test('title sorting should complete within 200ms', async () => {
      const startTime = performance.now();
      const response = await request(app).get('/api/tasks?sort=title');
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThan(200); // FR-046: sorting within 200ms

      // Verify sorting correctness
      for (let i = 1; i < response.body.length; i++) {
        expect(response.body[i].title >= response.body[i - 1].title).toBe(true);
      }
    });

    test('date sorting should complete within 200ms', async () => {
      const startTime = performance.now();
      const response = await request(app).get('/api/tasks'); // Default sort by date
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThan(200); // FR-046: sorting within 200ms
    });

    test('status filtering should complete within 200ms', async () => {
      const startTime = performance.now();
      const response = await request(app).get('/api/tasks?status=completed');
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThan(200); // FR-046: filtering within 200ms

      // Verify all returned tasks are completed
      response.body.forEach(task => {
        expect(task.completed).toBe(true);
      });
    });

    test('combined filtering and sorting should complete within 200ms', async () => {
      const startTime = performance.now();
      const response = await request(app).get('/api/tasks?status=active&sort=title');
      const responseTime = performance.now() - startTime;

      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThan(200); // FR-046: combined operations within 200ms

      // Verify filtering and sorting
      response.body.forEach(task => {
        expect(task.completed).toBe(false);
      });

      for (let i = 1; i < response.body.length; i++) {
        expect(response.body[i].title >= response.body[i - 1].title).toBe(true);
      }
    });
  });

  describe('Concurrent Request Handling', () => {
    test('should handle multiple concurrent requests efficiently', async () => {
      // Create some initial data
      const tasks = createMultipleTasks(100);
      dbUtils.insertTasks(db, tasks);

      // Make 10 concurrent requests
      const concurrentRequests = Array.from({ length: 10 }, () => 
        request(app).get('/api/tasks')
      );

      const startTime = performance.now();
      const responses = await Promise.all(concurrentRequests);
      const totalTime = performance.now() - startTime;

      // All requests should succeed
      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(100);
      });

      // Average response time should still be reasonable
      const averageTime = totalTime / 10;
      expect(averageTime).toBeLessThan(1000); // Allow more time for concurrent processing
    });

    test('should handle mixed concurrent operations', async () => {
      // Create initial tasks
      const initialTasks = createMultipleTasks(50);
      dbUtils.insertTasks(db, initialTasks);

      // Mix of different operations
      const operations = [
        () => request(app).get('/api/tasks'),
        () => request(app).get('/api/tasks?status=active'),
        () => request(app).post('/api/tasks').send({ title: 'Concurrent Task' }),
        () => request(app).get('/api/tasks?sort=title'),
        () => request(app).get('/api/tasks?status=completed')
      ];

      const concurrentOperations = Array.from({ length: 10 }, (_, i) => 
        operations[i % operations.length]()
      );

      const startTime = performance.now();
      const responses = await Promise.all(concurrentOperations);
      const totalTime = performance.now() - startTime;

      // All requests should succeed (allowing for some 201s from POST)
      responses.forEach(response => {
        expect([200, 201]).toContain(response.status);
      });

      // Should complete within reasonable time
      expect(totalTime).toBeLessThan(2000);
    });
  });

  describe('Memory Usage and Resource Management', () => {
    test('should not have memory leaks with many operations', async () => {
      const initialMemory = process.memoryUsage().heapUsed;

      // Perform many operations
      for (let i = 0; i < 100; i++) {
        await request(app)
          .post('/api/tasks')
          .send({ title: `Memory Test Task ${i}` });
        
        if (i % 10 === 0) {
          await request(app).get('/api/tasks');
        }
      }

      // Force garbage collection if available
      if (global.gc) {
        global.gc();
      }

      const finalMemory = process.memoryUsage().heapUsed;
      const memoryIncrease = finalMemory - initialMemory;

      // Memory increase should be reasonable (less than 10MB for 100 operations)
      expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024);
    });

    test('should clean up database resources properly', async () => {
      const initialTaskCount = dbUtils.getTaskCount(db);

      // Create and delete many tasks
      for (let i = 0; i < 50; i++) {
        const createResponse = await request(app)
          .post('/api/tasks')
          .send({ title: `Cleanup Test Task ${i}` });
        
        await request(app)
          .delete(`/api/tasks/${createResponse.body.id}`);
      }

      const finalTaskCount = dbUtils.getTaskCount(db);

      // Should be back to initial count (or close to it)
      expect(finalTaskCount).toBe(initialTaskCount);
    });
  });
});