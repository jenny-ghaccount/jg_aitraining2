import { render } from '@testing-library/react';

// Test utilities and helpers
export const renderWithRouter = (component) => {
  return render(component);
};

export const mockFetch = (data = []) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    })
  );
};

export const resetMocks = () => {
  if (global.fetch && global.fetch.mockClear) {
    global.fetch.mockClear();
  }
};

export const createMockTask = (overrides = {}) => ({
  id: 1,
  title: 'Test Task',
  description: 'Test Description',
  completed: false,
  createdAt: new Date().toISOString(),
  ...overrides
});