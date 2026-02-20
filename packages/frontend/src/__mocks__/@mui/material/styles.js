// Temporary mock for @mui/material/styles when running tests
export const createTheme = (config) => ({
  ...config,
  palette: config?.palette || {},
  typography: config?.typography || {},
  spacing: config?.spacing || 8,
  breakpoints: config?.breakpoints || {},
  components: config?.components || {},
  mixins: config?.mixins || {},
});

export const ThemeProvider = ({ children }) => children;
export const useTheme = () => ({
  palette: { mode: 'light' },
  spacing: (value) => value * 8,
  breakpoints: {
    up: () => '@media (min-width: 600px)',
    down: () => '@media (max-width: 600px)',
  }
});

export const styled = () => () => 'div';
export const alpha = (color, opacity) => color;
export const darken = (color, amount) => color;
export const lighten = (color, amount) => color;