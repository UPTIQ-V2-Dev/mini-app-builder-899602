import { AuthResponse } from '../types/auth';

export const MOCK_LOGIN_SUCCESS: AuthResponse = {
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
  },
  token: 'mock-jwt-token-123456',
};

export const MOCK_REGISTER_SUCCESS: AuthResponse = {
  user: {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
  },
  token: 'mock-jwt-token-789012',
};

export const MOCK_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // In real app, this would be hashed
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
  },
];