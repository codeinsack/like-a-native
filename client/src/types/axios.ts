import { AxiosRequestConfig } from 'axios';

export interface AxiosResponse<T> {
  status?: number;
  data?: T;
  error?: unknown;
  config?: AxiosRequestConfig;
}
