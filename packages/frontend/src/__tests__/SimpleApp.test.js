import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Simple App Tests', () => {
  test('renders the app without crashing', () => {
    render(<App />);
    expect(screen.getByText('TODO App')).toBeInTheDocument();
  });

  test('can add a task', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /add task/i });
    
    await user.type(input, 'Test task');
    await user.click(button);
    
    // Task should be added to the list
    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  test('can delete a task', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // First add a task
    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add task/i });
    
    await user.type(input, 'Task to delete');
    await user.click(addButton);
    
    // Then delete it
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    await user.click(deleteButton);
    
    // Task should be removed
    expect(screen.queryByText('Task to delete')).not.toBeInTheDocument();
  });

  test('can toggle task completion', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Add a task
    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add task/i });
    
    await user.type(input, 'Task to complete');
    await user.click(addButton);
    
    // Toggle completion
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    // Should be checked
    expect(checkbox).toBeChecked();
  });
});