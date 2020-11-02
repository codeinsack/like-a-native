import { Message } from '@/types/messages';

export enum States {
  messages = 'messages',
}

export interface State {
  [States.messages]: Array<Message>;
}

export enum Mutations {
  SOCKET_SERVER_MESSAGE = 'SOCKET_SERVER_MESSAGE',
}
