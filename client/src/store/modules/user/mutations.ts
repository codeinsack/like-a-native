import { MutationTree } from 'vuex';
import { Mutations, State, States } from './types';

const mutations: MutationTree<State> = {
  [Mutations.SET_USER_DETAILS]: (state: State, user) => {
    state[States.user] = user;
  },
};

export default mutations;
