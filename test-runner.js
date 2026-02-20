#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🧪 Running tests for the Todo App...\n');

try {
  // Change to frontend directory and run tests
  process.chdir(path.join(__dirname, 'packages', 'frontend'));
  
  console.log('Current directory:', process.cwd());
  console.log('Running: npm test -- --watchAll=false --verbose\n');
  
  const result = execSync('npm test -- --watchAll=false --verbose', {
    encoding: 'utf8',
    stdio: 'inherit'
  });
  
  console.log('\n✅ Tests completed successfully!');
  
} catch (error) {
  console.error('\n❌ Test run failed:');
  console.error(error.message);
  console.error('\nStdout:', error.stdout?.toString());
  console.error('\nStderr:', error.stderr?.toString());
  process.exit(1);
}