// Real task utility functions that match the tests

export const validateTask = (task) => {
  const errors = [];
  
  if (!task || typeof task !== 'object') {
    errors.push('Task must be an object');
    return { isValid: false, errors };
  }
  
  if (!task.title || typeof task.title !== 'string' || task.title.trim() === '') {
    errors.push('Title is required');
  }
  
  if (task.title && task.title.length > 200) {
    errors.push('Title must be less than 200 characters');
  }
  
  return { isValid: errors.length === 0, errors };
};

export const sanitizeTaskInput = (input) => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  // Remove script tags and their content completely
  let cleaned = input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove remaining HTML tags
  cleaned = cleaned.replace(/<[^>]*>/g, '');
  // Trim whitespace
  return cleaned.trim();
};

export const formatTaskDate = (date) => {
  if (!date) return '';
  
  try {
    const taskDate = new Date(date);
    if (isNaN(taskDate.getTime())) {
      return 'Invalid Date';
    }
    return taskDate.toLocaleDateString();
  } catch (error) {
    return 'Invalid Date';
  }
};

export const getTaskPriority = (task) => {
  const priority = task?.priority;
  const validPriorities = ['low', 'medium', 'high'];
  
  if (validPriorities.includes(priority)) {
    return priority;
  }
  
  return 'medium'; // default priority
};