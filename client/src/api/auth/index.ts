import axios, { AxiosResponse } from 'axios';
import { PaginatedResult } from '@/types/paginatedResult';
import { User } from '@/types/user';

const baseUrl = `/api/v1/auth`;

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AxiosResponse<PaginatedResult<string>>> => {
  const url = `${baseUrl}/login`;
  return axios.post(url, {
    email,
    password,
  });
};

export const logout = async (): Promise<AxiosResponse<PaginatedResult<string>>> => {
  const url = `${baseUrl}/logout`;
  return axios.get(url);
};

export const fetchMe = async (): Promise<AxiosResponse<User>> => {
  const url = `${baseUrl}/me`;
  return axios.get(url);
};
