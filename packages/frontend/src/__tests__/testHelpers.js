import { render } from '@testing-library/react';

// Simple test utilities
export const renderComponent = (component) => {
  return render(component);
};

export const mockFetchSuccess = (data = []) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    })
  );
};

export const mockFetchError = (error = 'Network Error') => {
  global.fetch = jest.fn(() =>
    Promise.reject(new Error(error))
  );
};

export const createTestTask = (overrides = {}) => ({
  id: 1,
  title: 'Test Task',
  description: 'Test Description',
  completed: false,
  createdAt: new Date().toISOString(),
  ...overrides
});

export const resetAllMocks = () => {
  jest.clearAllMocks();
  if (global.fetch && global.fetch.mockClear) {
    global.fetch.mockClear();
  }
};

export const waitForAsync = (ms = 0) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};