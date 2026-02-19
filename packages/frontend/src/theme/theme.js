import { createTheme } from '@mui/material/styles';

/**
 * Material Design 3 Theme Configuration
 * Following UI Guidelines - Blue Color Scheme
 * Based on Material Design principles with accessibility compliance
 */

// Color Palette (from UI Guidelines)
const colors = {
  primary: {
    main: '#1976D2',      // Material Blue 700
    light: '#42A5F5',     // Material Blue 400  
    dark: '#0D47A1',      // Material Blue 900
    variant: '#1565C0'    // Material Blue 800
  },
  secondary: {
    main: '#03DAC6',      // Material Teal A400
    variant: '#018786'    // Material Teal 700
  },
  surface: {
    background: '#FAFAFA', // Material Grey 50
    main: '#FFFFFF',       // White
    variant: '#F5F5F5'     // Material Grey 100
  },
  text: {
    primary: '#212121',    // Material Grey 900
    secondary: '#757575'   // Material Grey 600
  },
  error: {
    main: '#D32F2F',      // Material Red 700
    light: '#F44336'      // Material Red 500
  },
  warning: {
    main: '#F57C00',      // Material Orange 700
    light: '#FF9800'      // Material Orange 500
  },
  success: {
    main: '#388E3C',      // Material Green 700
    light: '#4CAF50'      // Material Green 500
  }
};

// Typography Configuration
const typography = {
  fontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Arial',
    'sans-serif'
  ].join(','),
  
  h1: {
    fontFamily: 'Roboto',
    fontWeight: 500, // Medium
    fontSize: '2rem',
    lineHeight: 1.5,
    letterSpacing: '-0.01562em'
  },
  
  h2: {
    fontFamily: 'Roboto', 
    fontWeight: 500,
    fontSize: '1.75rem',
    lineHeight: 1.5,
    letterSpacing: '-0.00833em'
  },
  
  h3: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: 1.5,
    letterSpacing: '0em'
  },
  
  h4: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.5,
    letterSpacing: '0.00735em'
  },
  
  h5: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0em'
  },
  
  h6: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: '0.0075em'
  },
  
  body1: {
    fontFamily: 'Roboto',
    fontWeight: 400, // Regular
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em'
  },
  
  body2: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: '0.01071em'
  },
  
  button: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase'
  },
  
  caption: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '0.03333em'
  }
};

// Base theme configuration
const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: '#ffffff'
    },
    secondary: {
      main: colors.secondary.main,
      dark: colors.secondary.variant,
      contrastText: '#000000'
    },
    background: {
      default: colors.surface.background,
      paper: colors.surface.main
    },
    surface: {
      main: colors.surface.main,
      variant: colors.surface.variant
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary
    },
    error: {
      main: colors.error.main,
      light: colors.error.light
    },
    warning: {
      main: colors.warning.main,
      light: colors.warning.light
    },
    success: {
      main: colors.success.main,
      light: colors.success.light
    },
    divider: 'rgba(0, 0, 0, 0.12)'
  },
  
  typography,
  
  // Responsive breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  
  // Spacing (8px base)
  spacing: 8,
  
  // Shape
  shape: {
    borderRadius: 8
  }
});

// Material Design 3 Component Customizations
export const lightTheme = createTheme(baseTheme, {
  components: {
    // Card Components
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
          borderRadius: baseTheme.shape.borderRadius,
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15), 0px 1px 4px rgba(0, 0, 0, 0.3)'
          }
        }
      }
    },
    
    // Button Components
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: baseTheme.shape.borderRadius,
          textTransform: 'none',
          fontWeight: 500,
          minHeight: 44, // Accessibility: minimum touch target
          padding: '8px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
          }
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 2px 8px rgba(25, 118, 210, 0.3)'
          }
        }
      }
    },
    
    // Floating Action Button
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: '0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)',
          '&:hover': {
            boxShadow: '0px 5px 18px rgba(0, 0, 0, 0.18), 0px 12px 15px rgba(0, 0, 0, 0.20)'
          }
        }
      }
    },
    
    // Text Field Components
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: baseTheme.shape.borderRadius,
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)'
            },
            '&:hover fieldset': {
              borderColor: colors.primary.main
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary.main,
              borderWidth: 2
            }
          }
        }
      }
    },
    
    // Checkbox Components
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.text.secondary,
          minHeight: 44, // Accessibility
          minWidth: 44,
          '&.Mui-checked': {
            color: colors.primary.main
          }
        }
      }
    },
    
    // Chip Components  
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          height: 32,
          fontSize: '0.875rem',
          fontWeight: 500
        },
        filled: {
          backgroundColor: colors.surface.variant,
          color: colors.text.primary,
          '&.MuiChip-colorPrimary': {
            backgroundColor: colors.primary.main,
            color: '#ffffff'
          }
        }
      }
    },
    
    // App Bar
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.12)',
          backgroundColor: colors.surface.main,
          color: colors.text.primary
        }
      }
    },
    
    // List Components
    MuiListItem: {
      styleOverrides: {
        root: {
          minHeight: 48, // Material Design minimum
          paddingLeft: baseTheme.spacing(2),
          paddingRight: baseTheme.spacing(2),
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.04)'
          }
        }
      }
    },
    
    // Dialog Components
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: baseTheme.shape.borderRadius * 2,
          boxShadow: '0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12)'
        }
      }
    }
  }
});

// High Contrast Dark Theme
export const highContrastDarkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90CAF9',      // Lighter blue for dark mode
      light: '#BBDEFB',
      dark: '#1976D2',
      contrastText: '#000000'
    },
    secondary: {
      main: '#80CBC4',
      contrastText: '#000000'
    },
    background: {
      default: '#000000',
      paper: '#121212'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#AAAAAA'
    },
    error: {
      main: '#F44336'
    },
    warning: {
      main: '#FF9800'
    },
    success: {
      main: '#4CAF50'
    }
  }
});

// High Contrast Light Theme
export const highContrastLightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#0D47A1',      // Darker blue for high contrast
      light: '#1976D2',
      dark: '#002171',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#00695C',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#000000',
      secondary: '#424242'
    },
    error: {
      main: '#C62828'
    },
    warning: {
      main: '#E65100'
    },
    success: {
      main: '#2E7D32'
    }
  }
});

// Theme variants
export const themes = {
  standard: lightTheme,
  'high-contrast-dark': highContrastDarkTheme,
  'high-contrast-light': highContrastLightTheme
};

// Default export
export default lightTheme;