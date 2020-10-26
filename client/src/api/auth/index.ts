import axios, { AxiosResponse } from 'axios';
import { PaginatedResult } from '@/types/paginatedResult';

const baseUrl = `/api/v1/auth`;

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AxiosResponse<PaginatedResult<any>>> => {
  const url = `${baseUrl}/login`;
  return axios.post(url, {
    email,
    password,
  });
};
