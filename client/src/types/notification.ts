export enum Variant {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

export interface Notification {
  _id?: string;
  message: string;
  variant: Variant;
  duration?: number;
  visible?: boolean;
}
