import { MutationTree } from 'vuex';
import { Message } from '@/types/messages';
import { map } from 'lodash';
import { User } from '@/types/user';
import { Mutations, State, States } from './types';

const mutations: MutationTree<State> = {
  [Mutations.SOCKET_RECEIVE_ALL_MESSAGES]: (state: State, messages: Array<Message>) => {
    state[States.messages] = map(messages, (message, messageId) => {
      const parsedMessage = JSON.parse(message);
      return {
        ...parsedMessage,
        _id: messageId,
      };
    });
  },
  [Mutations.SOCKET_RECEIVE_ALL_USERS]: (state: State, users: Array<User>) => {
    state[States.users] = map(users, (user, userId) => {
      const parsedUser = JSON.parse(user);
      return {
        ...parsedUser,
        _id: userId,
      };
    });
  },
  [Mutations.SOCKET_RECEIVE_MESSAGE]: (state: State, message: Message) => {
    state[States.messages].push(message);
  },
  [Mutations.SOCKET_ADD_USER]: (state: State, user: User) => {
    state[States.users].push(user);
  },
  [Mutations.SOCKET_REMOVE_USER]: (state: State, userId: string) => {
    const users = state[States.users];
    const targetIndex = users.findIndex((user) => user._id === userId);
    users.splice(targetIndex, 1);
  },
};

export default mutations;
