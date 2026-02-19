import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * React Component Testing Utilities
 */

/**
 * Custom render function with providers
 */
export const renderWithProviders = (ui, options = {}) => {
  const { ...renderOptions } = options;

  const Wrapper = ({ children }) => {
    return children;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

/**
 * Helper to create mock functions
 */
export const createMockHandlers = () => ({
  onClick: jest.fn(),
  onChange: jest.fn(),
  onSubmit: jest.fn(),
});

// Re-export commonly used testing-library functions
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';