import { Notification } from '@/types/notification';

export enum States {
  notifications = 'notifications',
}

export interface State {
  [States.notifications]: Notification[];
}

export enum Mutations {
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
}

export enum Actions {
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
}
