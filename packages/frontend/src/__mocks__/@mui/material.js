// Enhanced mock for @mui/material that properly handles accessibility attributes
import React from 'react';

// Mock Material-UI components for testing with proper roles and prop handling
export const Container = ({ children, component, maxWidth, ...props }) => {
  const role = component === 'main' ? 'main' : props.role;
  // Filter out Material-UI specific props that shouldn't be passed to DOM
  const { sx, ...domProps } = props;
  return <div {...domProps} role={role}>{children}</div>;
};
export const Box = ({ children, sx, ...props }) => <div {...props}>{children}</div>;
export const Typography = ({ children, component, variant, sx, ...props }) => {
  const Tag = component || 'div';
  return <Tag {...props}>{children}</Tag>;
};
export const AppBar = ({ children, ...props }) => <div {...props} role="banner">{children}</div>;
export const Toolbar = ({ children, ...props }) => <div {...props}>{children}</div>;
export const IconButton = ({ children, ...props }) => <button {...props}>{children}</button>;
export const Fab = ({ children, ...props }) => <button {...props}>{children}</button>;
export const CircularProgress = (props) => <div {...props}>Loading...</div>;
export const Alert = ({ children, ...props }) => <div {...props} role="alert">{children}</div>;
export const Button = ({ children, ...props }) => <button {...props}>{children}</button>;

// Enhanced TextField mock with proper label handling
export const TextField = ({ label, id, name, error, helperText, ...props }) => (
  <div>
    {label && <label htmlFor={id || name}>{label}</label>}
    <input id={id || name} name={name} {...props} />
    {error && helperText && <div role="alert">{helperText}</div>}
  </div>
);

// Enhanced Dialog mock with proper accessibility
export const Dialog = ({ children, open, ...props }) => 
  open ? <div {...props} role="dialog">{children}</div> : null;

export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;
export const DialogActions = ({ children, ...props }) => <div {...props}>{children}</div>;
export const FormControl = ({ children, ...props }) => <div {...props}>{children}</div>;
export const InputLabel = ({ children, ...props }) => <label {...props}>{children}</label>;
export const Select = ({ children, ...props }) => <select {...props}>{children}</select>;
export const MenuItem = ({ children, ...props }) => <option {...props}>{children}</option>;
export const Chip = ({ label, ...props }) => <span {...props}>{label}</span>;
export const List = ({ children, ...props }) => <ul {...props}>{children}</ul>;

// Enhanced ListItem with proper accessibility
export const ListItem = ({ children, ...props }) => <li {...props}>{children}</li>;
export const ListItemText = ({ primary, secondary, ...props }) => 
  <div {...props}>
    <div>{primary}</div>
    {secondary && <div>{secondary}</div>}
  </div>;
export const ListItemSecondaryAction = ({ children, ...props }) => <div {...props}>{children}</div>;

export const Card = ({ children, ...props }) => <div {...props}>{children}</div>;
export const CardContent = ({ children, ...props }) => <div {...props}>{children}</div>;
export const CardActions = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Checkbox = (props) => <input type="checkbox" {...props} />;
export const Switch = (props) => <input type="checkbox" {...props} />;
export const Slider = (props) => <input type="range" {...props} />;
export const Snackbar = ({ children, open, ...props }) => open ? <div {...props}>{children}</div> : null;
export const Menu = ({ children, open, ...props }) => open ? <div {...props}>{children}</div> : null;
export const Popover = ({ children, open, ...props }) => open ? <div {...props}>{children}</div> : null;
export const Tooltip = ({ children, title, ...props }) => <div title={title} {...props}>{children}</div>;
export const Grid = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Paper = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Divider = (props) => <hr {...props} />;
export const LinearProgress = (props) => <div {...props}>Progress...</div>;
export const CssBaseline = () => null;
export const GlobalStyles = () => null;