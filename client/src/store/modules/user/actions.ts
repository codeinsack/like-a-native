import { ActionTree } from 'vuex';
import Cookies from 'js-cookie';

import { RootState } from '@/store/types';
import { login, logout } from '@/api/auth';
import router from '@/router/routes';
import { Status } from '@/types/response';
import { Actions, Mutations, State } from './types';

const actions: ActionTree<State, RootState> = {
  [Actions.LOGIN]: async ({ commit }, token) => {
    const {
      data: { status, content },
    } = await login(token);
    if (status === Status.success) {
      commit(Mutations.SET_USER_DETAILS, content);
      Cookies.set('user', content);
      await router.push('/words');
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
