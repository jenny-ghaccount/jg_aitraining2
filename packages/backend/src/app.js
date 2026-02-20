const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Database = require('better-sqlite3');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Initialize in-memory SQLite database
const db = new Database(':memory:');

// Create enhanced tasks table
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL CHECK(length(title) <= 255),
    description TEXT DEFAULT '' CHECK(length(description) <= 1000),
    completed BOOLEAN DEFAULT FALSE,
    due_date TEXT, -- ISO 8601 format
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// Create legacy items table for backward compatibility
db.exec(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// Prepared statements for tasks
const insertTaskStmt = db.prepare(`
  INSERT INTO tasks (title, description, completed, due_date, sort_order) 
  VALUES (?, ?, ?, ?, ?)
`);

const selectAllTasksStmt = db.prepare(`
  SELECT 
    id,
    title,
    description,
    CASE WHEN completed = 1 THEN 1 ELSE 0 END as completed,
    due_date as dueDate,
    sort_order as sortOrder,
    created_at as createdAt,
    updated_at as updatedAt
  FROM tasks 
  ORDER BY 
    CASE WHEN due_date IS NULL THEN 1 ELSE 0 END,
    due_date ASC,
    created_at ASC
`);

const selectTaskByIdStmt = db.prepare(`
  SELECT 
    id,
    title,
    description,
    CASE WHEN completed = 1 THEN 1 ELSE 0 END as completed,
    due_date as dueDate,
    sort_order as sortOrder,
    created_at as createdAt,
    updated_at as updatedAt
  FROM tasks 
  WHERE id = ?
`);

const updateTaskStmt = db.prepare(`
  UPDATE tasks 
  SET title = ?, description = ?, completed = ?, due_date = ?, sort_order = ?, updated_at = CURRENT_TIMESTAMP 
  WHERE id = ?
`);

const updateTaskStatusStmt = db.prepare(`
  UPDATE tasks 
  SET completed = ?, updated_at = CURRENT_TIMESTAMP 
  WHERE id = ?
`);

const deleteTaskStmt = db.prepare('DELETE FROM tasks WHERE id = ?');

// Insert some initial data for legacy items
const initialItems = ['Item 1', 'Item 2', 'Item 3'];
const insertStmt = db.prepare('INSERT INTO items (name) VALUES (?)');

initialItems.forEach(item => {
  insertStmt.run(item);
});

console.log('In-memory database initialized with enhanced schema and sample data');

// Validation helpers
const validateTask = (taskData) => {
  const errors = [];
  
  // Validate title
  if (!taskData.title || typeof taskData.title !== 'string' || taskData.title.trim() === '') {
    errors.push('Task title is required and cannot be empty');
  }
  
  if (taskData.title && taskData.title.length > 255) {
    errors.push('Task title cannot exceed 255 characters');
  }
  
  // Validate description
  if (taskData.description && taskData.description.length > 1000) {
    errors.push('Task description cannot exceed 1000 characters');
  }
  
  // Validate due date format
  if (taskData.dueDate && taskData.dueDate !== null) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(taskData.dueDate)) {
      errors.push('Due date must be in YYYY-MM-DD format');
    } else {
      const date = new Date(taskData.dueDate);
      if (isNaN(date.getTime())) {
        errors.push('Invalid date format');
      }
    }
  }
  
  return errors;
};

const validateTaskId = (id) => {
  return id && !isNaN(parseInt(id));
};

