// This file has been removed to avoid duplicate test conflicts.
// The canonical integration tests are in ComponentIntegration.test.js
    });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('should handle form interactions', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Find the task input and button
    const taskInput = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add task/i });
    
    // Type a task and submit
    await user.type(taskInput, 'Test task');
    expect(taskInput).toHaveValue('Test task');
    
    await user.click(addButton);
    
    // Input should be cleared after submission
    expect(taskInput).toHaveValue('');
  });

  test('should support keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Tab through focusable elements
    await user.tab();
    const firstElement = document.activeElement;
    
    await user.tab();
    const secondElement = document.activeElement;
    
    // Should move focus to different elements
    expect(firstElement).not.toBe(secondElement);
  });

  test('should handle Enter key form submission', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const taskInput = screen.getByRole('textbox');
    
    // Type task and press Enter
    await user.type(taskInput, 'Task via Enter{enter}');
    
    // Input should be cleared
    expect(taskInput).toHaveValue('');
  });
});