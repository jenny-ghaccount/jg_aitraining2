# UI Guidelines

## 1. Overview

This document defines the user interface guidelines for the Todo Management Application, focusing on Material Design principles, accessibility, and consistent user experience across all platforms.

## 2. Design System Foundation

### 2.1 Material Design Components
The application shall utilize Material Design 3 (Material You) components to ensure:
- Consistent interaction patterns
- Modern, intuitive interface elements
- Cross-platform familiarity
- Built-in accessibility features

**Key Material Components to Use:**
- Material Cards for task items
- Material Buttons for actions
- Material Text Fields for input
- Material Chips for tags/status
- Material Date Picker for due dates
- Material Floating Action Button (FAB) for primary actions

### 2.2 Typography
- **Font Family**: Roboto (Material Design standard)
- **Headings**: Roboto Medium (20px, 16px, 14px)
- **Body Text**: Roboto Regular (14px, 12px)
- **Labels**: Roboto Medium (12px)
- **Line Height**: 1.5x for optimal readability

## 3. Color Palette

### 3.1 Primary Blue Color Scheme
Based on Material Design Blue palette with accessibility-compliant contrast ratios:

**Primary Colors:**
- **Primary Blue**: `#1976D2` (Material Blue 700)
- **Primary Light**: `#42A5F5` (Material Blue 400)
- **Primary Dark**: `#0D47A1` (Material Blue 900)
- **Primary Variant**: `#1565C0` (Material Blue 800)

**Secondary Colors:**
- **Secondary**: `#03DAC6` (Material Teal A400)
- **Secondary Variant**: `#018786` (Material Teal 700)

**Surface Colors:**
- **Background**: `#FAFAFA` (Material Grey 50)
- **Surface**: `#FFFFFF` (White)
- **Surface Variant**: `#F5F5F5` (Material Grey 100)

**Text Colors:**
- **On Primary**: `#FFFFFF` (White)
- **On Surface**: `#212121` (Material Grey 900)
- **On Background**: `#424242` (Material Grey 800)

### Status Colors
- **Success/Completed**: `#4CAF50` (Material Green 500)
- **Warning/Due Soon**: `#FF9800` (Material Orange 500) 
- **Error/Overdue**: `#D32F2F` (Material Red 700) - *Prominent red for overdue tasks*
- **Info**: `#2196F3` (Material Blue 500)

## 4. Accessibility Themes

### 4.1 High Contrast Themes

**Theme Toggle Options:**
1. **Standard Theme** (Default blue palette above)
2. **High Contrast Dark Theme** (White on Black)
3. **High Contrast Light Theme** (Black on White)

#### 4.1.1 High Contrast Dark Theme (White on Black)
```css
:root[data-theme="high-contrast-dark"] {
  --background: #000000;
  --surface: #000000;
  --primary: #FFFFFF;
  --on-background: #FFFFFF;
  --on-surface: #FFFFFF;
  --border: #FFFFFF;
  --text-primary: #FFFFFF;
  --text-secondary: #E0E0E0;
}
```

#### 4.1.2 High Contrast Light Theme (Black on White)
```css
:root[data-theme="high-contrast-light"] {
  --background: #FFFFFF;
  --surface: #FFFFFF;
  --primary: #000000;
  --on-background: #000000;
  --on-surface: #000000;
  --border: #000000;
  --text-primary: #000000;
  --text-secondary: #424242;
}
```

### 4.2 Accessibility Features

**WCAG 2.1 AA Compliance:**
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- All interactive elements meet focus and hover requirements

**Theme Switcher:**
- Accessible theme toggle in settings menu
- Three-option selector: Standard, High Contrast Dark, High Contrast Light
- Keyboard navigable (Tab, Enter, Space)
- Screen reader announcements for theme changes
- Persistent theme preference (localStorage)
- Settings icon in header opens theme options

## 5. Interactive Components

### 5.1 Buttons

#### 5.1.1 Primary Buttons
```css
.btn-primary {
  background-color: var(--primary);
  color: var(--on-primary);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

.btn-primary:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(25, 118, 210, 0.2);
}
```

#### 5.1.2 Secondary Buttons
```css
.btn-secondary {
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 8px;
  padding: 10px 22px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: var(--primary);
  color: var(--on-primary);
  transform: translateY(-1px);
}
```

