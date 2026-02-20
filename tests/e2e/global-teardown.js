// Global teardown for E2E tests
module.exports = async (config) => {
  console.log('🧹 Starting E2E test teardown...');
  
  // Cleanup test data, services, etc.
  // For this project with in-memory SQLite, no cleanup needed
  
  // Optional: Clean up authentication states, temp files, etc.
  
  console.log('✅ E2E test teardown complete');
};