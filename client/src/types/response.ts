import { AxiosResponse as DefaultResponse } from 'axios';

export enum Status {
  success = 'success',
  failure = 'failure',
}

export interface Response<T> {
  content?: T;
  status: Status;
}

export interface AxiosResponse<T> extends DefaultResponse {
  data: Response<T>;
}
