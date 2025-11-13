#!/bin/bash

# Install dependencies
echo "Installing dependencies with npm..."
npm install

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

# Run typecheck
echo "Running typecheck..."
npx tsc --noEmit

echo "Setup complete!"