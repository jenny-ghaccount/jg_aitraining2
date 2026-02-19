#!/bin/bash

echo "Installing dependencies for TODO app expansion..."

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Install frontend dependencies
echo "Installing frontend dependencies..." 
cd packages/frontend
npm install

# Install backend dependencies
echo "Installing backend dependencies..."
cd ../backend
npm install

# Return to root
cd ../../

echo "All dependencies installed successfully!"
echo "You can now run:"
echo "  npm test          - Run all tests"
echo "  npm start         - Start both frontend and backend"
echo "  npm run test:watch - Run tests in watch mode"