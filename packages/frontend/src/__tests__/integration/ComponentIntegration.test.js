import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

// Mock fetch for API calls
global.fetch = jest.fn();

describe('Component Integration Tests', () => {
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ([])
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render App component without crashing', async () => {
    render(<App />);
    
    expect(screen.getByText('Todo App')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
  });

  test('should pass basic accessibility audit', async () => {
    const { container } = render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('TODO App')).toBeInTheDocument();
    });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('should handle form interactions', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Find the task input and button
    const taskInput = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add task/i });
    
    // Type a task and submit
    await user.type(taskInput, 'Test task');
    expect(taskInput).toHaveValue('Test task');
    
    await user.click(addButton);
    
    // Input should be cleared after submission
    expect(taskInput).toHaveValue('');
  });

  test('should support keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Tab through focusable elements
    await user.tab();
    const firstElement = document.activeElement;
    
    await user.tab();
    const secondElement = document.activeElement;
    
    // Should move focus to different elements
    expect(firstElement).not.toBe(secondElement);
  });

  test('should handle Enter key form submission', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const taskInput = screen.getByRole('textbox');
    
    // Type task and press Enter
    await user.type(taskInput, 'Task via Enter{enter}');
    
    // Input should be cleared
    expect(taskInput).toHaveValue('');
  });
});