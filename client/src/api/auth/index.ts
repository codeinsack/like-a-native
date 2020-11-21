import axios from 'axios';
import { AxiosResponse } from '@/types/response';
import { logError } from '@/utils/logger';

const baseUrl = `/api/v1/auth`;

export const login = async (token: string): Promise<AxiosResponse<null>> => {
  const url = `${baseUrl}/login`;
  try {
    return await axios.post(url, {
      token,
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
