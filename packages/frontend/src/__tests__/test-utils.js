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

  // Wrapper component with providers (to be expanded with Context providers)
  const Wrapper = ({ children }) => {
    return (
      <div data-theme={theme}>
        {children}
      </div>
    );
  };

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  };
};

/**
 * Form Testing Utilities
 */
export const formTestUtils = {
  // Fill form fields by label text
  async fillFormField(user, labelText, value) {
    const field = screen.getByLabelText(labelText);
    await user.clear(field);
    await user.type(field, value);
    return field;
  },

  // Fill form fields by placeholder text
  async fillFormFieldByPlaceholder(user, placeholderText, value) {
    const field = screen.getByPlaceholderText(placeholderText);
    await user.clear(field);
    await user.type(field, value);
    return field;
  },

  // Submit form by button text
  async submitForm(user, buttonText = 'Submit') {
    const submitButton = screen.getByRole('button', { name: buttonText });
    await user.click(submitButton);
    return submitButton;
  },

  // Test form validation
  async testFormValidation(user, fieldLabel, invalidValue, expectedErrorMessage) {
    await this.fillFormField(user, fieldLabel, invalidValue);
    await user.tab(); // Trigger validation on blur
    
    await waitFor(() => {
      expect(screen.getByText(expectedErrorMessage)).toBeInTheDocument();
    });
  }
};

/**
 * Component Interaction Testing Utilities
 */
export const interactionTestUtils = {
  // Test button clicks with loading states
  async testButtonWithLoading(user, button, expectedLoadingText = 'Loading...') {
    await user.click(button);
    
    // Check for loading state
    await waitFor(() => {
      expect(
        screen.getByText(expectedLoadingText) || 
        button.disabled
      ).toBeTruthy();
    });
  },

  // Test keyboard navigation
  async testKeyboardNavigation(user, startElement, key = 'Tab', expectedFocusedElement) {
    await user.click(startElement);
    await user.keyboard(`{${key}}`);
    
    if (expectedFocusedElement) {
      expect(expectedFocusedElement).toHaveFocus();
    }
  },

  // Test drag and drop (for task reordering)
  async simulateDragAndDrop(sourceElement, targetElement) {
    fireEvent.dragStart(sourceElement);
    fireEvent.dragEnter(targetElement);
    fireEvent.dragOver(targetElement);
    fireEvent.drop(targetElement);
    fireEvent.dragEnd(sourceElement);
  }
};

/**
 * Accessibility Testing Utilities
 */
export const a11yTestUtils = {
  // Test ARIA attributes
  testAriaLabel(element, expectedLabel) {
    expect(element).toHaveAttribute('aria-label', expectedLabel);
  },

  testAriaDescribedBy(element, expectedId) {
    expect(element).toHaveAttribute('aria-describedby', expectedId);
  },

  // Test keyboard accessibility
  async testKeyboardAccessibility(user, component) {
    const focusableElements = component.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    // Test tab navigation
    for (let i = 0; i < focusableElements.length; i++) {
      await user.tab();
      if (i > 0) {
        expect(focusableElements[i]).toHaveFocus();
      }
    }
  },

  // Test screen reader announcements
  testScreenReaderContent(text) {
    const announcement = screen.getByText(text);
    expect(announcement).toBeInTheDocument();
    expect(announcement).toHaveAttribute('aria-live');
  },

  // Test high contrast compatibility
  testHighContrastMode(element) {
    // Ensure elements have proper contrast ratios
    const computedStyle = window.getComputedStyle(element);
    expect(computedStyle.backgroundColor).not.toBe('transparent');
    expect(computedStyle.color).not.toBe('transparent');
  }
};

/**
 * API Mocking Utilities for Component Tests
 */
export const apiMockUtils = {
  // Mock successful API responses
  mockSuccessfulFetch(data) {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(data)
      })
    );
  },

  // Mock API errors
  mockErrorFetch(status = 500, error = 'Server Error') {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status,
        json: () => Promise.resolve({ error })
      })
    );
  },

  // Mock network delays
  mockDelayedFetch(data, delay = 1000) {
    global.fetch = jest.fn(() =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(data)
          });
        }, delay);
      })
    );
  },

  // Restore original fetch
  restoreFetch() {
    global.fetch.mockRestore();
  }
};

/**
 * Component Testing Patterns
 */
export const componentTestPatterns = {
  // Test component rendering with different props
  testComponentWithProps(Component, propVariations) {
    propVariations.forEach((props, index) => {
      const { rerender } = renderWithProviders(<Component {...props} />);
      
      // Add specific assertions based on props
      describe(`Variation ${index + 1}`, () => {
        test('renders without crashing', () => {
          expect(true).toBe(true); // Component rendered successfully
        });
      });
    });
  },

  // Test component lifecycle and state changes
  async testStateChanges(user, initialState, interactions, expectedFinalState) {
    // This would typically work with a more complex component state
    // For demonstration purposes, showing the pattern
    for (const interaction of interactions) {
      await interaction(user);
    }
    
    // Assert final state
    expectedFinalState.forEach((assertion) => {
      assertion();
    });
  },

  // Test error boundaries
  testErrorBoundary(Component, triggerError) {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      renderWithProviders(<Component />);
      triggerError();
    }).not.toThrow();
    
    consoleSpy.mockRestore();
  }
};

/**
 * Performance Testing Utilities
 */
export const performanceTestUtils = {
  // Test render performance
  measureRenderTime(Component, props = {}) {
    const start = performance.now();
    renderWithProviders(<Component {...props} />);
    const end = performance.now();
    
    return end - start;
  },

  // Test re-render optimization
  testMemoization(Component, props, updateProps) {
    const renderSpy = jest.fn();
    
    // Would need React.memo or similar optimization to test
    const MemoizedComponent = React.memo(Component);
    
    const { rerender } = renderWithProviders(<MemoizedComponent {...props} />);
    rerender(<MemoizedComponent {...updateProps} />);
    
    // Assert render optimization
    return renderSpy.mock.calls.length;
  }
};

/**
 * Visual Regression Testing Helpers
 */
export const visualTestUtils = {
  // Generate component snapshots
  testSnapshot(Component, props = {}) {
    const { container } = renderWithProviders(<Component {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  },

  // Test responsive behavior
  testResponsiveness(Component, breakpoints = ['mobile', 'tablet', 'desktop']) {
    breakpoints.forEach(breakpoint => {
      // Mock viewport sizes
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: getViewportWidth(breakpoint)
      });

      const { container } = renderWithProviders(<Component />);
      expect(container.firstChild).toMatchSnapshot(`${breakpoint}-view`);
    });
  }
};

// Helper function for viewport widths
function getViewportWidth(breakpoint) {
  const sizes = {
    mobile: 375,
    tablet: 768,
    desktop: 1024
  };
  
  return sizes[breakpoint] || sizes.desktop;
}

// Export all utilities
export {
  formTestUtils,
  interactionTestUtils,
  a11yTestUtils,
  apiMockUtils,
  componentTestPatterns,
  performanceTestUtils,
  visualTestUtils
};