// Task API Routes
app.get('/api/tasks', (req, res) => {
  try {
    const { status, sort } = req.query;
    let query = `
      SELECT 
        id,
        title,
        description,
        CASE WHEN completed = 1 THEN 1 ELSE 0 END as completed,
        due_date as dueDate,
        sort_order as sortOrder,
        created_at as createdAt,
        updated_at as updatedAt
      FROM tasks 
    `;
    
    const params = [];
    
    // Add status filter
    if (status === 'active') {
      query += ' WHERE completed = 0';
    } else if (status === 'completed') {
      query += ' WHERE completed = 1';
    }
    
    // Add sorting
    switch (sort) {
      case 'title':
        query += ' ORDER BY title ASC';
        break;
      case 'createdAt':
        query += ' ORDER BY created_at DESC';
        break;
      case 'sortOrder':
        query += ' ORDER BY sort_order ASC, created_at ASC';
        break;
      default:
        // Default: due date first, then creation date
        query += ` ORDER BY 
          CASE WHEN due_date IS NULL THEN 1 ELSE 0 END,
          due_date ASC,
          created_at ASC`;
    }
    
    const tasks = db.prepare(query).all(...params);
    
    // Convert integer completed values to booleans
    const processedTasks = tasks.map(task => ({
      ...task,
      completed: Boolean(task.completed)
    }));
    
    res.json(processedTasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.get('/api/tasks/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    if (!validateTaskId(id)) {
      return res.status(400).json({ error: 'Valid task ID is required' });
    }
    
    const task = selectTaskByIdStmt.get(id);
    
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    // Convert integer completed value to boolean
    const processedTask = {
      ...task,
      completed: Boolean(task.completed)
    };
    
    res.json(processedTask);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});

app.post('/api/tasks', (req, res) => {
  try {
    const { title, description = '', completed = false, dueDate = null, sortOrder = 0 } = req.body;
    
    const taskData = { title, description, dueDate };
    const validationErrors = validateTask(taskData);
    
    if (validationErrors.length > 0) {
      return res.status(400).json({ error: validationErrors.join(', ') });
    }
    
    const result = insertTaskStmt.run(
      title.trim(),
      description,
      completed ? 1 : 0, // Convert boolean to integer
      dueDate,
      sortOrder
    );
    
    const newTask = selectTaskByIdStmt.get(result.lastInsertRowid);
    // Convert integer completed value to boolean
    const processedTask = {
      ...newTask,
      completed: Boolean(newTask.completed)
    };
    res.status(201).json(processedTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

app.put('/api/tasks/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title, description = '', completed = false, dueDate = null, sortOrder = 0 } = req.body;
    
    if (!validateTaskId(id)) {
      return res.status(400).json({ error: 'Valid task ID is required' });
    }
    
    const existingTask = selectTaskByIdStmt.get(id);
    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    const taskData = { title, description, dueDate };
    const validationErrors = validateTask(taskData);
    
    if (validationErrors.length > 0) {
      return res.status(400).json({ error: validationErrors.join(', ') });
    }
    
    updateTaskStmt.run(
      title.trim(),
      description,
      completed ? 1 : 0, // Convert boolean to integer
      dueDate,
      sortOrder,
      id
    );
    
    const updatedTask = selectTaskByIdStmt.get(id);
    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update task' });
  }
});

app.patch('/api/tasks/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    
    if (!validateTaskId(id)) {
      return res.status(400).json({ error: 'Valid task ID is required' });
    }
    
    if (typeof completed !== 'boolean') {
      return res.status(400).json({ error: 'Completed status must be a boolean' });
    }
    
    const existingTask = selectTaskByIdStmt.get(id);
    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    updateTaskStatusStmt.run(completed ? 1 : 0, id); // Convert boolean to integer
    
    const updatedTask = selectTaskByIdStmt.get(id);
    // Convert integer completed value to boolean
    const processedTask = {
      ...updatedTask,
      completed: Boolean(updatedTask.completed)
    };
    res.json(processedTask);
  } catch (error) {
    console.error('Error updating task status:', error);
    res.status(500).json({ error: 'Failed to update task status' });
  }
});

app.delete('/api/tasks/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    if (!validateTaskId(id)) {
      return res.status(400).json({ error: 'Valid task ID is required' });
    }
    
    const existingTask = selectTaskByIdStmt.get(id);
    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    const result = deleteTaskStmt.run(id);
    
    if (result.changes > 0) {
      res.json({ message: 'Task deleted successfully', id: parseInt(id) });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// Legacy API Routes (for backward compatibility)
app.get('/api/items', (req, res) => {
  try {
    const items = db.prepare('SELECT * FROM items ORDER BY created_at DESC').all();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

app.post('/api/items', (req, res) => {
  try {
    const { name } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ error: 'Item name is required' });
    }

    const result = insertStmt.run(name);
    const id = result.lastInsertRowid;

    const newItem = db.prepare('SELECT * FROM items WHERE id = ?').get(id);
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Failed to create item' });
  }
});

app.delete('/api/items/:id', (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ error: 'Valid item ID is required' });
    }

    const existingItem = db.prepare('SELECT * FROM items WHERE id = ?').get(id);
    if (!existingItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const deleteStmt = db.prepare('DELETE FROM items WHERE id = ?');
    const result = deleteStmt.run(id);

    if (result.changes > 0) {
      res.json({ message: 'Item deleted successfully', id: parseInt(id) });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

module.exports = { 
  app, 
  db, 
  insertStmt,
  insertTaskStmt,
  selectTaskByIdStmt,
  updateTaskStmt,
  updateTaskStatusStmt,
  deleteTaskStmt
};