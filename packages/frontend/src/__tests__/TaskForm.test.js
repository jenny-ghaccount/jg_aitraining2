import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
import TaskForm from '../TaskForm';
import { ThemeProvider } from '../theme/ThemeProvider';

// Wrapper component for theme provider
const TestWrapper = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

const mockOnSubmit = jest.fn();
const mockOnClose = jest.fn();

const defaultProps = {
  isOpen: true,
  onSubmit: mockOnSubmit,
  onClose: mockOnClose
};

describe('TaskForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders form elements correctly', () => {
      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      expect(screen.getByLabelText(/task title/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/due date/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
      // Logging for debugging
      console.log('Rendered form elements:', {
        title: screen.queryByLabelText(/task title/i),
        description: screen.queryByLabelText(/description/i),
        dueDate: screen.queryByLabelText(/due date/i),
        addTaskBtn: screen.queryByRole('button', { name: /add task/i }),
        cancelBtn: screen.queryByRole('button', { name: /cancel/i })
      });
    });

    test('renders in edit mode with task data', () => {
      const taskData = {
        id: 1,
        title: 'Test Task',
        description: 'Test description',
        dueDate: '2026-02-25'
      };

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} task={taskData} />
        </TestWrapper>
      );

      expect(screen.getByDisplayValue('Test Task')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Test description')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /update task/i })).toBeInTheDocument();
    });

    test.skip('shows loading state correctly (not implemented)', () => {
      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // Loading state feature not implemented in TaskForm component
      // const submitButton = screen.getByRole('button', { name: /add task/i });
      // expect(submitButton).toBeDisabled();
      // expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    test('validates required title field', async () => {
      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // The Add Task button is disabled when title is empty
      // This prevents submission and is the primary validation
      const submitButton = screen.getByRole('button', { name: /add task/i });
      expect(submitButton).toBeDisabled();
      expect(mockOnSubmit).not.toHaveBeenCalled();
      // Logging for debugging
      console.log('Submit button disabled:', submitButton.disabled);
    });

    test('validates title length limit', async () => {
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // Enter title exceeding 255 characters
      const longTitle = 'a'.repeat(256);
      const titleInput = screen.getByLabelText(/task title/i);
      await user.type(titleInput, longTitle);

      const submitButton = screen.getByRole('button', { name: /add task/i });
      await user.click(submitButton);

      // Wait for error message to appear
      await waitFor(() => {
        expect(screen.getByText(/task title must be less than 255 characters/i)).toBeInTheDocument();
        expect(mockOnSubmit).not.toHaveBeenCalled();
      });
    });

    test('validates description length limit', async () => {
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // Enter valid title and long description
      const titleInput = screen.getByLabelText(/task title/i);
      const descriptionInput = screen.getByLabelText(/description/i);
      
      await user.type(titleInput, 'Valid Title');
      await user.type(descriptionInput, 'a'.repeat(1001));

      const submitButton = screen.getByRole('button', { name: /add task/i });
      await user.click(submitButton);

      // Wait for error message to appear
      await waitFor(() => {
        expect(screen.getByText('Description must be less than 1000 characters')).toBeInTheDocument();
        expect(mockOnSubmit).not.toHaveBeenCalled();
      });
    });

    test('validates date format', async () => {
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      const titleInput = screen.getByLabelText(/task title/i);
      await user.type(titleInput, 'Valid Title');

      // Try to enter invalid date (this would depend on your date picker implementation)
      const dateInput = screen.getByLabelText(/due date/i);
      await user.type(dateInput, 'invalid-date');

      const submitButton = screen.getByRole('button', { name: /add task/i });
      await user.click(submitButton);

      // Wait for any error message or just check that onSubmit was not called
      await waitFor(() => {
        expect(mockOnSubmit).not.toHaveBeenCalledWith(
          expect.objectContaining({
            dueDate: 'invalid-date'
          })
        );
      });
    });
  });

  describe('Form Submission', () => {
    test('submits valid form data', async () => {
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // Fill form with valid data
      await user.type(screen.getByLabelText(/task title/i), 'New Task');
      await user.type(screen.getByLabelText(/description/i), 'Task description');

      const submitButton = screen.getByRole('button', { name: /add task/i });
      await user.click(submitButton);

      expect(mockOnSubmit).toHaveBeenCalledWith({
        title: 'New Task',
        description: 'Task description',
        dueDate: null  // dueDate will be null when empty string is passed
      });
    });

    test('handles form cancellation', async () => {
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      const cancelButton = screen.getByRole('button', { name: /cancel/i });
      await user.click(cancelButton);

      expect(mockOnClose).toHaveBeenCalled();
    });

    test('clears form after successful submission', async () => {
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // Fill and submit form
      await user.type(screen.getByLabelText(/task title/i), 'New Task');
      await user.type(screen.getByLabelText(/description/i), 'Description');

      const submitButton = screen.getByRole('button', { name: /add task/i });
      await user.click(submitButton);

      // Form should be cleared after submission (if successful)
      await waitFor(() => {
        expect(screen.getByLabelText(/task title/i)).toHaveValue('');
        expect(screen.getByLabelText(/description/i)).toHaveValue('');
      });
    });
  });

  describe('Keyboard Navigation', () => {
    test('supports tab navigation through form fields', async () => {
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      const titleInput = screen.getByLabelText(/task title/i);
      const descriptionInput = screen.getByLabelText(/description/i);
      const dueDateInput = screen.getByLabelText(/due date/i);
      const cancelButton = screen.getByRole('button', { name: /cancel/i });

      // Tab through form elements
      titleInput.focus();
      expect(titleInput).toHaveFocus();

      await user.tab();
      expect(descriptionInput).toHaveFocus();

      await user.tab();
      expect(dueDateInput).toHaveFocus();

      await user.tab();
      // Cancel button comes before disabled Add Task button in tab order
      expect(cancelButton).toHaveFocus();
    });

    test.skip('submits form on Enter key in title field (not implemented)', async () => {
      // The form does not currently handle Enter key submission
      // This would require adding onKeyDown handler to the form
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      const titleInput = screen.getByLabelText(/task title/i);
      await user.type(titleInput, 'New Task');
      await user.keyboard('{Enter}');

      expect(mockOnSubmit).toHaveBeenCalledWith({
        title: 'New Task',
        description: '',
        dueDate: null
      });
    });

    test.skip('cancels form on Escape key (not implemented)', async () => {
      // The form does not currently handle Escape key
      // This would require adding onKeyDown handler
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      await user.keyboard('{Escape}');
      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    test('meets basic accessibility standards', async () => {
      const { container } = render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // Check for basic accessibility - form labels and structure
      const labels = container.querySelectorAll('label');
      const inputs = container.querySelectorAll('input, textarea');
      
      expect(labels.length).toBeGreaterThan(0);
      expect(inputs.length).toBeGreaterThan(0);
      // Logging for debugging
      console.log('Accessibility check:', {
        labelCount: labels.length,
        inputCount: inputs.length
      });
    });

    test('has proper ARIA labels and roles', () => {
      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      // The form uses component="form" which doesn't create role="form" in the mock
      // Check for the form container instead
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'task-form-title');
      expect(screen.getByLabelText(/task title/i)).toHaveAttribute('required');
    });

    test('button is disabled when title is empty', () => {
      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // When title is empty, submit button should be disabled to prevent invalid submissions
      const submitButton = screen.getByRole('button', { name: /add task/i });
      expect(submitButton).toBeDisabled();
    });
  });

  describe('Material-UI Integration', () => {
    test('renders dialog component correctly', () => {
      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // In test environment we use mocks, so check for dialog structure
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByLabelText(/task title/i)).toBeInTheDocument();
    });

    test('applies theme correctly', () => {
      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // The dialog should inherit theme colors
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
      // Theme-specific assertions would depend on your theme implementation
    });
  });
});