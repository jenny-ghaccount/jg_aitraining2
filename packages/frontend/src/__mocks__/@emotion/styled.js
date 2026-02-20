// Temporary mock for @emotion/styled when running tests
import React from 'react';

const styled = (component) => (template, ...args) => {
  return React.forwardRef((props, ref) => {
    const Component = typeof component === 'string' ? component : component;
    return React.createElement(Component, { ...props, ref });
  });
};

export default styled;