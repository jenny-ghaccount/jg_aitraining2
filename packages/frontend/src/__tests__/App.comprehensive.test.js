import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Mock fetch for API calls
global.fetch = jest.fn();

describe('App Component Comprehensive Tests', () => {
  beforeEach(() => {
    fetch.mockClear();
    // Mock successful empty response
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ([])
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders main app structure', async () => {
    render(<App />);
    
    // Check main elements
    expect(screen.getByText('Todo App')).toBeInTheDocument();
    expect(screen.getByText('Stay organized and get things done')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add new task/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open settings menu/i })).toBeInTheDocument();
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
  });

  test('shows loading state initially', () => {
    render(<App />);
    expect(screen.getByText('Loading tasks...')).toBeInTheDocument();
  });

  test('handles API error gracefully', async () => {
    fetch.mockRejectedValue(new Error('Network error'));
    
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText(/failed to fetch tasks/i)).toBeInTheDocument();
    });
  });

  test('opens and closes settings menu', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const settingsButton = screen.getByRole('button', { name: /open settings menu/i });
    
    // Open settings
    await user.click(settingsButton);
    expect(screen.getByRole('dialog', { name: /settings/i })).toBeInTheDocument();
    expect(screen.getByText('Accessibility Themes')).toBeInTheDocument();
    
    // Close settings by clicking button again
    await user.click(settingsButton);
    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: /settings/i })).not.toBeInTheDocument();
    });
  });

  test('opens task form when FAB clicked', async () => {
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

  test('filters work correctly', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    // Test filter buttons
    const allButton = screen.getByRole('button', { name: /all/i });
    const activeButton = screen.getByRole('button', { name: /active/i });
    const completedButton = screen.getByRole('button', { name: /completed/i });
    
    // Initially 'all' should be active
    expect(allButton).toHaveAttribute('aria-pressed', 'true');
    
    // Switch to active
    await user.click(activeButton);
    expect(activeButton).toHaveAttribute('aria-pressed', 'true');
    expect(allButton).toHaveAttribute('aria-pressed', 'false');
    
    // Switch to completed
    await user.click(completedButton);
    expect(completedButton).toHaveAttribute('aria-pressed', 'true');
    expect(activeButton).toHaveAttribute('aria-pressed', 'false');
  });

  test('displays empty state correctly', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('No tasks found')).toBeInTheDocument();
      expect(screen.getByText(/click the \+ button to add your first task/i)).toBeInTheDocument();
    });
  });

  test('displays tasks when they exist', async () => {
    const mockTasks = [
      {
        id: 1,
        title: 'Test Task 1',
        description: 'Description 1',
        completed: false,
        dueDate: '2026-02-25',
        createdAt: '2026-02-19T10:00:00Z'
      },
      {
        id: 2,
        title: 'Test Task 2',
        description: 'Description 2',
        completed: true,
        dueDate: null,
        createdAt: '2026-02-18T10:00:00Z'
      }
    ];
    
    fetch.mockResolvedValue({
      ok: true,
      json: async () => mockTasks
    });
    
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Task 1')).toBeInTheDocument();
      expect(screen.getByText('Test Task 2')).toBeInTheDocument();
      expect(screen.getByText('Your Tasks (2)')).toBeInTheDocument();
    });
    
    // Check task actions are present
    expect(screen.getAllByText(/complete/i)).toHaveLength(1); // Only incomplete task
    expect(screen.getAllByText(/edit/i)).toHaveLength(2);
    expect(screen.getAllByText(/delete/i)).toHaveLength(2);
  });

  test('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Tab through elements
    await user.tab();
    expect(document.activeElement).toHaveAttribute('aria-label', 'Open settings menu');
    
    await user.tab();
    expect(document.activeElement).toHaveTextContent('All');
    
    // Test keyboard interaction with settings
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /settings/i })).toBeInTheDocument();
    });
  });
});