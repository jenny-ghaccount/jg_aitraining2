module.exports = {
  // Test environment
  testEnvironment: 'node',
  
  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.test.js', 
    '**/?(*.)+(spec|test).js'
  ],
  
  // Exclude utility files from tests
  testPathIgnorePatterns: [
    '/node_modules/',
    'test-utils.js'
  ],
  
  // Coverage configuration
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
    '!**/__tests__/**',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'text-summary', 
    'lcov',
    'html',
    'json'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  // Module configuration
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  
  // Timeouts and performance
  testTimeout: 10000,
  maxWorkers: '50%',
  
  // Output configuration
  verbose: true,
  errorOnDeprecated: true,
  
  // Watch mode settings
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/', 
    '<rootDir>/coverage/'
  ]
};