# Coding Guidelines

This document outlines the coding style, quality principles, and best practices for the project. These guidelines ensure consistent, maintainable, and high-quality code across both frontend (React) and backend (Node.js) components.

## Table of Contents

1. [General Formatting Rules](#general-formatting-rules)
2. [Import Organization](#import-organization)
3. [Linter Configuration](#linter-configuration)
4. [Naming Conventions](#naming-conventions)
5. [Best Practices](#best-practices)
6. [React-Specific Guidelines](#react-specific-guidelines)
7. [Node.js Backend Guidelines](#nodejs-backend-guidelines)
8. [File Organization](#file-organization)

## General Formatting Rules

### Indentation and Spacing
- Use **2 spaces** for indentation (no tabs)
- Maximum line length: **100 characters**
- Use trailing commas in multi-line objects and arrays
- Add blank lines to separate logical sections of code
- No trailing whitespace at end of lines

```javascript
// ✅ Good
const userConfig = {
  name: 'John Doe',
  email: 'john@example.com',
  preferences: {
    theme: 'dark',
    notifications: true,
  },
};

// ❌ Avoid
const userConfig={name:'John Doe',email:'john@example.com',preferences:{theme:'dark',notifications:true}};
```

### Semicolons and Quotes
- Always use semicolons to terminate statements
- Use **single quotes** for strings (unless string contains single quotes)
- Use template literals for string interpolation

```javascript
// ✅ Good
const message = 'Hello world';
const greeting = `Welcome, ${user.name}!`;

// ❌ Avoid
const message = "Hello world"
const greeting = 'Welcome, ' + user.name + '!';
```

## Import Organization

Organize imports in the following order with blank lines between groups:

1. **Node.js built-in modules** (for backend)
2. **External libraries** (React, express, etc.)
3. **Internal utilities and components**
4. **Relative imports** (same directory or parent)

```javascript
// ✅ Frontend Example
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { validateForm, formatDate } from '../utils/helpers';
import Header from '../components/Header';

import './App.css';

// ✅ Backend Example
import path from 'path';
import fs from 'fs/promises';

import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

import { validateInput, sanitizeData } from '../utils/validation';
import { logger } from '../services/logging';

import config from './config.json';
```

### Named vs Default Imports
- Use **named imports** when importing specific functions/components
- Use **default imports** for main module exports
- Be consistent with import naming throughout the project

```javascript
// ✅ Good
import React, { useState } from 'react';
import { validateEmail, formatDate } from '../utils/helpers';
import TaskCard from './TaskCard';

// ❌ Avoid inconsistent naming
import React, { useState as state } from 'react';
import { validateEmail as validate } from '../utils/helpers';
```

## Linter Configuration

### ESLint Setup
The project uses ESLint with the following key rules:

```json
{
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-unused-vars": "error",
    "no-console": "warn",
    "prefer-const": "error",
    "no-var": "error"
  }
}
```

### Prettier Integration
- Use **Prettier** for automatic code formatting
- Configure editor to format on save
- Run `npm run format` before committing code

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### Pre-commit Hooks
- **Husky** and **lint-staged** ensure code quality
- All staged files are linted and formatted before commit
- Tests must pass before code can be committed

## Naming Conventions

### Variables and Functions
- Use **camelCase** for variables and functions
- Use **descriptive names** that clearly indicate purpose
- Avoid abbreviations unless they are widely understood

```javascript
// ✅ Good
const userId = user.id;
const isAuthenticated = checkAuthStatus();
const calculateTotalPrice = (items) => { /* ... */ };

// ❌ Avoid
const uid = user.id;
const auth = checkAuthStatus();
const calc = (items) => { /* ... */ };
```

### Constants and Enums
- Use **SCREAMING_SNAKE_CASE** for constants
- Group related constants in objects or enums

```javascript
// ✅ Good
const API_ENDPOINTS = {
  USERS: '/api/users',
  TASKS: '/api/tasks',
  AUTH: '/api/auth',
};

const HTTP_STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
```

### React Components
- Use **PascalCase** for component names
- Use **camelCase** for props and state variables
- Use descriptive component names that indicate their purpose

```javascript
// ✅ Good
const TaskCard = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  // ...
};

// ❌ Avoid
const task = ({ t, edit, del }) => {
  const [editing, setEdit] = useState(false);
  // ...
};
```

## Best Practices

### DRY Principle (Don't Repeat Yourself)
- Extract common logic into utility functions
- Create reusable components for repeated UI patterns
- Use constants for repeated values

```javascript
// ✅ Good - Extract common validation
const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === '') {
    throw new Error(`${fieldName} is required`);
  }
};

const validateUser = (userData) => {
  validateRequired(userData.name, 'Name');
  validateRequired(userData.email, 'Email');
};

// ❌ Avoid - Repeated validation logic
const validateUser = (userData) => {
  if (!userData.name || userData.name.trim() === '') {
    throw new Error('Name is required');
  }
  if (!userData.email || userData.email.trim() === '') {
    throw new Error('Email is required');
  }
};
```

### SOLID Principles
- **Single Responsibility**: Each function/component has one clear purpose
- **Open/Closed**: Extend behavior through props/configuration, not modification
- **Dependency Inversion**: Depend on abstractions, not concrete implementations

```javascript
// ✅ Good - Single Responsibility
const TaskList = ({ tasks, onTaskUpdate }) => {
  return tasks.map(task => (
    <TaskCard key={task.id} task={task} onUpdate={onTaskUpdate} />
  ));
};

const TaskCard = ({ task, onUpdate }) => {
  // Component focused only on displaying a single task
};
```

### Error Handling
- Always handle errors gracefully
- Use try-catch for async operations
- Provide meaningful error messages to users

```javascript
// ✅ Good
const fetchTasks = async () => {
  try {
    setLoading(true);
    const response = await api.getTasks();
    setTasks(response.data);
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    setError('Unable to load tasks. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

### Performance Considerations
- Use `React.memo()` for components that receive stable props
- Implement proper key props for list items
- Avoid inline function definitions in render methods
- Use `useMemo()` and `useCallback()` for expensive computations

```javascript
// ✅ Good
const TaskCard = React.memo(({ task, onUpdate }) => {
  const handleUpdate = useCallback((updates) => {
    onUpdate(task.id, updates);
  }, [task.id, onUpdate]);

  return <div onClick={handleUpdate}>/* ... */</div>;
});
```

## React-Specific Guidelines

### Functional Components and Hooks
- Prefer **functional components** over class components
- Use **custom hooks** for shared stateful logic
- Follow the Rules of Hooks (only call at top level)

```javascript
// ✅ Good - Custom hook for form management
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return { values, errors, handleChange, setErrors };
};

// Usage in component
const TaskForm = () => {
  const { values, errors, handleChange } = useForm({
    title: '',
    description: '',
    dueDate: '',
  });
  // ...
};
```

### State Management
- Keep state as close to where it's used as possible
- Use state lifting only when necessary
- Consider React Context for deeply nested prop passing

```javascript
// ✅ Good - Local state management
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true;
    });
  }, [tasks, filter]);

  return (
    <div>
      <FilterButtons filter={filter} onFilterChange={setFilter} />
      <TaskCards tasks={filteredTasks} />
    </div>
  );
};
```

### Event Handling
- Use descriptive event handler names
- Pass minimal data to event handlers
- Avoid anonymous functions in JSX when possible

```javascript
// ✅ Good
const TaskCard = ({ task, onStatusChange, onEdit, onDelete }) => {
  const handleStatusToggle = () => {
    onStatusChange(task.id, !task.completed);
  };

  const handleEditClick = () => {
    onEdit(task.id);
  };

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleStatusToggle} />
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};
```

## Node.js Backend Guidelines

### API Design
- Use **RESTful conventions** for URL structure
- Return consistent response formats
- Include proper HTTP status codes
- Implement proper error handling middleware

```javascript
// ✅ Good - RESTful API structure
app.get('/api/tasks', getAllTasks);           // GET all tasks
app.get('/api/tasks/:id', getTaskById);       // GET specific task
app.post('/api/tasks', createTask);           // CREATE new task
app.put('/api/tasks/:id', updateTask);        // UPDATE existing task
app.delete('/api/tasks/:id', deleteTask);     // DELETE task

// Consistent response format
const sendResponse = (res, status, data, message = null) => {
  res.status(status).json({
    success: status < 400,
    data,
    message,
    timestamp: new Date().toISOString(),
  });
};
```

### Database Interactions
- Use **prepared statements** to prevent SQL injection
- Implement proper error handling for database operations
- Use transactions for related operations

```javascript
// ✅ Good - Safe database queries
const createTask = async (taskData) => {
  const query = `
    INSERT INTO tasks (title, description, due_date, status, created_at)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  try {
    const result = await db.run(query, [
      taskData.title,
      taskData.description,
      taskData.dueDate,
      taskData.status || 'pending',
      new Date().toISOString(),
    ]);
    
    return { id: result.lastID, ...taskData };
  } catch (error) {
    logger.error('Failed to create task:', error);
    throw new Error('Database operation failed');
  }
};
```

### Middleware and Validation
- Validate all incoming data
- Use middleware for common functionality
- Implement proper authentication and authorization

```javascript
// ✅ Good - Input validation middleware
const validateTask = (req, res, next) => {
  const { title, description, dueDate } = req.body;
  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push('Title is required');
  }

  if (title && title.length > 200) {
    errors.push('Title must be less than 200 characters');
  }

  if (dueDate && !isValidDate(dueDate)) {
    errors.push('Due date must be a valid date');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  next();
};
```

## File Organization

### Directory Structure
```
src/
├── components/           # Reusable UI components
│   ├── Common/          # Generic components (Button, Modal, etc.)
│   └── Task/            # Task-specific components
├── hooks/               # Custom React hooks
├── services/            # API calls and external service integrations
├── utils/               # Pure utility functions
├── contexts/            # React Context providers
├── constants/           # Application constants
└── __tests__/           # Test files
```

### File Naming
- Use **PascalCase** for component files: `TaskCard.js`, `UserProfile.js`
- Use **camelCase** for utility files: `dateHelpers.js`, `apiClient.js`
- Use **kebab-case** for CSS files: `task-card.css`, `user-profile.css`

### Export Patterns
- Use **default exports** for main component/function per file
- Use **named exports** for utilities and multiple exports
- Create index.js files for clean imports from directories

```javascript
// components/Task/index.js
export { default as TaskCard } from './TaskCard';
export { default as TaskList } from './TaskList';
export { default as TaskForm } from './TaskForm';

// Usage
import { TaskCard, TaskList } from '../components/Task';
```

## Code Review Checklist

Before submitting code for review, ensure:

- [ ] All linting rules pass without warnings
- [ ] Code follows naming conventions
- [ ] No unused variables or imports
- [ ] Proper error handling is implemented
- [ ] Functions have single responsibility
- [ ] Tests are included for new functionality
- [ ] Comments explain complex business logic
- [ ] No hardcoded values (use constants)
- [ ] Accessibility attributes are included (React)
- [ ] Security best practices are followed

## Tools and IDE Configuration

### Recommended VS Code Extensions
- **ESLint**: Real-time linting feedback
- **Prettier**: Automatic code formatting
- **Auto Rename Tag**: Synchronized HTML/JSX tag editing
- **Bracket Pair Colorizer**: Easier bracket matching
- **ES7+ React/Redux/React-Native snippets**: Code snippets

### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single"
}
```

---

Following these coding guidelines ensures consistent, maintainable, and high-quality code that aligns with modern JavaScript and React best practices. Regular code reviews and automated tooling help enforce these standards across the development team.