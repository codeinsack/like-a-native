import axios, { AxiosResponse } from 'axios';
import { PaginatedResult } from '@/types/paginatedResult';
import { User } from '@/types/user';
import { logError } from '@/utils/logger';

const baseUrl = `/api/v1/auth`;

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AxiosResponse<PaginatedResult<string>>> => {
  const url = `${baseUrl}/login`;
  try {
    return axios.post(url, {
      email,
      password,
    });
  } catch (error) {
    logError(error);
    return error;
  }
};

export const logout = async (): Promise<AxiosResponse<PaginatedResult<string>>> => {
  const url = `${baseUrl}/logout`;
  try {
    return await axios.get(url);
  } catch (error) {
    logError(error);
    return error;
  }
};

export const fetchMe = async (): Promise<AxiosResponse<User>> => {
  const url = `${baseUrl}/me`;
  try {
    return axios.get(url);
  } catch (error) {
    logError(error);
    return error;
  }
};
