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

  test('should show correct initial state', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    expect(screen.getByText('No tasks found')).toBeInTheDocument();
    expect(screen.getByText(/click the \+ button to add your first task/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add new task/i })).toBeInTheDocument();
  });

  test('should open task form when FAB is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    const fabButton = screen.getByRole('button', { name: /add new task/i });
    await user.click(fabButton);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  test('should switch between filters', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    const activeButton = screen.getByRole('button', { name: /active/i });
    const completedButton = screen.getByRole('button', { name: /completed/i });
    
    await user.click(activeButton);
    expect(activeButton).toHaveAttribute('aria-pressed', 'true');
    
    await user.click(completedButton);
    expect(completedButton).toHaveAttribute('aria-pressed', 'true');
  });

  test('should display settings menu', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    const settingsButton = screen.getByRole('button', { name: /open settings menu/i });
    await user.click(settingsButton);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /settings/i })).toBeInTheDocument();
    });
  });
});