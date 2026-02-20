#!/bin/bash

echo "🧪 Todo App Test Suite Validator"
echo "================================"
echo

# Navigate to frontend directory
echo "📂 Changing to frontend directory..."
cd /workspaces/jg_aitraining2/packages/frontend

echo "📍 Current directory: $(pwd)"
echo

# Verify we have the right files
echo "🔍 Checking for key files..."
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json not found"
    exit 1
fi

if [ -d "src/__tests__" ]; then
    echo "✅ Test directory found"
else
    echo "❌ Test directory not found"
    exit 1
fi

echo

# Count test files
test_count=$(find src/__tests__ -name "*.test.js" | wc -l)
echo "📊 Found $test_count test files"

echo

# List some test files for verification
echo "📋 Sample test files:"
find src/__tests__ -name "*.test.js" | head -5

echo

# Run tests
echo "🚀 Running tests..."
echo "Command: npm test"
echo

npm test