#### 5.1.3 Floating Action Button (FAB) - Add New Task
```css
.fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--primary);
  color: var(--on-primary);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 24px;
  right: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 16px rgba(25, 118, 210, 0.3);
}

.fab:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(25, 118, 210, 0.4);
}

.fab::before {
  content: '+';
  font-size: 24px;
  font-weight: 300;
}
```

**FAB Functionality:**
- Primary action: Opens "Add New Task" dialog/form
- Always visible for quick task creation
- Material Design + icon for universal recognition

### 5.2 Task Cards

#### 5.2.1 Task Card Component
```css
.task-card {
  background: var(--surface);
  border-radius: 12px;
  padding: 16px;
  margin: 8px 0;
  border-left: 4px solid var(--primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;
}

.task-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.task-card.completed {
  opacity: 0.7;
  border-left-color: var(--success-color);
}

.task-card.overdue {
  border-left-color: var(--error-color);
  background: rgba(244, 67, 54, 0.1);
  border: 2px solid var(--error-color);
}

.task-card.due-soon {
  border-left-color: var(--warning-color);
  background: rgba(255, 152, 0, 0.08);
  border: 1px solid var(--warning-color);
}

/* Prominent overdue task styling */
.task-card.overdue .task-title {
  color: var(--error-color);
  font-weight: 500;
}

.task-card.overdue .due-date {
  color: var(--error-color);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
}

.task-card.overdue::after {
  content: '⚠️ OVERDUE';
  position: absolute;
  top: 8px;
  right: 12px;
  background: var(--error-color);
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
}
```

## 6. Layout Guidelines

### 6.1 Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### 6.2 Spacing System (8px Grid)
- **Micro**: 4px
- **Small**: 8px
- **Medium**: 16px
- **Large**: 24px
- **XLarge**: 32px
- **XXLarge**: 48px

### 6.3 Component Layout
```css
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-medium);
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-small);
}
```

## 7. Navigation & Interaction

### 7.1 Keyboard Navigation
- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and controls
- **Escape**: Close modals/dialogs
- **Arrow Keys**: Navigate within lists

### 7.2 Focus Management
- Clear focus indicators on all interactive elements
- Focus trapping in modals
- Focus restoration after modal close
- Skip links for main content

## 8. Animations & Transitions

### 8.1 Animation Principles
- **Duration**: 200-300ms for micro-interactions
- **Easing**: `ease-out` for entrances, `ease-in` for exits
- **Respect prefers-reduced-motion** for accessibility

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 9. Component States

### 9.1 Interactive States
- **Default**: Base appearance
- **Hover**: Elevated appearance with color/shadow changes
- **Focus**: Clear outline for keyboard navigation
- **Active**: Pressed state with slight scale/position change
- **Disabled**: Reduced opacity with no interactions

### 9.2 Loading States
- Material Design progress indicators
- Skeleton loaders for content areas
- Button loading states with spinners

## 10. Implementation Guidelines

### 10.1 CSS Custom Properties Setup
```css
:root {
  --primary: #1976D2;
  --primary-light: #42A5F5;
  --primary-dark: #0D47A1;
  --secondary: #03DAC6;
  --background: #FAFAFA;
  --surface: #FFFFFF;
  --error: #D32F2F;
  --warning: #FF9800;
  --success: #4CAF50;
  --text-primary: #212121;
  --text-secondary: #757575;
  
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 24px;
  
  --border-radius: 8px;
  --elevation-1: 0 2px 4px rgba(0,0,0,0.1);
  --elevation-2: 0 4px 8px rgba(0,0,0,0.12);
}
```

### 10.2 Theme Implementation
```javascript
// Theme switcher functionality
const themes = {
  standard: 'standard',
  highContrastDark: 'high-contrast-dark',
  highContrastLight: 'high-contrast-light'
};

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('preferred-theme', theme);
  announceThemeChange(theme);
}
```

## 11. Testing Guidelines

### 11.1 Accessibility Testing
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation testing
- Color contrast verification tools
- Focus management validation

### 11.2 Visual Testing
- Cross-browser compatibility
- Responsive design testing
- Theme switching functionality
- Animation performance testing

---

*These guidelines ensure a consistent, accessible, and beautiful user experience that aligns with modern design standards and accessibility requirements.*