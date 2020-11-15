import { ActionTree } from 'vuex';
import Cookies from 'js-cookie';

import { RootState } from '@/store/types';
import { fetchMe, login, logout } from '@/api/auth';
import router from '@/router/routes';
import { logError } from '@/utils/logger';
import { Actions, Mutations, State } from './types';

const actions: ActionTree<State, RootState> = {
  [Actions.LOGIN]: async ({ commit }, payload) => {
    try {
      await login(payload);
      const { data } = await fetchMe();
      commit(Mutations.SET_USER_DETAILS, data);
      Cookies.set('user', data);
      await router.push('/words');
    } catch (error) {
      logError(error);
    }
  },
  [Actions.LOGOUT]: async ({ commit }) => {
    const path = '/login';
    Cookies.remove('user');
    commit(Mutations.CLEAR_USER_DETAILS);
    if (router.currentRoute.path !== path) {
      await logout();
      await router.push(path);
    }
  },
};

export default actions;
