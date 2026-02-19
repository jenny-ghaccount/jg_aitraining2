import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Simple App Tests', () => {
  test('renders the app without crashing', () => {
    render(<App />);
    expect(screen.getByText('Todo App')).toBeInTheDocument();
  });

  test('shows add task button', () => {
    render(<App />);
    const addButton = screen.getByRole('button', { name: /add new task/i });
    expect(addButton).toBeInTheDocument();
  });

  test('can open task form modal', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const addButton = screen.getByRole('button', { name: /add new task/i });
    await user.click(addButton);
    
    // TaskForm modal should open (check for form elements)
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('shows empty state message', () => {
    render(<App />);
    expect(screen.getByText('No tasks found')).toBeInTheDocument();
    expect(screen.getByText(/click the \+ button to add your first task/i)).toBeInTheDocument();
  });

  test('has task filter buttons', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /active/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /completed/i })).toBeInTheDocument();
  });
});