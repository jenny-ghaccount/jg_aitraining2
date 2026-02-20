import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  AppBar, 
  Toolbar, 
  IconButton,
  Fab,
  CircularProgress,
  Alert
} from '@mui/material';
import { 
  Add as AddIcon,
  Settings as SettingsIcon,
  Brightness4 as ThemeIcon
} from '@mui/icons-material';
import { ThemeProvider, useTheme } from './theme/ThemeProvider';
import TaskForm from './TaskForm';

// Main App Component (wrapped by ThemeProvider)
function AppContent() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [showSettings, setShowSettings] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Access theme utilities
  const { toggleTheme, currentTheme, isHighContrast } = useTheme();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/tasks');
      
      // Handle case where fetch returns undefined or null
      if (!response) {
        throw new Error('No response received from server');
      }
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const tasks = await response.json();
      setTasks(tasks || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks: ' + err.message);
      console.error('Error fetching tasks:', err);
      // Set empty array on error so app still works
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: taskData.title,
          description: taskData.description || '',
          dueDate: taskData.dueDate || null,
          completed: false
        }),
      });

      if (!response || !response.ok) {
        throw new Error('Failed to add task');
      }

      const newTask = await response.json();
      setTasks(prevTasks => [...prevTasks, newTask]);
      setShowTaskForm(false);
      setError(null);
    } catch (err) {
      setError('Error adding task: ' + err.message);
    }
  };

  const updateTask = async (taskId, taskData) => {
    try {
      // In a real app, this would be a PUT request to update the task
      const updatedTask = {
        ...tasks.find(t => t.id === taskId),
        title: taskData.title,
        description: taskData.description,
        dueDate: taskData.dueDate
      };
      
      setTasks(tasks.map(t => t.id === taskId ? updatedTask : t));
      setEditingTask(null);
      setShowTaskForm(false);
    } catch (err) {
      setError('Error updating task: ' + err.message);
    }
  };

  const toggleTaskComplete = async (taskId) => {
    try {
      const task = tasks.find(t => t.id === taskId);
      const updatedTask = { ...task, completed: !task.completed };
      
      // Update in state immediately for better UX
      setTasks(tasks.map(t => t.id === taskId ? updatedTask : t));
      
      // In a real app, this would be a PATCH request to update task status
      // For now, we'll keep the optimistic update
    } catch (err) {
      setError('Error updating task: ' + err.message);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (!response || !response.ok) {
        throw new Error('Failed to delete task');
      }

      setTasks(tasks.filter(task => task.id !== taskId));
      setError(null);
    } catch (err) {
      setError('Error deleting task: ' + err.message);
    }
  };

  const getFilteredTasks = () => {
    let filtered = tasks;
    
    switch (filter) {
      case 'active':
        filtered = tasks.filter(task => !task.completed);
        break;
      case 'completed':
        filtered = tasks.filter(task => task.completed);
        break;
      default:
        filtered = tasks;
    }
    
    // Sort by due date (earliest first), then by creation date
    return filtered.sort((a, b) => {
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      if (a.dueDate && !b.dueDate) return -1;
      if (!a.dueDate && b.dueDate) return 1;
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  };

  const getTaskStatus = (task) => {
    if (task.completed) return 'completed';
    if (!task.dueDate) return 'normal';
    
    const today = new Date();
    const dueDate = new Date(task.dueDate);
    const daysDiff = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysDiff < 0) return 'overdue';
    if (daysDiff <= 1) return 'due-soon';
    return 'normal';
  };

  const formatDueDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const today = new Date();
    const daysDiff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 0) return 'Due today';
    if (daysDiff === 1) return 'Due tomorrow';
    if (daysDiff === -1) return 'Due yesterday';
    if (daysDiff < 0) return `${Math.abs(daysDiff)} days overdue`;
    if (daysDiff > 0) return `Due in ${daysDiff} days`;
    
    return date.toLocaleDateString();
  };

  const filteredTasks = getFilteredTasks();

  return (
    <Container maxWidth="lg">
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setShowSettings(!showSettings)}
            aria-expanded={showSettings}
            aria-label="Open settings menu"
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Settings Menu */}
      {showSettings && (
        <Box sx={{ mb: 2, p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
          <Typography variant="h6" gutterBottom>
            Accessibility Themes
          </Typography>
          <Button
            onClick={toggleTheme}
            variant="outlined"
            sx={{ mr: 1 }}
          >
            Switch to {currentTheme === 'standard' ? 'high contrast' : 'standard'} theme
          </Button>
          <Typography variant="body2">
            Current theme: {currentTheme.replace('-', ' ')}
          </Typography>
        </Box>
      )}

      <main className="main-content">
        <div className="task-list-container">
          <div className="task-list-header">
            <h2>Your Tasks ({filteredTasks.length})</h2>
            <div className="task-filters">
              {['all', 'active', 'completed'].map(filterType => (
                <button
                  key={filterType}
                  className={`filter-btn ${filter === filterType ? 'active' : ''}`}
                  onClick={() => setFilter(filterType)}
                  aria-pressed={filter === filterType}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }} role="status" aria-label="Loading tasks">
              <CircularProgress />
              <Typography sx={{ ml: 2 }}>Loading tasks...</Typography>
            </Box>
          )}

          {error && (
            <Alert severity="error" sx={{ mb: 2 }} role="alert">
              {error}
            </Alert>
          )}

          {!loading && !error && (
            <>
              {filteredTasks.length > 0 ? (
                <ul className="task-list" role="list">
                  {filteredTasks.map((task) => {
                    const status = getTaskStatus(task);
                    return (
                      <li 
                        key={task.id} 
                        className={`task-card ${status}`}
                        role="listitem"
                      >
                        <div className="task-content">
                          <div className="task-header">
                            <h3 className={`task-title ${task.completed ? 'completed' : ''}`}>
                              {task.title}
                            </h3>
                          </div>
                          
                          {task.description && (
                            <p className="task-description">{task.description}</p>
                          )}
                          
                          <div className="task-meta">
                            <div className="task-due-date">
                              {formatDueDate(task.dueDate)}
                            </div>
                            
                            <div className="task-actions">
                              <button
                                className={`task-btn complete ${task.completed ? 'completed' : ''}`}
                                onClick={() => toggleTaskComplete(task.id)}
                                aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                              >
                                {task.completed ? '↶ Undo' : '✓ Complete'}
                              </button>
                              <button
                                className="task-btn edit"
                                onClick={() => {
                                  setEditingTask(task);
                                  setShowTaskForm(true);
                                }}
                                aria-label={`Edit task: ${task.title}`}
                              >
                                ✏️ Edit
                              </button>
                              <button
                                className="task-btn delete"
                                onClick={() => deleteTask(task.id)}
                                aria-label={`Delete task: ${task.title}`}
                              >
                                🗑 Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="empty-state">
                  <h3>No tasks found</h3>
                  <p>
                    {filter === 'all' 
                      ? 'Click the + button to add your first task!'
                      : `No ${filter} tasks. Try a different filter or add some tasks.`
                    }
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="Add new task"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => {
          setEditingTask(null);
          setShowTaskForm(true);
        }}
      >
        <AddIcon />
      </Fab>

      {/* Task Form Modal */}
      <TaskForm
        isOpen={showTaskForm}
        onClose={() => {
          setShowTaskForm(false);
          setEditingTask(null);
        }}
        onSubmit={(taskData) => {
          if (editingTask) {
            updateTask(editingTask.id, taskData);
          } else {
            addTask(taskData);
          }
        }}
        task={editingTask}
      />
    </Container>
  );
}

// Main App wrapper with theme provider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;