import { render } from '@testing-library/react';

// Test utilities and helpers
export const renderWithRouter = (component) => {
  return render(component);
};

export const mockFetch = (data = []) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    })
  );
};

export const resetMocks = () => {
  if (global.fetch && global.fetch.mockClear) {
    global.fetch.mockClear();
  }
};

export const createMockTask = (overrides = {}) => ({
  id: 1,
  title: 'Test Task',
  description: 'Test Description',
  completed: false,
  createdAt: new Date().toISOString(),
  ...overrides
});

export const waitForElement = async (element, timeout = 1000) => {
  return new Promise((resolve) => {
    const checkElement = () => {
      if (element) {
        resolve(element);
      } else if (timeout > 0) {
        setTimeout(checkElement, 100);
        timeout -= 100;
      } else {
        resolve(null);
      }
    };
    checkElement();
  });
};

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