import axios from 'axios';
import { AttachedWord } from '@/types/word';
import { User } from '@/types/user';
import { PaginatedResult } from '@/types/paginatedResult';
import { logError } from '@/utils/logger';
import { Params } from '@/types/params';
import { AxiosResponse } from '@/types/response';

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

export const fetchAttachedWords = async (
  params?: Params
): Promise<AxiosResponse<PaginatedResult<AttachedWord>>> => {
  const url = `${baseUrl}`;
  try {
    return await axios.get(url, {
      params,
    });
  } catch (error) {
    logError(error);
    return error;
  }
};

export const updateProgress = async ({
  id,
  progress,
}: {
  id: string;
  progress: number;
}): Promise<AxiosResponse<null>> => {
  const url = `${baseUrl}/${id}/progress`;
  try {
    return await axios.patch(url, {
      progress,
    });
  } catch (error) {
    logError(error);
    return error;
  }
};
