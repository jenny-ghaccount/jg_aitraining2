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

// Test to prevent Jest "no tests" error
describe('test-utils utilities', () => {
  test('createMockTask should create a task object', () => {
    const task = createMockTask();
    expect(task).toHaveProperty('id');
    expect(task).toHaveProperty('title', 'Test Task');
    expect(task).toHaveProperty('completed', false);
  });

  test('createMockTask should accept overrides', () => {
    const task = createMockTask({ completed: true, title: 'Custom Task' });
    expect(task.completed).toBe(true);
    expect(task.title).toBe('Custom Task');
  });
});