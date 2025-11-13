# Backend Setup Instructions

## Fix for "spawn pnpm ENOENT" Error

The error occurs because pnpm is not installed in your environment. Here are the solutions:

## Option 1: Install pnpm (Recommended)

```bash
# Install pnpm globally
npm install -g pnpm

# Then run the setup commands
pnpm install
pnpm db:generate
pnpm typecheck
```

## Option 2: Use npm instead

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run typecheck
npx tsc --noEmit
```

## Option 3: Use the setup script

```bash
# Make the setup script executable
chmod +x setup.sh

# Run the setup script
./setup.sh
```

## Option 4: Use Node.js script

```bash
# Run the Node.js installer script
node install-pnpm.js
```

## After Setup

Once you've run any of the above options successfully, your backend will be ready with:

✅ All dependencies installed
✅ Prisma client generated
✅ TypeScript types available
✅ All API endpoints ready to use

## Development

Start the development server:
```bash
# With pnpm
pnpm dev

# With npm
npm run dev
```

## What's Already Implemented

The backend is fully implemented with:
- Authentication endpoints (login, register, logout, etc.)
- User management endpoints (CRUD operations)
- MCP endpoints for AI agent integration
- Database models (User, Token)
- Input validation and error handling
- MCP tools for user operations

All APIs match the specification in `API_SPECIFICATION.md`.