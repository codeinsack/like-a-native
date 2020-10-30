import { logout } from '@/api/auth';
import VueRouter from 'vue-router';
import { Mutations, States } from './store/modules/user/types';
import { Modules } from './store/types';
import { useStore } from './uses/useStore';

const { useState, useMutations } = useStore(Modules.USER);

const { user } = useState([States.user]);
const { CLEAR_USER_DETAILS } = useMutations([Mutations.CLEAR_USER_DETAILS]);

export function useApp(router: VueRouter) {
  const deleteToken = async () => {
    await logout();
    await router.push('/login');
    CLEAR_USER_DETAILS();
  };

  return {
    deleteToken,
    user,
  };
}
