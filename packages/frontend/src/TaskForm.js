import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const TaskForm = ({ isOpen, onClose, onSubmit, task = null }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Task title is required';
    } else if (title.length > 255) {
      newErrors.title = 'Task title must be less than 255 characters';
    }
    
    if (description.length > 1000) {
      newErrors.description = 'Description must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const taskData = {
      title: title.trim(),
      description: description.trim(),
      dueDate: dueDate || null
    };
    
    onSubmit(taskData);
    
    // Reset form
    setTitle('');
    setDescription('');
    setDueDate('');
    setErrors({});
  };

  const handleClose = () => {
    setTitle(task?.title || '');
    setDescription(task?.description || '');
    setDueDate(task?.dueDate || '');
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="task-form-title"
    >
      <DialogTitle id="task-form-title">
        {task ? 'Edit Task' : 'Add New Task'}
        <IconButton
          aria-label="Close dialog"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            id="task-title"
            name="title"
            label="Task Title"
            fullWidth
            required
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            inputProps={{ maxLength: 255 }}
            error={!!errors.title}
            helperText={errors.title}
            margin="normal"
          />

          <TextField
            id="task-description"
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            inputProps={{ maxLength: 1000 }}
            error={!!errors.description}
            helperText={errors.description || `${description.length}/1000 characters`}
            margin="normal"
          />

          <TextField
            id="task-due-date"
            name="dueDate"
            label="Due Date"
            type="date"
            fullWidth
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: new Date().toISOString().split('T')[0] }}
            helperText="Leave empty if no specific due date is needed"
            margin="normal"
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={!title.trim()}
        >
          {task ? 'Update Task' : 'Add Task'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;