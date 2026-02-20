// Temporary mock for @mui/material/styles when running tests
export const createTheme = (config) => {
  // Handle spacing - if it's a number, convert to function; if function, use as is; otherwise default function
  let spacingFunction;
  if (typeof config?.spacing === 'function') {
    spacingFunction = config.spacing;
  } else if (typeof config?.spacing === 'number') {
    const spacingUnit = config.spacing;
    spacingFunction = (value = 1) => value * spacingUnit;
  } else {
    spacingFunction = (value = 1) => value * 8;
  }

  return {
    ...config,
    palette: config?.palette || {},
    typography: config?.typography || {},
    spacing: spacingFunction,
    breakpoints: config?.breakpoints || {},
    components: config?.components || {},
    mixins: config?.mixins || {},
    shape: config?.shape || { borderRadius: 4 },
  };
};

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