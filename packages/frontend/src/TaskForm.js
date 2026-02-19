import React, { useState } from 'react';
import './TaskForm.css';

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
    <div className="modal-overlay" onClick={handleClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="task-form-title"
        aria-modal="true"
      >
        <div className="modal-header">
          <h2 id="task-form-title">
            {task ? 'Edit Task' : 'Add New Task'}
          </h2>
          <button 
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Close dialog"
            type="button"
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label htmlFor="task-title" className="form-label">
              Task Title *
            </label>
            <input
              id="task-title"
              type="text"
              className={`form-input ${errors.title ? 'error' : ''}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              maxLength={255}
              required
              autoFocus
            />
            {errors.title && (
              <span className="error-text" role="alert">
                {errors.title}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="task-description" className="form-label">
              Description
            </label>
            <textarea
              id="task-description"
              className={`form-textarea ${errors.description ? 'error' : ''}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description (optional)"
              maxLength={1000}
              rows={3}
            />
            {errors.description && (
              <span className="error-text" role="alert">
                {errors.description}
              </span>
            )}
            <small className="character-count">
              {description.length}/1000 characters
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="task-due-date" className="form-label">
              Due Date
            </label>
            <input
              id="task-due-date"
              type="date"
              className="form-input"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
            <small className="form-help">
              Leave empty if no specific due date is needed
            </small>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={!title.trim()}
            >
              {task ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;