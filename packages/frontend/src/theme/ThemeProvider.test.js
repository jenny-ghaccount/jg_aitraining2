import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../theme/ThemeProvider';
const ThemeConsumer = () => {
  const { currentTheme, toggleTheme, resetToSystemTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{currentTheme}</span>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={resetToSystemTheme}>Reset</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    // Mock matchMedia
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: query.includes('dark') ? false : false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
      };
    });
  });

  test('provides default theme', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('standard');
  });

  test('toggles theme', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    const themeSpan = screen.getByTestId('theme');
    const toggleBtn = screen.getByText('Toggle');
    act(() => {
      toggleBtn.click();
    });
    expect(themeSpan.textContent).not.toBe('standard');
    act(() => {
      toggleBtn.click();
    });
    expect(themeSpan.textContent).not.toBe('standard');
    act(() => {
      toggleBtn.click();
    });
  });

  test('resets to system theme', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    const resetBtn = screen.getByText('Reset');
    act(() => {
      resetBtn.click();
    });
    expect(screen.getByTestId('theme').textContent).toBe('standard');
  });

  test('throws error if useTheme used outside provider', () => {
    const BrokenConsumer = () => {
      useTheme();
      return null;
    };
    expect(() => render(<BrokenConsumer />)).toThrow('useTheme must be used within a ThemeProvider');
  });

  test('sets theme from localStorage', () => {
    // Mock localStorage before rendering
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: () => 'high-contrast-dark',
        setItem: () => {},
        removeItem: () => {},
        clear: () => {}
      },
      writable: true
    });
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('high-contrast-dark');
  });
});
