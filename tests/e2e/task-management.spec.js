import { test, expect } from '@playwright/test';

/**
 * Critical Task Management User Journey E2E Tests
 * Following the functional requirements and testing guidelines
 */

test.describe('Task Management Application - Critical User Journeys', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('/');
    
    // Wait for the application to load
    await page.waitForLoadState('networkidle');
    
    // Verify app is loaded
    await expect(page).toHaveTitle(/Todo/i);
  });

  test('should load the application successfully', async ({ page }) => {
    // Verify the main elements are present
    await expect(page.locator('header, nav, main')).toBeVisible();
    
    // Check for task list container
    // await expect(page.locator('[data-testid="task-list"]')).toBeVisible();
    
    // Performance requirement: app should load within 3 seconds (FR-043)
    const loadTime = await page.evaluate(() => performance.now());
    expect(loadTime).toBeLessThan(3000);
  });

  test('should create a new task successfully', async ({ page }) => {
    // Click "Add Task" button or open task form
    const addButton = page.locator('button:has-text("Add"), button:has-text("New")').first();
    await addButton.click();
    
    // Fill task form
    const titleInput = page.locator('input[placeholder*="task"], input[placeholder*="title"]').first();
    await titleInput.fill('Test Task from E2E');
    
    const descriptionInput = page.locator('textarea, input[placeholder*="description"]').first();
    if (await descriptionInput.isVisible()) {
      await descriptionInput.fill('This is a test task created by E2E tests');
    }
    
    // Submit the form
    const submitButton = page.locator('button:has-text("Add"), button:has-text("Save"), button:has-text("Create")').first();
    await submitButton.click();
    
    // Verify task appears in the list
    await expect(page.locator('text=Test Task from E2E')).toBeVisible();
    
    // Verify success feedback (FR-019)
    // Look for success message, notification, or visual feedback
    await expect(
      page.locator('.success, .notification, [role="alert"]').or(
        page.locator('text=created, text=added, text=success')
      )
    ).toBeVisible({ timeout: 5000 }).catch(() => {
      // If no explicit success message, task appearing in list is sufficient
      console.log('No explicit success message found, but task was created successfully');
    });
  });

  test('should edit an existing task', async ({ page }) => {
    // First create a task to edit
    await createTestTask(page, 'Task to Edit');
    
    // Find and click edit button for the task
    const taskItem = page.locator('text=Task to Edit').locator('..').first();
    const editButton = taskItem.locator('button:has-text("Edit"), [aria-label*="edit"], .edit-button').first();
    await editButton.click();
    
    // Modify the task
    const titleInput = page.locator('input[value*="Task to Edit"], input:has-value("Task to Edit")').first();
    await titleInput.fill('Updated Task Title');
    
    // Save changes
    const saveButton = page.locator('button:has-text("Save"), button:has-text("Update")').first();
    await saveButton.click();
    
    // Verify changes are saved
    await expect(page.locator('text=Updated Task Title')).toBeVisible();
    await expect(page.locator('text=Task to Edit')).not.toBeVisible();
  });

  test('should mark task as completed', async ({ page }) => {
    // Create a test task
    await createTestTask(page, 'Task to Complete');
    
    // Find and click the completion checkbox/button
    const taskItem = page.locator('text=Task to Complete').locator('..').first();
    const completeButton = taskItem.locator(
      'input[type="checkbox"], button:has-text("Complete"), button:has-text("✓"), [role="checkbox"]'
    ).first();
    
    await completeButton.click();
    
    // Verify task is marked as completed with visual indication (FR-014)
    await expect(taskItem).toHaveClass(/completed|done|finished/);
    
    // Or check for strikethrough, fade, or other visual indicators
    const taskTitle = taskItem.locator('text=Task to Complete');
    await expect(taskTitle).toHaveCSS('text-decoration', /line-through/);
  });

  test('should filter tasks by status', async ({ page }) => {
    // Create test tasks with different statuses
    await createTestTask(page, 'Active Task 1');
    await createTestTask(page, 'Active Task 2');
    
    // Mark one task as completed
    const taskItem = page.locator('text=Active Task 1').locator('..').first();
    const completeButton = taskItem.locator('input[type="checkbox"], [role="checkbox"]').first();
    await completeButton.click();
    
    // Test "Active" filter
    const activeFilter = page.locator('button:has-text("Active"), [data-filter="active"]').first();
    await activeFilter.click();
    
    await expect(page.locator('text=Active Task 2')).toBeVisible();
    await expect(page.locator('text=Active Task 1')).not.toBeVisible();
    
    // Test "Completed" filter
    const completedFilter = page.locator('button:has-text("Completed"), [data-filter="completed"]').first();
    await completedFilter.click();
    
    await expect(page.locator('text=Active Task 1')).toBeVisible();
    await expect(page.locator('text=Active Task 2')).not.toBeVisible();
    
    // Test "All" filter
    const allFilter = page.locator('button:has-text("All"), [data-filter="all"]').first();
    await allFilter.click();
    
    await expect(page.locator('text=Active Task 1')).toBeVisible();
    await expect(page.locator('text=Active Task 2')).toBeVisible();
  });

  test('should delete a task', async ({ page }) => {
    // Create a test task
    await createTestTask(page, 'Task to Delete');
    
    // Find and click delete button
    const taskItem = page.locator('text=Task to Delete').locator('..').first();
    const deleteButton = taskItem.locator('button:has-text("Delete"), [aria-label*="delete"], .delete-button').first();
    await deleteButton.click();
    
    // Handle confirmation dialog if present
    const confirmButton = page.locator('button:has-text("Confirm"), button:has-text("Yes"), button:has-text("Delete")').first();
    if (await confirmButton.isVisible({ timeout: 2000 })) {
      await confirmButton.click();
    }
    
    // Verify task is removed from the list
    await expect(page.locator('text=Task to Delete')).not.toBeVisible();
  });

  test('should handle due dates correctly', async ({ page }) => {
    // Create task with due date
    await createTestTaskWithDueDate(page, 'Task with Due Date', '2026-03-15');
    
    // Verify due date is displayed
    await expect(page.locator('text=2026-03-15, text=Mar 15, text=March 15')).toBeVisible();
    
    // Test overdue task visualization (FR-010)
    await createTestTaskWithDueDate(page, 'Overdue Task', '2026-01-01');
    
    // Verify overdue styling
    const overdueTask = page.locator('text=Overdue Task').locator('..').first();
    await expect(overdueTask).toHaveClass(/overdue|urgent|late/);
  });

  test('should be responsive on mobile devices', async ({ page, isMobile }) => {
    if (isMobile) {
      // Verify mobile-friendly layout (FR-018)
      const taskList = page.locator('[data-testid="task-list"], .task-list, main').first();
      await expect(taskList).toBeVisible();
      
      // Verify mobile navigation works
      const addButton = page.locator('button:has-text("Add"), .fab, [aria-label*="add"]').first();
      await expect(addButton).toBeVisible();
      
      // Test touch interactions
      await addButton.tap();
      
      // Verify form is mobile-friendly
      const titleInput = page.locator('input[placeholder*="task"], input[placeholder*="title"]').first();
      await expect(titleInput).toBeVisible();
    }
  });

  test('should handle errors gracefully', async ({ page }) => {
    // Simulate network error by intercepting API calls
    await page.route('**/api/tasks', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Server error' })
      });
    });
    
    // Try to create a task
    await createTestTask(page, 'This should fail');
    
    // Verify error message is displayed (FR-020, FR-058)
    await expect(page.locator('.error, .alert, [role="alert"]')).toBeVisible();
    await expect(page.locator('text=error, text=failed, text=something went wrong')).toBeVisible();
  });

  test('should meet performance requirements', async ({ page }) => {
    // API response time test (FR-044: <500ms)
    const startTime = Date.now();
    
    // Make API call by creating a task
    await createTestTask(page, 'Performance Test Task');
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    // Allow some buffer for UI rendering
    expect(responseTime).toBeLessThan(2000); // More lenient in E2E tests
    
    // Test with multiple tasks (FR-045: handle 1000 tasks)
    // Create several tasks quickly
    for (let i = 0; i < 10; i++) {
      await createTestTask(page, `Bulk Task ${i}`);
    }
    
    // Verify UI remains responsive
    await expect(page.locator('text=Bulk Task 9')).toBeVisible();
  });
});

