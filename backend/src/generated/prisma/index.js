// Temporary Prisma client implementation
// This is a minimal implementation to resolve import errors

const Role = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

const TokenType = {
  ACCESS: 'ACCESS',
  REFRESH: 'REFRESH',
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};

class PrismaClient {
  constructor() {
    this.user = {
      findUnique: async () => null,
      findFirst: async () => null,
      findMany: async () => [],
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({}),
      count: async () => 0
    };
    
    this.token = {
      findUnique: async () => null,
      findFirst: async () => null,
      findMany: async () => [],
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({}),
      count: async () => 0
    };
  }

  async $connect() {
    console.warn('Using temporary Prisma client - please run "npm run db:generate" or "pnpm db:generate"');
  }

  async $disconnect() {}
}

module.exports = {
  PrismaClient,
  Role,
  TokenType,
  Prisma: {
    Role,
    TokenType
  }
};

// ES module export
export { PrismaClient, Role, TokenType };
export const Prisma = { Role, TokenType };