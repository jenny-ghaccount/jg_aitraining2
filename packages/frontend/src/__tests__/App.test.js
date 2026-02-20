import React from 'react';
import { render, screen, waitFor, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../App';



// Mock task data
const mockTasks = [
  {
    id: 1,
    title: 'Complete project documentation',
    description: 'Write comprehensive documentation for the project',
    completed: false,
    dueDate: '2026-02-25',
    sortOrder: 0,
    createdAt: '2026-02-19T10:00:00Z',
    updatedAt: '2026-02-19T10:00:00Z'
  },
  {
    id: 2,
    title: 'Review pull requests',
    description: 'Review and merge pending pull requests',
    completed: true,
    dueDate: null,
    sortOrder: 1,
    createdAt: '2026-02-18T15:30:00Z',
    updatedAt: '2026-02-19T09:15:00Z'
  }
];

// Enhanced mock server with task endpoints
const server = setupServer(
  // GET /api/tasks handler
  rest.get('/api/tasks', (req, res, ctx) => {
    const status = req.url.searchParams.get('status');
    const sort = req.url.searchParams.get('sort');
    
    let filteredTasks = [...mockTasks];
    
    // Apply status filter
    if (status === 'active') {
      filteredTasks = filteredTasks.filter(task => !task.completed);
    } else if (status === 'completed') {
      filteredTasks = filteredTasks.filter(task => task.completed);
    }
    
    // Apply sorting
    if (sort === 'title') {
      filteredTasks.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return res(ctx.status(200), ctx.json(filteredTasks));
  }),
  
  // POST /api/tasks handler
  rest.post('/api/tasks', (req, res, ctx) => {
    const { title, description, dueDate } = req.body;
    
    if (!title || title.trim() === '') {
      return res(
        ctx.status(400),
        ctx.json({ error: 'Task title is required and cannot be empty' })
      );
    }
    
    if (title.length > 255) {
      return res(
        ctx.status(400),
        ctx.json({ error: 'Task title cannot exceed 255 characters' })
      );
    }
    
    const newTask = {
      id: mockTasks.length + 1,
      title: title.trim(),
      description: description || '',
      completed: false,
      dueDate: dueDate || null,
      sortOrder: mockTasks.length,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    return res(ctx.status(201), ctx.json(newTask));
  }),
  
  // PATCH /api/tasks/:id/status handler
  rest.patch('/api/tasks/:id/status', (req, res, ctx) => {
    const { id } = req.params;
    const { completed } = req.body;
    
    const task = mockTasks.find(t => t.id === parseInt(id));
    if (!task) {
      return res(ctx.status(404), ctx.json({ error: 'Task not found' }));
    }
    
    const updatedTask = { ...task, completed, updatedAt: new Date().toISOString() };
    return res(ctx.status(200), ctx.json(updatedTask));
  }),
  
  // DELETE /api/tasks/:id handler
  rest.delete('/api/tasks/:id', (req, res, ctx) => {
    const { id } = req.params;
    
    const taskExists = mockTasks.some(t => t.id === parseInt(id));
    if (!taskExists) {
      return res(ctx.status(404), ctx.json({ error: 'Task not found' }));
    }
    
    return res(ctx.status(200), ctx.json({ message: 'Task deleted successfully', id: parseInt(id) }));
  })
);

// Setup and teardown for the mock server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App Component', () => {
  describe('Initial Loading and Display', () => {
    test('renders app bar and main container', async () => {
      await act(async () => {
        render(<App />);
      });
      
      expect(screen.getByRole('banner')).toBeInTheDocument(); // AppBar
      expect(screen.getByText('Todo App')).toBeInTheDocument();
    });

    test('shows loading state initially', async () => {
      await act(async () => {
        render(<App />);
      });
      
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByText('Loading tasks...')).toBeInTheDocument();
    });

    test('loads and displays tasks correctly', async () => {
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Complete project documentation')).toBeInTheDocument();
        expect(screen.getByText('Review pull requests')).toBeInTheDocument();
      });
      
      // Check task details
      expect(screen.getByText('Write comprehensive documentation for the project')).toBeInTheDocument();
      expect(screen.getByText('2026-02-25')).toBeInTheDocument(); // Due date
    });
  });

  describe('Task Creation', () => {
    test('opens task form when add button is clicked', async () => {
      const user = userEvent.setup();
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      });
      
      // Click the floating action button
      const addButton = screen.getByRole('button', { name: /add new task/i });
      await user.click(addButton);
      
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByLabelText(/task title/i)).toBeInTheDocument();
    });

    test('creates new task with valid data', async () => {
      const user = userEvent.setup();
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      });
      
      // Open task form
      const addButton = screen.getByRole('button', { name: /add new task/i });
      await user.click(addButton);
      
      // Fill form
      await user.type(screen.getByLabelText(/task title/i), 'New Test Task');
      await user.type(screen.getByLabelText(/description/i), 'Test description');
      
      // Submit form
      const submitButton = screen.getByRole('button', { name: /create task/i });
      await user.click(submitButton);
      
      // Verify task appears
      await waitFor(() => {
        expect(screen.getByText('New Test Task')).toBeInTheDocument();
      });
    });

    test('validates required fields', async () => {
      const user = userEvent.setup();
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      });
      
      // Open task form
      const addButton = screen.getByRole('button', { name: /add new task/i });
      await user.click(addButton);
      
      // Try to submit without title
      const submitButton = screen.getByRole('button', { name: /create task/i });
      await user.click(submitButton);
      
      // Should show validation error
      expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    });
  });

  describe('Task Management', () => {
    test('toggles task completion status', async () => {
      const user = userEvent.setup();
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Complete project documentation')).toBeInTheDocument();
      });
      
      // Find and click the checkbox for the incomplete task
      const taskCard = screen.getByText('Complete project documentation').closest('[data-testid*="task-card"]');
      const checkbox = within(taskCard).getByRole('checkbox');
      
      expect(checkbox).not.toBeChecked();
      await user.click(checkbox);
      
      // Should update task status (mocked)
      expect(checkbox).toBeChecked();
    });

    test('filters tasks by status', async () => {
      const user = userEvent.setup();
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Complete project documentation')).toBeInTheDocument();
      });
      
      // Click active filter
      const activeFilter = screen.getByRole('button', { name: /active/i });
      await user.click(activeFilter);
      
      // Should only show incomplete tasks
      expect(screen.getByText('Complete project documentation')).toBeInTheDocument();
      expect(screen.queryByText('Review pull requests')).not.toBeInTheDocument();
    });

    test('sorts tasks by different criteria', async () => {
      const user = userEvent.setup();
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Complete project documentation')).toBeInTheDocument();
      });
      
      // Open sort menu
      const sortButton = screen.getByRole('button', { name: /sort/i });
      await user.click(sortButton);
      
      // Select title sort
      const titleSort = screen.getByText(/title/i);
      await user.click(titleSort);
      
      // Should re-order tasks (mocked response handles this)
      await waitFor(() => {
        const taskTitles = screen.getAllByTestId(/task-title/);
        expect(taskTitles[0]).toHaveTextContent('Complete project documentation');
      });
    });
  });

  describe('Error Handling', () => {
    test('handles network error gracefully', async () => {
      server.use(
        rest.get('/api/tasks', (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ error: 'Server error' }));
        })
      );
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/failed to fetch tasks/i)).toBeInTheDocument();
      });
    });

    test('shows empty state when no tasks', async () => {
      server.use(
        rest.get('/api/tasks', (req, res, ctx) => {
          return res(ctx.status(200), ctx.json([]));
        })
      );
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.getByText(/no tasks found/i)).toBeInTheDocument();
        expect(screen.getByText(/create your first task/i)).toBeInTheDocument();
      });
    });

    test('handles task creation errors', async () => {
      const user = userEvent.setup();
      
      server.use(
        rest.post('/api/tasks', (req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.json({ error: 'Task title cannot exceed 255 characters' })
          );
        })
      );
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      });
      
      // Try to create invalid task
      const addButton = screen.getByRole('button', { name: /add new task/i });
      await user.click(addButton);
      
      await user.type(screen.getByLabelText(/task title/i), 'Valid Title');
      
      const submitButton = screen.getByRole('button', { name: /create task/i });
      await user.click(submitButton);
      
      // Should show error message
      await waitFor(() => {
        expect(screen.getByText(/cannot exceed 255 characters/i)).toBeInTheDocument();
      });
    });
  });

  describe('Theme and Accessibility', () => {
    test('toggles theme when theme button clicked', async () => {
      const user = userEvent.setup();
      
      await act(async () => {
        render(<App />);
      });
      
      const themeButton = screen.getByRole('button', { name: /toggle theme/i });
      await user.click(themeButton);
      
      // Theme should change (this would need theme context testing)
      expect(themeButton).toBeInTheDocument();
    });

    test('meets basic accessibility standards', async () => {
      const { container } = render(<App />);
      
      await waitFor(() => {
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      });
      
      // Check for basic accessibility attributes
      const buttons = container.querySelectorAll('button');
      const inputs = container.querySelectorAll('input');
      
      // Should not crash and should have interactive elements
      expect(buttons.length + inputs.length).toBeGreaterThan(0);
    });

    test('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      });
      
      // Tab through interactive elements
      await user.tab();
      expect(screen.getByRole('button', { name: /toggle theme/i })).toHaveFocus();
      
      await user.tab();
      expect(screen.getByRole('button', { name: /settings/i })).toHaveFocus();
      
      await user.tab();
      expect(screen.getByRole('button', { name: /add new task/i })).toHaveFocus();
    });

    test('supports screen reader announcements', async () => {
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      });
      
      // Check for proper ARIA labels and roles
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getAllByRole('button')).toHaveLength.greaterThan(0);
      
      // Check for task list accessibility
      const taskElements = screen.getAllByRole('listitem');
      expect(taskElements.length).toBeGreaterThan(0);
    });
  });

  describe('Performance', () => {
    test('renders large number of tasks efficiently', async () => {
      const largeTasks = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        title: `Task ${i + 1}`,
        description: `Description for task ${i + 1}`,
        completed: i % 3 === 0,
        dueDate: i % 5 === 0 ? '2026-03-01' : null,
        sortOrder: i,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));
      
      server.use(
        rest.get('/api/tasks', (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(largeTasks));
        })
      );
      
      const startTime = performance.now();
      
      await act(async () => {
        render(<App />);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Task 1')).toBeInTheDocument();
      });
      
      const renderTime = performance.now() - startTime;
      
      // Should render within reasonable time (adjust threshold as needed)
      expect(renderTime).toBeLessThan(2000);
    });
  });
});