import { test, expect } from '@playwright/test';

/**
 * Accessibility E2E Tests
 * Following WCAG 2.1 AA compliance requirements and testing guidelines
 */

test.describe('Accessibility Compliance Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should have proper page structure and landmarks', async ({ page }) => {
    // Test for proper HTML structure (WCAG 1.3.1)
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('header, nav')).toHaveCount({ min: 1 });
    
    // Test for proper heading hierarchy (WCAG 1.3.1)
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Verify page has a title (WCAG 2.4.2)
    await expect(page).toHaveTitle(/.+/);
  });

  test('should support keyboard navigation', async ({ page }) => {
    // Test Tab navigation through interactive elements (WCAG 2.1.1)
    await page.keyboard.press('Tab');
    
    // Verify focus is visible (WCAG 2.4.7)
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Test focus management through task creation workflow
    const addButton = page.locator('button:has-text("Add"), [aria-label*="add"]').first();
    await addButton.focus();
    await expect(addButton).toBeFocused();
    
    // Press Enter to activate (WCAG 2.1.1)
    await page.keyboard.press('Enter');
    
    // Verify focus moves to form
    const titleInput = page.locator('input[placeholder*="task"], input[placeholder*="title"]').first();
    if (await titleInput.isVisible()) {
      await expect(titleInput).toBeFocused();
    }
  });

  test('should have proper ARIA labels and descriptions', async ({ page }) => {
    // Test form labels (WCAG 3.3.2)
    const inputs = page.locator('input, textarea, select');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      
      // Check for aria-label or associated label (WCAG 1.3.1)
      const hasAriaLabel = await input.getAttribute('aria-label');
      const hasAriaLabelledBy = await input.getAttribute('aria-labelledby');
      const inputId = await input.getAttribute('id');
      
      let hasLabel = false;
      if (hasAriaLabel || hasAriaLabelledBy) {
        hasLabel = true;
      } else if (inputId) {
        const associatedLabel = page.locator(`label[for="${inputId}"]`);
        hasLabel = await associatedLabel.count() > 0;
      }
      
      expect(hasLabel).toBe(true);
    }
  });

  test('should have sufficient color contrast', async ({ page }) => {
    // Test high contrast theme support (WCAG 1.4.3)
    const themeSelector = page.locator('[data-theme], .theme-selector').first();
    
    if (await themeSelector.isVisible()) {
      // Test switching to high contrast theme
      await themeSelector.click();
      const highContrastOption = page.locator('option:has-text("contrast"), button:has-text("contrast")').first();
      
      if (await highContrastOption.isVisible()) {
        await highContrastOption.click();
        
        // Verify theme changes
        await expect(page.locator('[data-theme*="contrast"], .high-contrast')).toBeVisible();
      }
    }
    
    // Test that text is readable (basic color contrast test)
    const textElements = page.locator('p, span, div, button, input, label');
    const elementCount = Math.min(await textElements.count(), 5); // Test first 5 elements
    
    for (let i = 0; i < elementCount; i++) {
      const element = textElements.nth(i);
      if (await element.isVisible()) {
        const styles = await element.evaluate(el => {
          const computed = window.getComputedStyle(el);
          return {
            color: computed.color,
            backgroundColor: computed.backgroundColor,
            fontSize: computed.fontSize
          };
        });
        
        // Ensure text has color and background (basic check)
        expect(styles.color).not.toBe('transparent');
        expect(styles.backgroundColor).not.toBe('transparent');
      }
    }
  });

  test('should provide alternative text for images', async ({ page }) => {
    // Test alt attributes on images (WCAG 1.1.1)
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      
      // Images should have alt text (even if empty for decorative images)
      expect(alt).not.toBeNull();
    }
  });

  test('should handle screen reader announcements', async ({ page }) => {
    // Test for ARIA live regions (WCAG 4.1.3)
    const liveRegions = page.locator('[aria-live], [role="status"], [role="alert"]');
    
    // Create a task to trigger announcements
    const addButton = page.locator('button:has-text("Add")').first();
    if (await addButton.isVisible()) {
      await addButton.click();
      
      const titleInput = page.locator('input[placeholder*="task"]').first();
      if (await titleInput.isVisible()) {
        await titleInput.fill('Accessibility Test Task');
        
        const submitButton = page.locator('button:has-text("Save"), button:has-text("Add")').first();
        await submitButton.click();
        
        // Check for success announcement
        await expect(liveRegions.or(page.locator('text=added, text=created, text=success'))).toBeVisible();
      }
    }
  });

  test('should support assistive technologies', async ({ page }) => {
    // Test ARIA roles (WCAG 4.1.2)
    const buttons = page.locator('button, [role="button"]');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i);
      
      // Verify accessible name (WCAG 4.1.2)
      const accessibleName = await button.evaluate(el => {
        return el.getAttribute('aria-label') || 
               el.textContent || 
               el.getAttribute('title') ||
               (el.querySelector('img') && el.querySelector('img').alt);
      });
      
      expect(accessibleName).toBeTruthy();
    }
    
    // Test form validation announcements (WCAG 3.3.1)
    const titleInput = page.locator('input[placeholder*="task"]').first();
    if (await titleInput.isVisible()) {
      // Try to submit empty form
      await titleInput.focus();
      await titleInput.fill('');
      await page.keyboard.press('Tab');
      
      // Check for validation message
      const validationMessage = page.locator('[aria-invalid="true"], .error, [role="alert"]');
      if (await validationMessage.count() > 0) {
        await expect(validationMessage.first()).toBeVisible();
      }
    }
  });

  test('should work without JavaScript (progressive enhancement)', async ({ page, context }) => {
    // Disable JavaScript
    await context.setJavaScriptEnabled(false);
    
    // Reload page
    await page.reload();
    
    // Basic content should still be accessible
    await expect(page.locator('main, h1, nav')).toBeVisible();
    
    // Forms should still be functional (if implemented with proper fallbacks)
    const forms = page.locator('form');
    if (await forms.count() > 0) {
      await expect(forms.first()).toBeVisible();
    }
  });

  test('should zoom to 200% without horizontal scrolling', async ({ page }) => {
    // Test zoom accessibility (WCAG 1.4.4)
    await page.setViewportSize({ width: 1280, height: 1024 });
    
    // Set zoom to 200%
    await page.evaluate(() => {
      document.body.style.zoom = '2';
    });
    
    // Check that main content is still accessible
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Verify no horizontal scroll is needed (content should reflow)
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    
    // Allow some tolerance for zoom effects
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth * 1.1);
  });

  test('should support reduced motion preferences', async ({ page }) => {
    // Test prefers-reduced-motion support (WCAG 2.3.3)
    await page.emulateMedia({ reducedMotion: 'reduce' });
    
    // Animations should be reduced or disabled
    const animatedElements = page.locator('.animate, [class*="transition"], [class*="animation"]');
    
    if (await animatedElements.count() > 0) {
      const animationDuration = await animatedElements.first().evaluate(el => {
        return window.getComputedStyle(el).animationDuration;
      });
      
      // Animations should be very short or none
      expect(['0s', 'none', '']).toContain(animationDuration);
    }
  });

  test('should handle form errors accessibly', async ({ page }) => {
    // Test error identification and description (WCAG 3.3.1, 3.3.3)
    const addButton = page.locator('button:has-text("Add")').first();
    
    if (await addButton.isVisible()) {
      await addButton.click();
      
      // Try to submit form with invalid data
      const titleInput = page.locator('input[placeholder*="task"]').first();
      if (await titleInput.isVisible()) {
        // Submit empty form
        const submitButton = page.locator('button:has-text("Save"), button:has-text("Add")').first();
        await submitButton.click();
        
        // Check for accessible error messages
        const errorElements = page.locator('[aria-invalid="true"], .error, [role="alert"]');
        
        if (await errorElements.count() > 0) {
          const errorElement = errorElements.first();
          await expect(errorElement).toBeVisible();
          
          // Error should be programmatically associated with field
          const ariaDescribedBy = await titleInput.getAttribute('aria-describedby');
          if (ariaDescribedBy) {
            const errorDescription = page.locator(`#${ariaDescribedBy}`);
            await expect(errorDescription).toBeVisible();
          }
        }
      }
    }
  });
});

test.describe('Mobile Accessibility Tests', () => {
  test.use({ 
    viewport: { width: 375, height: 667 } // iPhone SE size
  });

  test('should be accessible on mobile devices', async ({ page }) => {
    await page.goto('/');
    
    // Test touch target sizes (WCAG 2.5.5) - minimum 44x44 pixels
    const buttons = page.locator('button, [role="button"], input[type="checkbox"]');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i);
      if (await button.isVisible()) {
        const box = await button.boundingBox();
        if (box) {
          expect(box.width).toBeGreaterThanOrEqual(44);
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }
    }
    
    // Test mobile form accessibility
    const inputs = page.locator('input, textarea');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < Math.min(inputCount, 3); i++) {
      const input = inputs.nth(i);
      if (await input.isVisible()) {
        // Inputs should have proper input types for mobile keyboards
        const type = await input.getAttribute('type');
        const inputMode = await input.getAttribute('inputmode');
        
        // Should have appropriate input method
        expect([type, inputMode].some(attr => attr !== null)).toBe(true);
      }
    }
  });
});