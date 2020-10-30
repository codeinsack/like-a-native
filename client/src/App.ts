import { logout } from '@/api/auth';
import { onMounted } from '@vue/composition-api';
import { Actions, States } from './store/modules/user/types';
import { Modules } from './store/types';
import { useStore } from './uses/useStore';

const { useState, useActions } = useStore(Modules.USER);

const { LOAD_USER_DETAILS } = useActions([Actions.LOAD_USER_DETAILS]);

const { user } = useState([States.user]);

export function useApp() {
  onMounted(() => {
    LOAD_USER_DETAILS();
  });

  const deleteToken = async () => {
    await logout();
  };

  return {
    deleteToken,
    user,
  };
}
