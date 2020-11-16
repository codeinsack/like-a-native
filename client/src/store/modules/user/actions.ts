import { ActionTree } from 'vuex';
import Cookies from 'js-cookie';

import { RootState } from '@/store/types';
import { fetchMe, login, logout } from '@/api/auth';
import router from '@/router/routes';
import { Status } from '@/types/response';
import { Actions, Mutations, State } from './types';

const actions: ActionTree<State, RootState> = {
  [Actions.LOGIN]: async ({ commit }, payload) => {
    const {
      data: { status },
    } = await login(payload);
    if (status === Status.success) {
      const { data } = await fetchMe();
      commit(Mutations.SET_USER_DETAILS, data.content);
      Cookies.set('user', data);
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
