// Temporary mock for @mui/system when running tests
import React from 'react';

export const styled = (component) => (styles) => {
  return React.forwardRef((props, ref) => {
    const Component = typeof component === 'string' ? component : component;
    return React.createElement(Component, { ...props, ref });
  });
};

export const Box = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Container = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Grid = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Stack = ({ children, ...props }) => <div {...props}>{children}</div>;