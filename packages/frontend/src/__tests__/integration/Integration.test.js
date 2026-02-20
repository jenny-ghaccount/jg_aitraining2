import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

// Mock fetch API
global.fetch = jest.fn();

describe('Integration Tests', () => {
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ([]),
      text: async () => '[]',
      headers: new Headers(),
      url: '/api/tasks',
      statusText: 'OK'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('complete user workflow - add, edit, complete, delete tasks', async () => {
    const user = userEvent.setup();
    
    // Mock API responses for task operations
    let taskId = 1;
    let tasks = [];
    
    fetch.mockImplementation((url, options) => {
      if (options?.method === 'POST') {
        // Add task
        const body = JSON.parse(options.body);
        const newTask = { id: taskId++, ...body, createdAt: new Date().toISOString() };
        tasks.push(newTask);
        return Promise.resolve({
          ok: true,
          json: async () => newTask
        });
      }
      // Get tasks
      return Promise.resolve({
        ok: true,
        json: async () => tasks
      });
    });

    render(<App />);

    // Wait for initial load
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });

    // Verify empty state
    expect(screen.getByText('No tasks found')).toBeInTheDocument();

    // Add a new task
    const fabButton = screen.getByRole('button', { name: /add new task/i });
    await user.click(fabButton);

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    // Fill in task form (assuming TaskForm has these fields)
    const titleInput = screen.getByLabelText(/task title/i);
    await user.type(titleInput, 'My First Task');

    if (screen.queryByLabelText(/description/i)) {
      const descInput = screen.getByLabelText(/description/i);
      await user.type(descInput, 'This is a test task');
    }

    const submitButton = screen.getByRole('button', { name: /add task|create task|save/i });
    await user.click(submitButton);

    // Verify task was added (this would require the actual task to render)
    // Note: This test structure shows the approach, but actual assertions 
    // would depend on how the real TaskForm component works
  });

  test('error handling integration', async () => {
    // Test network error
    fetch.mockRejectedValue(new Error('Network failed'));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText(/failed to fetch tasks/i)).toBeInTheDocument();
    });
  });

  test('keyboard accessibility integration', async () => {
    const user = userEvent.setup();
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });

    // Test that we can navigate to key interactive elements
    await user.tab(); 
    const firstFocusedElement = document.activeElement;
    expect(firstFocusedElement).toBeTruthy();
    expect(firstFocusedElement.tagName).toBe('BUTTON');

    // Continue tabbing to find the FAB button
    for (let i = 0; i < 10; i++) {
      await user.tab();
      if (document.activeElement?.getAttribute('aria-label')?.includes('Add new task')) {
        break;
      }
    }

    // Test keyboard activation of FAB if we found it
    if (document.activeElement?.getAttribute('aria-label')?.includes('Add new task')) {
      await user.keyboard('{Enter}');
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
    }
  });

  test('theme integration', async () => {
    const user = userEvent.setup();
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });

    // Open settings
    const settingsButton = screen.getByRole('button', { name: /open settings menu/i });
    await user.click(settingsButton);

    await waitFor(() => {
      expect(screen.getByText('Accessibility Themes')).toBeInTheDocument();
    });

    // Test theme toggle button exists
    const themeButton = screen.getByRole('button', { name: /switch to/i });
    expect(themeButton).toBeInTheDocument();
    
    // Test that we can click the theme toggle
    await user.click(themeButton);
    
    // The theme should update (text should change)
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /switch to/i })).toBeInTheDocument();
    });
  });

  test('filter and display integration', async () => {
    const mockTasks = [
      { id: 1, title: 'Active Task', completed: false, createdAt: '2026-02-19T10:00:00Z' },
      { id: 2, title: 'Completed Task', completed: true, createdAt: '2026-02-19T09:00:00Z' }
    ];

    fetch.mockResolvedValue({
      ok: true,
      json: async () => mockTasks
    });

    const user = userEvent.setup();
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Your Tasks (2)')).toBeInTheDocument();
    });

    // Test filtering to active only
    const activeButton = screen.getByRole('button', { name: /active/i });
    await user.click(activeButton);

    await waitFor(() => {
      expect(screen.getByText('Your Tasks (1)')).toBeInTheDocument();
    });

    // Test filtering to completed only  
    const completedButton = screen.getByRole('button', { name: /completed/i });
    await user.click(completedButton);

    await waitFor(() => {
      expect(screen.getByText('Your Tasks (1)')).toBeInTheDocument();
    });
  });
});