# Testing Guidelines

## 1. Overview

This document outlines the testing strategy and guidelines for the Todo Application. Our testing approach ensures code quality, reliability, and maintainability through comprehensive test coverage at multiple levels.

## 2. Testing Philosophy

### 2.1 Core Principles
- **Test-Driven Development (TDD)**: Write tests before implementing new features
- **Comprehensive Coverage**: Aim for >80% code coverage across all layers
- **Maintainable Tests**: Write clear, readable, and maintainable test code
- **Test Pyramid**: Focus on unit tests, supported by integration and E2E tests
- **Continuous Testing**: Run tests automatically on every code change

### 2.2 Testing Strategy
```
    /\
   /  \     E2E Tests (Few)
  /____\    - Critical user journeys
 /      \   - Full app functionality
/__________\ Integration Tests (Some)
            - API endpoints
            - Component integration
            Unit Tests (Many)
            - Individual functions
            - Component behavior
            - Business logic
```

## 3. Unit Testing

### 3.1 Scope and Purpose
Unit tests verify individual components, functions, and modules in isolation.

### 3.2 Frontend Unit Testing (React)

#### 3.2.1 Component Testing
```javascript
// Example: TaskCard.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskCard from '../TaskCard';

describe('TaskCard', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    description: 'Test description',
    completed: false,
    dueDate: '2026-03-01',
    createdAt: '2026-02-19T10:00:00Z'
  };

  test('renders task information correctly', () => {
    render(<TaskCard task={mockTask} />);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  test('calls onComplete when complete button clicked', () => {
    const onComplete = jest.fn();
    render(<TaskCard task={mockTask} onComplete={onComplete} />);
    
    fireEvent.click(screen.getByText('✓ Complete'));
    expect(onComplete).toHaveBeenCalledWith(1);
  });

  test('applies overdue styling for past due date', () => {
    const overdueTask = { ...mockTask, dueDate: '2026-02-01' };
    render(<TaskCard task={overdueTask} />);
    
    expect(screen.getByTestId('task-card')).toHaveClass('overdue');
  });
});
```

#### 3.2.2 Hook Testing
```javascript
// Example: useTaskFilter.test.js
import { renderHook, act } from '@testing-library/react';
import useTaskFilter from '../hooks/useTaskFilter';

describe('useTaskFilter', () => {
  const mockTasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true }
  ];

  test('filters tasks by status correctly', () => {
    const { result } = renderHook(() => useTaskFilter(mockTasks));
    
    act(() => {
      result.current.setFilter('completed');
    });
    
    expect(result.current.filteredTasks).toHaveLength(1);
    expect(result.current.filteredTasks[0].completed).toBe(true);
  });
});
```

### 3.3 Backend Unit Testing (Node.js/Express)

#### 3.3.1 API Route Testing
```javascript
// Example: items.test.js
const request = require('supertest');
const { app } = require('../src/app');

describe('Items API', () => {
  beforeEach(() => {
    // Reset database state
  });

  describe('GET /api/items', () => {
    test('returns all items', async () => {
      const response = await request(app)
        .get('/api/items')
        .expect(200);
      
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    test('returns items in correct format', async () => {
      const response = await request(app)
        .get('/api/items')
        .expect(200);
      
      response.body.forEach(item => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('created_at');
      });
    });
  });

  describe('POST /api/items', () => {
    test('creates new item successfully', async () => {
      const newItem = { name: 'Test Task' };
      
      const response = await request(app)
        .post('/api/items')
        .send(newItem)
        .expect(201);
      
      expect(response.body.name).toBe('Test Task');
      expect(response.body.id).toBeDefined();
    });

    test('validates required fields', async () => {
      const response = await request(app)
        .post('/api/items')
        .send({})
        .expect(400);
      
      expect(response.body.error).toContain('name is required');
    });
  });
});
```

#### 3.3.2 Utility Function Testing
```javascript
// Example: dateUtils.test.js
const { formatDueDate, isOverdue } = require('../src/utils/dateUtils');

describe('Date Utilities', () => {
  describe('formatDueDate', () => {
    test('formats due today correctly', () => {
      const today = new Date().toISOString();
      expect(formatDueDate(today)).toBe('Due today');
    });

    test('formats future dates correctly', () => {
      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      expect(formatDueDate(tomorrow)).toBe('Due tomorrow');
    });
  });

  describe('isOverdue', () => {
    test('returns true for past dates', () => {
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      expect(isOverdue(yesterday)).toBe(true);
    });

    test('returns false for future dates', () => {
      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      expect(isOverdue(tomorrow)).toBe(false);
    });
  });
});
```

