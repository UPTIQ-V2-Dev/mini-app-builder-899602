#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('Installing pnpm...');

try {
  // Try to install pnpm globally using npm
  execSync('npm install -g pnpm@10.14.0', { stdio: 'inherit' });
  console.log('pnpm installed successfully!');
  
  // Now run the required commands
  console.log('Installing dependencies...');
  execSync('pnpm install', { stdio: 'inherit' });
  
  console.log('Generating Prisma client...');
  execSync('pnpm db:generate', { stdio: 'inherit' });
  
  console.log('Running typecheck...');
  execSync('pnpm typecheck', { stdio: 'inherit' });
  
  console.log('Setup complete!');
} catch (error) {
  console.error('Error:', error.message);
  
  console.log('Falling back to npm...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    execSync('npx prisma generate', { stdio: 'inherit' });
    execSync('npx tsc --noEmit', { stdio: 'inherit' });
    console.log('Setup complete with npm!');
  } catch (npmError) {
    console.error('npm fallback failed:', npmError.message);
    process.exit(1);
  }
}