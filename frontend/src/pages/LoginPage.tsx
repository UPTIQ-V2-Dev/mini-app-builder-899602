import { AuthLayout } from '@/components/layout/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';

export const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Sign in to your account to continue"
    >
      <LoginForm />
    </AuthLayout>
  );
};