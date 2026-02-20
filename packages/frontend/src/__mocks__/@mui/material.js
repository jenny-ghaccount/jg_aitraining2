// Temporary mock for @mui/material when running tests
import React from 'react';

// Mock Material-UI components for testing
export const Container = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Box = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Typography = ({ children, ...props }) => <div {...props}>{children}</div>;
export const AppBar = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Toolbar = ({ children, ...props }) => <div {...props}>{children}</div>;
export const IconButton = ({ children, ...props }) => <button {...props}>{children}</button>;
export const Fab = ({ children, ...props }) => <button {...props}>{children}</button>;
export const CircularProgress = (props) => <div {...props}>Loading...</div>;
export const Alert = ({ children, ...props }) => <div {...props}>{children}</div>;
export const Button = ({ children, ...props }) => <button {...props}>{children}</button>;
export const TextField = (props) => <input {...props} />;
export const Dialog = ({ children, open, ...props }) => open ? <div {...props}>{children}</div> : null;
export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;
export const DialogActions = ({ children, ...props }) => <div {...props}>{children}</div>;
export const FormControl = ({ children, ...props }) => <div {...props}>{children}</div>;
export const InputLabel = ({ children, ...props }) => <label {...props}>{children}</label>;
export const Select = ({ children, ...props }) => <select {...props}>{children}</select>;
export const MenuItem = ({ children, ...props }) => <option {...props}>{children}</option>;
export const Chip = ({ label, ...props }) => <span {...props}>{label}</span>;
export const List = ({ children, ...props }) => <ul {...props}>{children}</ul>;
export const ListItem = ({ children, ...props }) => <li {...props}>{children}</li>;
export const ListItemText = ({ primary, secondary, ...props }) => 
  <div {...props}>
    <div>{primary}</div>
    {secondary && <div>{secondary}</div>}
  </div>;
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