import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../../App';

// Mock server with proper API responses
const server = setupServer(
  rest.get('/api/tasks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([])); // App expects array directly
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Component Integration Tests (Simple)', () => {
  test('should render App component without crashing', async () => {
    render(<App />);
    
    // Wait for the app to load
    await waitFor(() => {
      expect(screen.getByText('Todo App')).toBeInTheDocument();
    });
  });
  
  test('should handle basic interactions', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Todo App')).toBeInTheDocument();
    });
    
    // Check for fundamental app structure
    expect(screen.getByText('Todo App')).toBeInTheDocument();
    
    // Look for add button (FAB)
    const addButton = screen.queryByLabelText(/add/i);
    if (addButton) {
      await user.click(addButton);
      // Should not crash
      expect(screen.getByText('Todo App')).toBeInTheDocument();
    }
  });
});