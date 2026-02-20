import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * React Component Testing Utilities
 * Simple testing utilities for React components
 */

/**
 * Custom render function with common providers
 */
export const renderWithProviders = (ui, options = {}) => {
  const { ...renderOptions } = options;

  const Wrapper = ({ children }) => {
    return children;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

/**
 * Helper function to simulate typing and form submission
 */
export const fillAndSubmitForm = async (user, formData) => {
  for (const [selector, value] of Object.entries(formData)) {
    const element = document.querySelector(selector) || 
                   screen.getByRole('textbox', { name: new RegExp(selector, 'i') });
    if (element) {
      await user.clear(element);
      await user.type(element, value);
    }
  }
};

/**
 * Helper to create mock functions with common patterns
 */
export const createMockHandlers = () => ({
  onClick: jest.fn(),
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  onKeyDown: jest.fn(),
});

/**
 * Helper to wait for async operations
 */
export const waitForAsync = (ms = 100) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Re-export commonly used testing-library functions
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

// Test to prevent Jest "no tests" error
describe('test-utils-clean utilities', () => {
  test('waitForAsync should return a promise', async () => {
    const start = Date.now();
    await waitForAsync(10);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(8); // Allow for timer precision
  });
});