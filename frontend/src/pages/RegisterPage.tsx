import { AuthLayout } from '@/components/layout/AuthLayout';
import { RegisterForm } from '@/components/auth/RegisterForm';

export const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create Account"
      description="Sign up for a new account to get started"
    >
      <RegisterForm />
    </AuthLayout>
  );
};