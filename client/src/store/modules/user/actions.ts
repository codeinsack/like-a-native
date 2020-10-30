import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { fetchMe } from '@/api/auth';
import { Actions, Mutations, State } from './types';

const actions: ActionTree<State, RootState> = {
  [Actions.LOAD_USER_DETAILS]: async ({ commit }) => {
    const { data } = await fetchMe();
    commit(Mutations.SET_USER_DETAILS, data);
  },
};

export default actions;
