import { User } from '@/types/user';

export enum States {
  user = 'user',
}

export interface State {
  [States.user]: User | null;
}

export enum Actions {
  LOAD_USER_DETAILS = 'LOAD_USER_DETAILS',
}

export enum Mutations {
  SET_USER_DETAILS = 'SET_USER_DETAILS',
  CLEAR_USER_DETAILS = 'CLEAR_USER_DETAILS',
}
