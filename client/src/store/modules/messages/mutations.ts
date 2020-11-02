import { MutationTree } from 'vuex';
import { Message } from '@/types/messages';
import { Mutations, State, States } from './types';

const mutations: MutationTree<State> = {
  [Mutations.SOCKET_SERVER_MESSAGE]: (state: State, message: Message) => {
    state[States.messages].push(message);
  },
};

export default mutations;
