// Global setup for E2E tests
const { chromium } = require('@playwright/test');

module.exports = async (config) => {
  console.log('🚀 Starting E2E test setup...');
  
  // Set test environment variables
  process.env.NODE_ENV = 'test';
  
  // Optional: Set up test database or external services
  // For this project, we're using in-memory SQLite, so no setup needed
  
  // Browser setup for authentication state if needed
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Optional: Perform login or other global setup actions
  // await page.goto('http://localhost:3000');
  // await page.fill('[data-testid="username"]', 'test-user');
  // Save authentication state if needed
  
  await browser.close();
  
  console.log('✅ E2E test setup complete');
};