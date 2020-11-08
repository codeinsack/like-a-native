import axios, { AxiosResponse } from 'axios';
import { AttachedWord } from '@/types/word';
import { User } from '@/types/user';
import { PaginatedResult } from '@/types/paginatedResult';

const baseUrl = `/api/v1/attachedwords`;

export const attachWord = async (wordId: string): Promise<AxiosResponse<User>> => {
  const url = `${baseUrl}/${wordId}`;
  return axios.post(url);
};

export const detachWord = async (relationId: string): Promise<AxiosResponse<User>> => {
  const url = `${baseUrl}/${relationId}`;
  return axios.delete(url);
};

export const fetchAttachedWords = async (): Promise<
  AxiosResponse<PaginatedResult<AttachedWord>>
> => {
  const url = `${baseUrl}`;
  return axios.get(url);
};