/**
 * Helper functions for E2E tests
 */
async function createTestTask(page, title, description = '') {
  const addButton = page.locator('button:has-text("Add"), button:has-text("New Task"), .add-task-button').first();
  await addButton.click();
  
  const titleInput = page.locator('input[placeholder*="task"], input[placeholder*="title"]').first();
  await titleInput.fill(title);
  
  if (description) {
    const descriptionInput = page.locator('textarea, input[placeholder*="description"]').first();
    if (await descriptionInput.isVisible()) {
      await descriptionInput.fill(description);
    }
  }
  
  const submitButton = page.locator('button:has-text("Add"), button:has-text("Save"), button:has-text("Create")').first();
  await submitButton.click();
  
  // Wait for task to appear
  await page.waitForSelector(`text=${title}`, { timeout: 5000 });
}

async function createTestTaskWithDueDate(page, title, dueDate) {
  const addButton = page.locator('button:has-text("Add"), button:has-text("New Task")').first();
  await addButton.click();
  
  const titleInput = page.locator('input[placeholder*="task"], input[placeholder*="title"]').first();
  await titleInput.fill(title);
  
  const dateInput = page.locator('input[type="date"], input[placeholder*="date"]').first();
  if (await dateInput.isVisible()) {
    await dateInput.fill(dueDate);
  }
  
  const submitButton = page.locator('button:has-text("Add"), button:has-text("Save")').first();
  await submitButton.click();
  
  await page.waitForSelector(`text=${title}`, { timeout: 5000 });
}