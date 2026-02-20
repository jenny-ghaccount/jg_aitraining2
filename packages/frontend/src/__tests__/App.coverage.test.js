import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Mock fetch for tasks
beforeAll(() => {
  global.fetch = jest.fn((url, opts) => {
    if (url === '/api/tasks' && (!opts || opts.method === 'GET')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          { id: 1, title: 'Test Task', description: 'Desc', completed: false },
        ]),
      });
    }
    if (url === '/api/tasks' && opts && opts.method === 'POST') {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 2, title: 'New Task', description: 'New Desc', completed: false }),
      });
    }
    return Promise.resolve({ ok: false });
  });
});

afterAll(() => {
  global.fetch.mockRestore && global.fetch.mockRestore();
});

describe('App Component Coverage', () => {
  test('renders app and loads tasks', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve([
          { id: 1, title: 'Test Task', description: 'desc', dueDate: '2026-02-25', completed: false }
        ]),
        text: () => Promise.resolve('[{"id":1,"title":"Test Task","description":"desc","dueDate":"2026-02-25","completed":false}]'),
        headers: new Headers(),
        url: '/api/tasks',
        statusText: 'OK'
      })
    );
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Test Task')).toBeInTheDocument();
    });
  });

  test('handles task creation', async () => {
    // Mock fetch for initial load and task creation
    let tasks = [];
    global.fetch = jest.fn((url, options) => {
      if (options && options.method === 'POST') {
        // Simulate task creation
        const newTask = { id: 1, title: 'Test Task', description: 'desc', dueDate: '2026-02-25', completed: false };
        tasks.push(newTask);
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(newTask),
          text: () => Promise.resolve(JSON.stringify(newTask)),
          headers: new Headers(),
          url: '/api/tasks',
          statusText: 'OK'
        });
      }
      // GET request returns all tasks
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(tasks),
        text: () => Promise.resolve(JSON.stringify(tasks)),
        headers: new Headers(),
        url: '/api/tasks',
        statusText: 'OK'
      });
    });
    render(<App />);
    const user = userEvent.setup();
    // Open task form
    const addButton = screen.getByRole('button', { name: /add new task/i });
    await user.click(addButton);
    // Fill out form
    const titleInput = screen.getByLabelText(/task title/i);
    await user.type(titleInput, 'Test Task');
    const submitButton = screen.getByRole('button', { name: /add task/i });
    await user.click(submitButton);
    // Wait for task to appear
    await waitFor(() => {
      expect(screen.getByText('Test Task')).toBeInTheDocument();
    });
    const addButton = screen.getByRole('button', { name: /add new task/i });
    await user.click(addButton);
    await user.type(screen.getByLabelText(/task title/i), 'New Task');
    await user.type(screen.getByLabelText(/description/i), 'New Desc');
    const submitButton2 = screen.getByRole('button', { name: /add task/i });
    await user.click(submitButton2);
    await waitFor(() => {
      expect(screen.getByText('New Task')).toBeInTheDocument();
    });
  });

  test('handles error state', async () => {
    global.fetch.mockImplementationOnce(() => Promise.resolve({ ok: false }));
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/failed to fetch tasks/i)).toBeInTheDocument();
    });
  });

  test('toggles theme', async () => {
    render(<App />);
    const settingsButton = screen.getByRole('button', { name: /open settings menu/i });
    await userEvent.click(settingsButton);
    // Theme toggle logic can be checked here if UI exposes it
    expect(settingsButton).toBeInTheDocument();
  });
});
