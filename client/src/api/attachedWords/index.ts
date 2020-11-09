import axios, { AxiosResponse } from 'axios';
import { AttachedWord } from '@/types/word';
import { User } from '@/types/user';
import { PaginatedResult } from '@/types/paginatedResult';
import { logError } from '@/utils/logger';

const baseUrl = `/api/v1/attachedwords`;

export const attachWord = async (wordId: string): Promise<AxiosResponse<User>> => {
  const url = `${baseUrl}/${wordId}`;
  try {
    return await axios.post(url);
  } catch (error) {
    logError(error);
    return error;
  }
};

export const detachWord = async (relationId: string): Promise<AxiosResponse<User>> => {
  const url = `${baseUrl}/${relationId}`;
  try {
    return await axios.delete(url);
  } catch (error) {
    logError(error);
    return error;
  }
};

export const fetchAttachedWords = async (): Promise<
  AxiosResponse<PaginatedResult<AttachedWord>>
> => {
  const url = `${baseUrl}`;
  try {
    return await axios.get(url);
  } catch (error) {
    logError(error);
    return error;
  }
};
