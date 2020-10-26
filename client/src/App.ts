import { logout } from '@/api/auth';

export function useApp() {
  const deleteToken = async () => {
    await logout();
  };

  return {
    deleteToken,
  };
}
