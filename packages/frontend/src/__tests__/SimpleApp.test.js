import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve([]),
    text: () => Promise.resolve('[]'),
    headers: new Headers(),
    url: '/api/tasks',
    statusText: 'OK'
  })
);

describe('Simple App Tests', () => {
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
  test('renders the app without crashing', async () => {
    render(<App />);
    
    // Wait for loading to complete first
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    expect(screen.getByText('Todo App')).toBeInTheDocument();
  });

  test('shows add task button', async () => {
    render(<App />);
    
    // Wait for loading to complete first
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    const addButton = screen.getByRole('button', { name: /add new task/i });
    expect(addButton).toBeInTheDocument();
  });

  test('can open task form modal', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Wait for app to load first
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    const addButton = screen.getByRole('button', { name: /add new task/i });
    await user.click(addButton);
    
    // TaskForm modal should open (check for form elements)
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('shows empty state message', async () => {
    render(<App />);
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    expect(screen.getByText('No tasks found')).toBeInTheDocument();
    expect(screen.getByText(/click the \+ button to add your first task/i)).toBeInTheDocument();
  });

  test('has task filter buttons', async () => {
    render(<App />);
    
    // Wait for app to load first
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /active/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /completed/i })).toBeInTheDocument();
  });
});