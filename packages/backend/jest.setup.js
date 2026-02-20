// Jest setup for backend tests
const { execSync } = require('child_process');

// Global test setup
beforeAll(() => {
  // Set test environment variables
  process.env.NODE_ENV = 'test';
  
  // Suppress console output during tests (except for errors)
  global.originalConsoleLog = console.log;
  global.originalConsoleInfo = console.info;
  
  console.log = jest.fn();
  console.info = jest.fn();
});

// Global test teardown
afterAll(() => {
  // Restore console methods
  if (global.originalConsoleLog) {
    console.log = global.originalConsoleLog;
  }
  if (global.originalConsoleInfo) {
    console.info = global.originalConsoleInfo;
  }
});

// Increase timeout for slower tests
jest.setTimeout(30000);

// Global test helpers
global.testHelpers = {
  // Helper to create a test task
  createTestTask: (overrides = {}) => ({
    title: 'Test Task',
    description: 'Test task description',
    completed: false,
    dueDate: '2026-03-01',
    sortOrder: 0,
    ...overrides
  }),
  
  // Helper to create multiple test tasks
  createMultipleTestTasks: (count = 3, baseData = {}) => {
    return Array.from({ length: count }, (_, i) => ({
      title: `Test Task ${i + 1}`,
      description: `Description for task ${i + 1}`,
      completed: i % 2 === 0, // Alternate completed status
      dueDate: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      sortOrder: i,
      ...baseData
    }));
  },
  
  // Helper to wait for async operations
  waitFor: (ms = 100) => new Promise(resolve => setTimeout(resolve, ms)),
  
  // Helper to generate random strings
  randomString: (length = 8) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};

// Use real better-sqlite3 for integration tests (no mock)