## 4. Integration Testing

### 4.1 Scope and Purpose
Integration tests verify that different parts of the system work together correctly.

### 4.2 Frontend Integration Testing
```javascript
// Example: App.integration.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from '../App';

const server = setupServer(
  rest.get('/api/items', (req, res, ctx) => {
    return res(ctx.json([
      { id: 1, name: 'Integration Test Task' }
    ]));
  }),
  rest.post('/api/items', (req, res, ctx) => {
    return res(ctx.json({ id: 2, name: req.body.name }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App Integration', () => {
  test('loads and displays tasks from API', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Integration Test Task')).toBeInTheDocument();
    });
  });

  test('creates new task via FAB and form', async () => {
    render(<App />);
    
    // Click FAB to open form
    fireEvent.click(screen.getByLabelText('Add new task'));
    
    // Fill out form
    fireEvent.change(screen.getByLabelText('Task Title'), {
      target: { value: 'New Task' }
    });
    
    // Submit form
    fireEvent.click(screen.getByText('Add Task'));
    
    await waitFor(() => {
      expect(screen.getByText('New Task')).toBeInTheDocument();
    });
  });
});
```

### 4.3 Backend Integration Testing
```javascript
// Example: api.integration.test.js
const request = require('supertest');
const { app, db } = require('../src/app');

describe('API Integration Tests', () => {
  beforeEach(() => {
    // Reset database to known state
    db.exec('DELETE FROM items');
    db.prepare('INSERT INTO items (name) VALUES (?)').run('Test Item');
  });

  test('complete CRUD operations work together', async () => {
    // Create
    const createResponse = await request(app)
      .post('/api/items')
      .send({ name: 'CRUD Test Task' })
      .expect(201);
    
    const itemId = createResponse.body.id;
    
    // Read
    const readResponse = await request(app)
      .get('/api/items')
      .expect(200);
    
    expect(readResponse.body.find(item => item.id === itemId)).toBeDefined();
    
    // Update (if implemented)
    // const updateResponse = await request(app)
    //   .put(`/api/items/${itemId}`)
    //   .send({ name: 'Updated Task' })
    //   .expect(200);
    
    // Delete
    await request(app)
      .delete(`/api/items/${itemId}`)
      .expect(200);
    
    // Verify deletion
    const verifyResponse = await request(app)
      .get('/api/items')
      .expect(200);
    
    expect(verifyResponse.body.find(item => item.id === itemId)).toBeUndefined();
  });
});
```

## 5. End-to-End Testing

### 5.1 Scope and Purpose
E2E tests verify complete user workflows from the user's perspective.

### 5.2 E2E Testing with Playwright
```javascript
// Example: todo-app.e2e.test.js
const { test, expect } = require('@playwright/test');

test.describe('Todo App E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('user can manage tasks end-to-end', async ({ page }) => {
    // Verify app loads
    await expect(page.locator('h1')).toContainText('Todo App');
    
    // Add new task
    await page.click('[aria-label="Add new task"]');
    await page.fill('[data-testid="task-title-input"]', 'E2E Test Task');
    await page.fill('[data-testid="task-description-input"]', 'Created via E2E test');
    await page.click('button:has-text("Add Task")');
    
    // Verify task appears
    await expect(page.locator('text=E2E Test Task')).toBeVisible();
    
    // Mark task as complete
    await page.click('button:has-text("✓ Complete")');
    await expect(page.locator('.task-card.completed')).toBeVisible();
    
    // Filter to completed tasks
    await page.click('button:has-text("Completed")');
    await expect(page.locator('text=E2E Test Task')).toBeVisible();
    
    // Delete task
    await page.click('button:has-text("🗑 Delete")');
    await expect(page.locator('text=E2E Test Task')).not.toBeVisible();
  });

  test('theme switching works correctly', async ({ page }) => {
    // Open settings
    await page.click('button:has-text("Settings")');
    
    // Switch to high contrast dark theme
    await page.click('text=High Contrast Dark');
    
    // Verify theme change
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveAttribute('data-theme', 'high-contrast-dark');
    
    // Verify theme persists after reload
    await page.reload();
    await expect(htmlElement).toHaveAttribute('data-theme', 'high-contrast-dark');
  });

  test('responsive design works on mobile', async ({ page }) => {
    // Simulate mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Verify mobile layout
    const fab = page.locator('[aria-label="Add new task"]');
    await expect(fab).toBeVisible();
    
    // Verify settings menu works on mobile
    await page.click('button:has-text("Settings")');
    const settings = page.locator('[role="dialog"]');
    await expect(settings).toBeVisible();
  });
});
```

