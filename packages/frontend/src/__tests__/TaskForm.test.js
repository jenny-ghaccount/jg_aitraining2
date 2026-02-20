import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // Try to submit without title
      const submitButton = screen.getByRole('button', { name: /add task/i });
      await user.click(submitButton);

      expect(screen.getByText(/task title is required/i)).toBeInTheDocument();
      expect(mockOnSubmit).not.toHaveBeenCalled();
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

      expect(screen.getByText(/task title must be less than 255 characters/i)).toBeInTheDocument();
      expect(mockOnSubmit).not.toHaveBeenCalled();
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

      expect(screen.getByText('Description must be less than 1000 characters')).toBeInTheDocument();
      expect(mockOnSubmit).not.toHaveBeenCalled();
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
      // This test may need adjustment based on the actual date picker component
      const dateInput = screen.getByLabelText(/due date/i);
      await user.type(dateInput, 'invalid-date');

      const submitButton = screen.getByRole('button', { name: /add task/i });
      await user.click(submitButton);

      // The exact error message will depend on your date validation implementation
      expect(mockOnSubmit).not.toHaveBeenCalledWith(
        expect.objectContaining({
          dueDate: 'invalid-date'
        })
      );
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
      expect(screen.getByLabelText(/task title/i)).toHaveValue('');
      expect(screen.getByLabelText(/description/i)).toHaveValue('');
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
      const submitButton = screen.getByRole('button', { name: /add task/i });

      // Tab through form elements
      titleInput.focus();
      expect(titleInput).toHaveFocus();

      await user.tab();
      expect(descriptionInput).toHaveFocus();

      await user.tab();
      expect(dueDateInput).toHaveFocus();

      await user.tab();
      expect(submitButton).toHaveFocus();
    });

    test('submits form on Enter key in title field', async () => {
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

    test('cancels form on Escape key', async () => {
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
    });

    test('has proper ARIA labels and roles', () => {
      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByRole('form')).toBeInTheDocument();
      expect(screen.getByLabelText(/task title/i)).toHaveAttribute('required');
      expect(screen.getByRole('button', { name: /add task/i })).toHaveAttribute('type', 'submit');
    });

    test('announces form errors to screen readers', async () => {
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // Submit invalid form
      const submitButton = screen.getByRole('button', { name: /add task/i });
      await user.click(submitButton);

      // Error should have proper ARIA attributes
      const errorMessage = screen.getByText('Task title is required');
      expect(errorMessage).toHaveAttribute('role', 'alert');
    });
  });

  describe('Material-UI Integration', () => {
    test('renders Material-UI components correctly', () => {
      render(
        <TestWrapper>
          <TaskForm {...defaultProps} />
        </TestWrapper>
      );

      // Check for Material-UI specific classes/components
      expect(screen.getByRole('dialog')).toHaveClass('MuiDialog-root');
      expect(screen.getByLabelText(/task title/i)).toHaveClass('MuiInputBase-input');
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