const request = require('supertest');
const { app, db } = require('../src/app');

// Close the database connection after all tests
afterAll(() => {
  if (db) {
    db.close();
  }
});

// Test data factories
const createValidTask = (overrides = {}) => ({
  title: 'Test Task',
  description: 'Test task description',
  completed: false,
  dueDate: '2026-03-01',
  ...overrides
});

const createTaskHelper = async (taskData = {}) => {
  const task = createValidTask(taskData);
  const response = await request(app)
    .post('/api/tasks')
    .send(task)
    .set('Accept', 'application/json');
  
  return response;
};

describe('Task Management API', () => {
  describe('GET /api/tasks', () => {
    beforeEach(async () => {
      // Clean up tasks before each test
      try {
        db.prepare('DELETE FROM tasks').run();
      } catch (error) {
        // Table might not exist yet, ignore
      }
    });

    test('should return empty array when no tasks exist', async () => {
      const response = await request(app).get('/api/tasks');
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(0);
    });

    test('should return all tasks with correct structure', async () => {
      // Create test tasks
      await createTaskHelper({ title: 'Task 1' });
      await createTaskHelper({ title: 'Task 2', completed: true });
      
      const response = await request(app).get('/api/tasks');
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(2);
      
      // Verify task structure
      const task = response.body[0];
      expect(task).toHaveProperty('id');
      expect(task).toHaveProperty('title');
      expect(task).toHaveProperty('description');
      expect(task).toHaveProperty('completed');
      expect(task).toHaveProperty('dueDate');
      expect(task).toHaveProperty('sortOrder');
      expect(task).toHaveProperty('createdAt');
      expect(task).toHaveProperty('updatedAt');
    });

    test('should filter tasks by status', async () => {
      await createTaskHelper({ title: 'Active Task', completed: false });
      await createTaskHelper({ title: 'Completed Task', completed: true });
      
      // Test active filter
      const activeResponse = await request(app).get('/api/tasks?status=active');
      expect(activeResponse.status).toBe(200);
      expect(activeResponse.body).toHaveLength(1);
      expect(activeResponse.body[0].completed).toBe(false);
      
      // Test completed filter
      const completedResponse = await request(app).get('/api/tasks?status=completed');
      expect(completedResponse.status).toBe(200);
      expect(completedResponse.body).toHaveLength(1);
      expect(completedResponse.body[0].completed).toBe(true);
    });

    test('should sort tasks by due date by default', async () => {
      await createTaskHelper({ title: 'Later Task', dueDate: '2026-03-15' });
      await createTaskHelper({ title: 'Earlier Task', dueDate: '2026-03-01' });
      await createTaskHelper({ title: 'No Due Date', dueDate: null });
      
      const response = await request(app).get('/api/tasks');
      expect(response.status).toBe(200);
      
      // Tasks with due dates should come first, sorted by date
      expect(response.body[0].title).toBe('Earlier Task');
      expect(response.body[1].title).toBe('Later Task');
      expect(response.body[2].title).toBe('No Due Date');
    });

    test('should sort tasks by different criteria', async () => {
      await createTaskHelper({ title: 'Z Task', createdAt: '2026-02-19T10:00:00Z' });
      await createTaskHelper({ title: 'A Task', createdAt: '2026-02-19T11:00:00Z' });
      
      const response = await request(app).get('/api/tasks?sort=title');
      expect(response.status).toBe(200);
      expect(response.body[0].title).toBe('A Task');
      expect(response.body[1].title).toBe('Z Task');
    });
  });

  describe('POST /api/tasks', () => {
    test('should create a task with valid data', async () => {
      const taskData = createValidTask();
      const response = await createTaskHelper(taskData);
      
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.title).toBe(taskData.title);
      expect(response.body.description).toBe(taskData.description);
      expect(response.body.completed).toBe(false);
      expect(response.body.dueDate).toBe(taskData.dueDate);
    });

    test('should create task with minimal required data', async () => {
      // Send only title, without using helper that adds default description
      const response = await request(app)
        .post('/api/tasks')
        .send({ title: 'Minimal Task' })
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(201);
      expect(response.body.title).toBe('Minimal Task');
      expect(response.body.description).toBe('');
      expect(response.body.completed).toBeFalsy();
      expect(response.body.dueDate).toBeNull();
    });

    test('should validate required title field', async () => {
      const response = await request(app)
        .post('/api/tasks')
        .send({ description: 'No title' })
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(400);
      expect(response.body.error).toContain('title');
    });

    test('should validate title length limit (255 chars)', async () => {
      const longTitle = 'a'.repeat(256);
      const response = await request(app)
        .post('/api/tasks')
        .send({ title: longTitle })
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(400);
      expect(response.body.error).toContain('255');
    });

    test('should validate description length limit (1000 chars)', async () => {
      const longDescription = 'a'.repeat(1001);
      const response = await request(app)
        .post('/api/tasks')
        .send({ 
          title: 'Valid Title', 
          description: longDescription 
        })
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(400);
      expect(response.body.error).toContain('1000');
    });

    test('should validate due date format', async () => {
      const response = await request(app)
        .post('/api/tasks')
        .send({ 
          title: 'Valid Title', 
          dueDate: 'invalid-date' 
        })
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(400);
      expect(response.body.error).toMatch(/format/i);
    });

    test('should allow past due dates', async () => {
      const pastDate = '2026-01-01';
      const response = await createTaskHelper({ 
        title: 'Overdue Task', 
        dueDate: pastDate 
      });
      
      expect(response.status).toBe(201);
      expect(response.body.dueDate).toBe(pastDate);
    });
  });

  describe('PUT /api/tasks/:id', () => {
    test('should update existing task completely', async () => {
      const createResponse = await createTaskHelper();
      const taskId = createResponse.body.id;
      
      const updatedData = {
        title: 'Updated Title',
        description: 'Updated description',
        completed: true,
        dueDate: '2026-04-01'
      };
      
      const response = await request(app)
        .put(`/api/tasks/${taskId}`)
        .send(updatedData)
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(200);
      expect(response.body.title).toBe(updatedData.title);
      expect(response.body.description).toBe(updatedData.description);
      expect(response.body.completed).toBeTruthy(); // SQLite returns 1 for true
      expect(response.body.dueDate).toBe(updatedData.dueDate);
      expect(response.body.updatedAt).not.toBe(createResponse.body.updatedAt);
    });

    test('should return 404 for non-existent task', async () => {
      const response = await request(app)
        .put('/api/tasks/999')
        .send({ title: 'Updated Title' })
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(404);
      expect(response.body.error).toContain('not found');
    });
  });

  describe('PATCH /api/tasks/:id/status', () => {
    test('should toggle task completion status', async () => {
      const createResponse = await createTaskHelper({ completed: false });
      const taskId = createResponse.body.id;
      
      const response = await request(app)
        .patch(`/api/tasks/${taskId}/status`)
        .send({ completed: true })
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(200);
      expect(response.body.completed).toBe(true);
    });

    test('should only update completion status', async () => {
      const createResponse = await createTaskHelper();
      const taskId = createResponse.body.id;
      const originalTitle = createResponse.body.title;
      
      const response = await request(app)
        .patch(`/api/tasks/${taskId}/status`)
        .send({ 
          completed: true,
          title: 'This should be ignored' 
        })
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(200);
      expect(response.body.completed).toBe(true);
      expect(response.body.title).toBe(originalTitle); // Title should not change
    });
  });

  describe('DELETE /api/tasks/:id', () => {
    test('should delete existing task', async () => {
      const createResponse = await createTaskHelper();
      const taskId = createResponse.body.id;
      
      const response = await request(app)
        .delete(`/api/tasks/${taskId}`)
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(200);
      expect(response.body.message).toContain('deleted');
      
      // Verify task is actually deleted
      const getResponse = await request(app).get(`/api/tasks/${taskId}`);
      expect(getResponse.status).toBe(404);
    });

    test('should return 404 for non-existent task', async () => {
      const response = await request(app)
        .delete('/api/tasks/999')
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(404);
      expect(response.body.error).toContain('not found');
    });

    test('should validate task ID format', async () => {
      const response = await request(app)
        .delete('/api/tasks/invalid-id')
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(400);
      expect(response.body.error).toContain('Valid task ID');
    });
  });

  describe('Task Ordering', () => {
    test('should handle manual task reordering', async () => {
      const task1 = await createTaskHelper({ title: 'Task 1', sortOrder: 0 });
      const task2 = await createTaskHelper({ title: 'Task 2', sortOrder: 1 });
      
      // Reorder task2 to come before task1
      const response = await request(app)
        .put(`/api/tasks/${task2.body.id}`)
        .send({ 
          title: task2.body.title,
          sortOrder: -1 
        })
        .set('Accept', 'application/json');
      
      expect(response.status).toBe(200);
      expect(response.body.sortOrder).toBe(-1);
    });
  });

  describe('Performance Requirements', () => {
    test('should handle large number of tasks efficiently', async () => {
      // Clean up existing tasks before this test
      db.prepare('DELETE FROM tasks').run();
      
      const startTime = Date.now();
      
      // Create 100 tasks
      const taskPromises = Array.from({ length: 100 }, (_, i) => 
        createTaskHelper({ title: `Task ${i}` })
      );
      await Promise.all(taskPromises);
      
      // Fetch all tasks
      const fetchStart = Date.now();
      const response = await request(app).get('/api/tasks');
      const fetchTime = Date.now() - fetchStart;
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(100);
      expect(fetchTime).toBeLessThan(500); // Should be under 500ms per FR-044
    });
  });
});