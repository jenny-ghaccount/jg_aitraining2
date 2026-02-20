// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock matchMedia for Material-UI components and theme detection
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated  
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  }),
});

// Mock localStorage for theme persistence
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(() => null),
    setItem: jest.fn(() => null),
    removeItem: jest.fn(() => null),
    clear: jest.fn(() => null),
  },
  writable: true,
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Global test utilities
global.testUtils = {
  // Helper to create test task data
  createMockTask: (overrides = {}) => ({
    id: Math.floor(Math.random() * 1000),
    title: 'Test Task',
    description: 'Test description',
    completed: false,
    dueDate: '2026-03-01',
    sortOrder: 0,
    createdAt: '2026-02-19T10:00:00Z',
    updatedAt: '2026-02-19T10:00:00Z',
    ...overrides
  }),

  // Helper to create multiple mock tasks
  createMockTasks: (count = 3) => {
    return Array.from({ length: count }, (_, i) => 
      global.testUtils.createMockTask({
        id: i + 1,
        title: `Task ${i + 1}`,
        completed: i % 2 === 0,
        dueDate: i % 3 === 0 ? null : `2026-0${Math.min(3, i + 2)}-01`
      })
    );
  },

  // Helper to simulate user interactions
  userInteractions: {
    type: async (user, element, text) => {
      await user.clear(element);
      await user.type(element, text);
    },
    
    clickAndWait: async (user, element, ms = 100) => {
      await user.click(element);
      await new Promise(resolve => setTimeout(resolve, ms));
    }
  },

  // Mock API responses
  mockApiResponses: {
    getTasks: (tasks = []) => ({
      ok: true,
      status: 200,
      json: async () => tasks
    }),
    
    createTask: (task) => ({
      ok: true,
      status: 201,
      json: async () => ({ ...task, id: Date.now() })
    }),
    
    updateTask: (task) => ({
      ok: true,
      status: 200,
      json: async () => task
    }),
    
    deleteTask: () => ({
      ok: true,
      status: 200,
      json: async () => ({ message: 'Task deleted successfully' })
    }),
    
    error: (status = 500, message = 'Server error') => ({
      ok: false,
      status,
      json: async () => ({ error: message })
    })
  }
};

// Suppress console warnings in tests (except errors)
const originalWarn = console.warn;
beforeEach(() => {
  console.warn = jest.fn();
});

afterEach(() => {
  console.warn = originalWarn;
  jest.clearAllMocks();
});

// Global test timeout
jest.setTimeout(30000);