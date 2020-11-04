import { onMounted } from '@vue/composition-api';
import Cookies from 'js-cookie';

import { Actions, States, Mutations } from './store/modules/user/types';
import { Modules } from './store/types';
import { useStore } from './uses/useStore';

const { useState, useActions, useMutations } = useStore(Modules.USER);

const { user } = useState([States.user]);
const { LOGOUT } = useActions([Actions.LOGOUT]);
const { SET_USER_DETAILS } = useMutations([Mutations.SET_USER_DETAILS]);

export function useApp() {
  onMounted(() => {
    SET_USER_DETAILS(Cookies.getJSON('user'));
  });

  const logout = async () => {
    LOGOUT();
  };

  return {
    logout,
    user,
  };
}
