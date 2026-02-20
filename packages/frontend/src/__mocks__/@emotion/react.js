// Temporary mock for @emotion/react when running tests
import React from 'react';

export const ThemeProvider = ({ children }) => children;
export const css = () => ({});
export const jsx = (component, props, ...children) => React.createElement(component, props, ...children);
export const Global = () => null;
export const keyframes = () => ({});
export const ClassNames = ({ children }) => children({});
export const CacheProvider = ({ children }) => children;