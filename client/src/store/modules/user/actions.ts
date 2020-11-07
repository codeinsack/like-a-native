import { ActionTree } from 'vuex';
import Cookies from 'js-cookie';

import { RootState } from '@/store/types';
import { fetchMe, login, logout } from '@/api/auth';
import router from '@/router/routes';
import { attachWord, detachWord } from '@/api/users';
import { Actions, Mutations, State, States } from './types';

const actions: ActionTree<State, RootState> = {
  [Actions.LOGIN]: async ({ commit }, payload) => {
    await login(payload);
    const { data } = await fetchMe();
    commit(Mutations.SET_USER_DETAILS, data);
    Cookies.set('user', data);
    await router.push('/words');
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
  [Actions.ATTACH_WORD]: async ({ commit, state }, targetWordId: string) => {
    const user = state[States.user];
    const updatedUser = {
      ...user,
      attachedWords: user?.attachedWords.concat(targetWordId),
    };
    commit(Mutations.SET_USER_DETAILS, updatedUser);
    Cookies.set('user', updatedUser);
    await attachWord(targetWordId);
  },
  [Actions.DETACH_WORD]: async ({ commit, state }, targetWordId: string) => {
    const user = state[States.user];
    const updatedUser = {
      ...user,
      attachedWords: user?.attachedWords.filter((wordId) => wordId !== targetWordId),
    };
    commit(Mutations.SET_USER_DETAILS, updatedUser);
    Cookies.set('user', updatedUser);
    await detachWord(targetWordId);
  },
};

export default actions;
