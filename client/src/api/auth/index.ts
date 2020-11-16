import axios from 'axios';
import { AxiosResponse } from '@/types/response';
import { User } from '@/types/user';
import { logError } from '@/utils/logger';

const baseUrl = `/api/v1/auth`;

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AxiosResponse<null>> => {
  const url = `${baseUrl}/login`;
  try {
    return await axios.post(url, {
      email,
      password,
    });
  } catch (error) {
    logError(error);
    return error;
  }
};

export const logout = async (): Promise<AxiosResponse<null>> => {
  const url = `${baseUrl}/logout`;
  try {
    return await axios.get(url);
  } catch (error) {
    logError(error.messages);
    return error;
  }
};

export const fetchMe = async (): Promise<AxiosResponse<User>> => {
  const url = `${baseUrl}/me`;
  try {
    return axios.get(url);
  } catch (error) {
    logError(error.messages);
    return error;
  }
};
