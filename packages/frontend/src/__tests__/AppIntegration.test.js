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

describe.skip('App Integration Tests', () => {
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

  test('renders without crashing', async () => {
    render(<App />);
    
    expect(screen.getByText('Todo App')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
  });

  test('shows empty state when no tasks', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('No tasks found')).toBeInTheDocument();
    });
  });

  test('has working filter buttons', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    const allButton = screen.getByRole('button', { name: /all/i });
    const activeButton = screen.getByRole('button', { name: /active/i });
    
    expect(allButton).toHaveAttribute('aria-pressed', 'true');
    
    await user.click(activeButton);
    expect(activeButton).toHaveAttribute('aria-pressed', 'true');
  });

  test('opens add task dialog', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading tasks...')).not.toBeInTheDocument();
    });
    
    const addButton = screen.getByRole('button', { name: /add new task/i });
    await user.click(addButton);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });
});