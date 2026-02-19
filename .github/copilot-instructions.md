# GitHub Copilot Instructions

> **Note**: This file is located at `.github/copilot-instructions.md` and is used by GitHub Copilot to understand project context.

This file contains high-level instructions for GitHub Copilot to follow when generating code for this project. For detailed guidance, refer to the documentation files in the `docs/` directory.

## Documentation Overview

The project documentation includes:

- [Project Overview](../docs/project-overview.md) - Overview of the project architecture and setup
- [Functional Requirements](../docs/functional-requirements.md) - Detailed system requirements and specifications
- [UI Guidelines](../docs/ui-guidelines.md) - Design system, Material Design components, and accessibility standards
- [Testing Guidelines](../docs/testing-guidelines.md) - Comprehensive testing strategy, unit/integration/E2E tests, and best practices

Refer to these documents when implementing features to ensure alignment with project goals and requirements.

## Testing Requirements for AI-Generated Code

When assisting with code development, always consider testing requirements:

### Test-First Approach
- **Always suggest tests** when generating new features
- **Follow TDD principles**: Write tests before implementation when possible
- **Include test examples** alongside feature code

### Required Test Coverage
- **Unit Tests**: Every new component, function, or utility must include unit tests
- **Integration Tests**: API endpoints and component integrations require integration tests  
- **E2E Tests**: New user workflows need end-to-end test coverage
- **Accessibility Tests**: UI components should include accessibility validation

### Test Code Standards
- Use **Testing Library** for React component testing
- Use **Jest** for unit and integration testing
- Use **Playwright** for end-to-end testing
- Follow **Arrange-Act-Assert** pattern
- Include **accessibility testing** with @testing-library/jest-dom

### Example: Always Include Tests
When creating a new component, provide both implementation AND tests:

```javascript
// Component implementation
const TaskCard = ({ task, onComplete }) => { ... };

// Corresponding test file
import { render, screen } from '@testing-library/react';
import TaskCard from './TaskCard';

describe('TaskCard', () => {
  test('renders task information correctly', () => { ... });
});
```

This ensures maintainable, reliable code that follows our quality standards.
