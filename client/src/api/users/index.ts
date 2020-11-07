import axios, { AxiosResponse } from 'axios';
import { Word } from '@/types/word';
import { User } from '@/types/user';

const baseUrl = `/api/v1/users`;

export const attachWord = async (wordId: string): Promise<AxiosResponse<User>> => {
  const url = `${baseUrl}/${wordId}/attachword`;
  return axios.put(url);
};

export const detachWord = async (wordId: string): Promise<AxiosResponse<User>> => {
  const url = `${baseUrl}/${wordId}/detachword`;
  return axios.put(url);
};

export const fetchAttachedWords = async (): Promise<AxiosResponse<Array<Word>>> => {
  const url = `${baseUrl}/attachedwords`;
  return axios.get(url);
};
