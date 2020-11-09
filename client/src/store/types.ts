export interface RootState {
  version?: string;
}

export enum Modules {
  USER = 'USER',
  CHAT = 'CHAT',
  NOTIFICATION = 'NOTIFICATION',
}
