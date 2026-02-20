// Temporary mock for @mui/material/styles when running tests
export const createTheme = (config) => ({
  ...config,
  palette: config?.palette || {},
  typography: config?.typography || {},
  spacing: typeof config?.spacing === 'function' ? config.spacing : (value = 1) => value * 8,
  breakpoints: config?.breakpoints || {},
  components: config?.components || {},
  mixins: config?.mixins || {},
  shape: config?.shape || { borderRadius: 4 },
});

export const ThemeProvider = ({ children }) => children;
export const useTheme = () => ({
  palette: { mode: 'light' },
  spacing: (value = 1) => value * 8,
  breakpoints: {
    up: () => '@media (min-width: 600px)',
    down: () => '@media (max-width: 600px)',
  },
  shape: { borderRadius: 4 },
});

export const styled = () => () => 'div';
export const alpha = (color, opacity) => color;
export const darken = (color, amount) => color;
export const lighten = (color, amount) => color;