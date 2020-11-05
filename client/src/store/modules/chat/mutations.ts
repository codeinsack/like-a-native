import { MutationTree } from 'vuex';
import { Message } from '@/types/messages';
import { map } from 'lodash';
import { Mutations, State, States } from './types';

const mutations: MutationTree<State> = {
  [Mutations.SOCKET_RECEIVE_ALL_MESSAGES]: (state: State, messages: Array<Message>) => {
    state[States.messages] = map(messages, (message) => JSON.parse(message));
  },
  [Mutations.SOCKET_RECEIVE_MESSAGE]: (state: State, message: Message) => {
    state[States.messages].push(message);
  },
};

export default mutations;
