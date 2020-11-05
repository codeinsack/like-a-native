import { Message } from '@/types/messages';
import { User } from '@/types/user';

export enum States {
  messages = 'messages',
  users = 'users',
}

export interface State {
  [States.messages]: Array<Message>;
  [States.users]: Array<User>;
}

export enum Mutations {
  SOCKET_RECEIVE_MESSAGE = 'SOCKET_RECEIVE_MESSAGE',
  SOCKET_RECEIVE_ALL_MESSAGES = 'SOCKET_RECEIVE_ALL_MESSAGES',
  SOCKET_RECEIVE_ALL_USERS = 'SOCKET_RECEIVE_ALL_USERS',
  SOCKET_ADD_USER = 'SOCKET_ADD_USER',
  SOCKET_REMOVE_USER = 'SOCKET_REMOVE_USER',
}
