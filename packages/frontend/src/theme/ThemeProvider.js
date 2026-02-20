import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { themes } from './theme';

/**
 * Theme Context and Provider
 * Manages theme state and provides theme switching functionality
 */

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Global styles for consistent behavior
const globalStyles = (theme) => ({
  html: {
    fontSize: '16px',
    lineHeight: 1.5,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  body: {
    fontFamily: theme.typography.fontFamily,
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  '*': {
    boxSizing: 'border-box'
  },
  // Focus styles for accessibility
  '*:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px'
  },
  // High contrast mode support
  '@media (prefers-contrast: high)': {
    '*:focus-visible': {
      outline: '3px solid currentColor',
      outlineOffset: '2px'
    }
  },
  // Reduced motion support
  '@media (prefers-reduced-motion: reduce)': {
    '*': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important'
    }
  },
  // Print styles
  '@media print': {
    body: {
      backgroundColor: '#fff !important',
      color: '#000 !important'
    }
  }
});

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Get theme from localStorage or system preference
    const saved = localStorage.getItem('preferred-theme');
    if (saved && themes[saved]) {
      return saved;
    }
    
    // Check for system dark mode preference
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkModeQuery && darkModeQuery.matches) {
        return 'high-contrast-dark';
      }
    }
    
    // Check for high contrast preference
    if (window.matchMedia) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      if (highContrastQuery && highContrastQuery.matches) {
        return 'high-contrast-dark';
      }
    }
    
    return 'standard';
  });

  // Listen for system theme changes
  useEffect(() => {
    // Ensure window.matchMedia exists and works properly
    if (!window.matchMedia || typeof window.matchMedia !== 'function') {
      return;
    }
    
    let darkModeQuery, highContrastQuery;
    
    try {
      darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    } catch (error) {
      // matchMedia failed, skip theme change detection
      return;
    }
    
    // Ensure queries are valid MediaQueryList objects
    if (!darkModeQuery || !highContrastQuery || 
        typeof darkModeQuery.addEventListener !== 'function' ||
        typeof highContrastQuery.addEventListener !== 'function') {
      return;
    }
    
    const handleThemeChange = () => {
      // Only auto-switch if user hasn't manually selected a theme
      const hasManualSelection = localStorage.getItem('manual-theme-selection');
      if (!hasManualSelection) {
        if (highContrastQuery && highContrastQuery.matches) {
          setCurrentTheme(darkModeQuery && darkModeQuery.matches ? 'high-contrast-dark' : 'high-contrast-light');
        } else {
          setCurrentTheme(darkModeQuery && darkModeQuery.matches ? 'high-contrast-dark' : 'standard');
        }
      }
    };

    // Add event listeners safely
    try {
      darkModeQuery.addEventListener('change', handleThemeChange);
      highContrastQuery.addEventListener('change', handleThemeChange);
    } catch (error) {
      // Event listener setup failed, continue without theme change detection
      console.warn('Theme change detection setup failed:', error);
    }

    return () => {
      // Remove event listeners safely
      try {
        if (darkModeQuery && typeof darkModeQuery.removeEventListener === 'function') {
          darkModeQuery.removeEventListener('change', handleThemeChange);
        }
        if (highContrastQuery && typeof highContrastQuery.removeEventListener === 'function') {
          highContrastQuery.removeEventListener('change', handleThemeChange);
        }
      } catch (error) {
        // Cleanup failed, but that's okay
        console.warn('Theme change cleanup failed:', error);
      }
    };
  }, []);

  // Update document attributes when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themes[currentTheme].palette.primary.main);
    }
    
    // Save preference
    localStorage.setItem('preferred-theme', currentTheme);
  }, [currentTheme]);

  const switchTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('manual-theme-selection', 'true');
    }
  };

  const toggleTheme = () => {
    const themeOrder = ['standard', 'high-contrast-light', 'high-contrast-dark'];
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    switchTheme(themeOrder[nextIndex]);
  };

  const resetToSystemTheme = () => {
    localStorage.removeItem('manual-theme-selection');
    
    // Determine system theme
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const highContrast = window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches;
    
    if (highContrast) {
      setCurrentTheme(darkMode ? 'high-contrast-dark' : 'high-contrast-light');
    } else {
      setCurrentTheme('standard');
    }
  };

  const themeUtils = {
    currentTheme,
    availableThemes: Object.keys(themes),
    switchTheme,
    toggleTheme,
    resetToSystemTheme,
    isHighContrast: currentTheme.includes('high-contrast'),
    isDarkMode: currentTheme.includes('dark')
  };

  return (
    <ThemeContext.Provider value={themeUtils}>
      <MuiThemeProvider theme={themes[currentTheme]}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};