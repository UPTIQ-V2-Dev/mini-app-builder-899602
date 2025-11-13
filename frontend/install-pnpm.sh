#!/bin/bash

# Install pnpm using npm if available
if command -v npm >/dev/null 2>&1; then
    echo "Installing pnpm using npm..."
    npm install -g pnpm
elif command -v node >/dev/null 2>&1; then
    echo "Node.js found, trying to install pnpm directly..."
    # Try to use corepack if available
    if command -v corepack >/dev/null 2>&1; then
        corepack enable
        corepack prepare pnpm@latest --activate
    else
        # Download and install pnpm manually
        curl -fsSL https://get.pnpm.io/install.sh | sh
        export PATH="$HOME/.local/share/pnpm:$PATH"
    fi
else
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Verify installation
if command -v pnpm >/dev/null 2>&1; then
    echo "pnpm installed successfully"
    pnpm --version
else
    echo "pnpm installation failed"
    exit 1
fi