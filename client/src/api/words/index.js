import axios from 'axios';
import { AxiosResponse } from '../../types/axios';

const baseUrl = `/api/v1/words`;

export const fetchWords = async (): Promise<AxiosResponse<any>> => {
  const url = `${baseUrl}`;

  try {
    return axios.get(url);
  } catch (error) {
    return { error };
  }
};

export const addWord = async (body: any) => {
  const url = `${baseUrl}`;

  try {
    return axios.post(url, body);
  } catch (error) {
    return { error };
  }
};
