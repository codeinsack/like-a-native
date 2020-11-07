import { User } from '@/types/user';

export enum States {
  user = 'user',
}

export interface State {
  [States.user]: User | null;
}

export enum Actions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  ATTACH_WORD = 'ATTACH_WORD',
  DETACH_WORD = 'DETACH_WORD',
}

export enum Mutations {
  SET_USER_DETAILS = 'SET_USER_DETAILS',
  CLEAR_USER_DETAILS = 'CLEAR_USER_DETAILS',
}