### 5.3 E2E Test Categories

#### 5.3.1 Critical User Journeys
- **Task Management Flow**: Create → Edit → Complete → Delete tasks
- **Due Date Management**: Add due dates, verify overdue indicators
- **Filtering and Sorting**: Test all filter states and sort orders
- **Theme Accessibility**: Verify all theme options work correctly

#### 5.3.2 Cross-Browser Testing
```javascript
// playwright.config.js
module.exports = {
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 12'] } }
  ]
};
```

## 6. Testing Configuration

### 6.1 Jest Configuration (Frontend)
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/reportWebVitals.js'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

### 6.2 Backend Testing Configuration
```javascript
// backend/jest.config.js
module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

## 7. Test Execution Strategy

### 7.1 Development Workflow
```bash
# Run tests during development
npm test                    # Run all tests in watch mode
npm run test:unit          # Run only unit tests
npm run test:integration   # Run integration tests
npm run test:e2e          # Run E2E tests
npm run test:coverage     # Generate coverage report
```

### 7.2 CI/CD Pipeline Testing
```yaml
# .github/workflows/test.yml
name: Test Suite
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm run test:unit
      
      - name: Run integration tests
        run: npm run test:integration
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

## 8. Test Maintenance Guidelines

### 8.1 Writing Maintainable Tests

#### 8.1.1 Test Structure
```javascript
describe('Component/Function Name', () => {
  // Setup
  beforeEach(() => {
    // Common setup code
  });

  describe('specific behavior or scenario', () => {
    test('should do something specific', () => {
      // Arrange
      const input = createTestInput();
      
      // Act
      const result = functionUnderTest(input);
      
      // Assert
      expect(result).toBe(expectedValue);
    });
  });
});
```

#### 8.1.2 Test Data Management
```javascript
// testData/taskFactory.js
export const createTestTask = (overrides = {}) => ({
  id: 1,
  title: 'Test Task',
  description: 'Test description',
  completed: false,
  dueDate: null,
  createdAt: new Date().toISOString(),
  ...overrides
});

export const createOverdueTask = () => createTestTask({
  dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
});
```

### 8.2 Test Naming Conventions
- **Unit Tests**: `ComponentName.test.js`, `functionName.test.js`
- **Integration Tests**: `feature.integration.test.js`
- **E2E Tests**: `workflow.e2e.test.js`
- **Test Descriptions**: Use "should" statements for behavior

### 8.3 Code Coverage Requirements
- **Minimum Coverage**: 80% for all metrics (lines, branches, functions, statements)
- **Critical Paths**: 95% coverage for core business logic
- **New Features**: 100% coverage required before merge

## 9. Testing Best Practices

### 9.1 General Principles
- **Arrange-Act-Assert**: Structure tests clearly
- **Single Responsibility**: Test one behavior per test case
- **Descriptive Names**: Test names should explain what is being tested
- **Independent Tests**: Each test should be able to run in isolation
- **Fast Execution**: Keep tests fast and focused

### 9.2 React Testing Best Practices
- **Test Behavior, Not Implementation**: Test what the user sees and does
- **Use Testing Library**: Prefer @testing-library over enzyme
- **Mock External Dependencies**: Mock API calls and external services
- **Test Accessibility**: Include accessibility checks in component tests

### 9.3 API Testing Best Practices
- **Test Edge Cases**: Include boundary conditions and error scenarios
- **Validate Response Format**: Ensure API responses match expected schema
- **Test Error Handling**: Verify proper error responses and status codes
- **Performance Testing**: Include basic performance assertions

## 10. Continuous Improvement

### 10.1 Test Metrics Tracking
- **Coverage Reports**: Monitor coverage trends over time
- **Test Execution Time**: Track and optimize slow tests
- **Flaky Test Detection**: Identify and fix unreliable tests
- **Bug Escape Rate**: Measure how many bugs reach production

### 10.2 Regular Review Process
- **Weekly Test Reviews**: Assess test quality and coverage
- **Quarterly Strategy Updates**: Evaluate and update testing approach
- **Tool Evaluation**: Regularly assess testing tools and frameworks
- **Team Training**: Ensure team stays current with testing best practices

---

*This testing strategy ensures high-quality, maintainable code through comprehensive test coverage at all levels. Regular review and updates keep our testing approach effective and current.*