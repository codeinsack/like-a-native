import axios from 'axios';
import { AxiosResponse } from '@/types/axios';
import { PaginatedResult } from '@/types/paginatedResult';
import { Word } from '@/types/words';

const baseUrl = `/api/v1/words`;

export const fetchWords = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<AxiosResponse<PaginatedResult<Word>>> => {
  const url = `${baseUrl}`;

  try {
    return axios.get(url, {
      params: {
        page,
        limit,
      },
    });
  } catch (error) {
    return { error };
  }
};

export const addWord = async (body: Word): Promise<AxiosResponse<unknown>> => {
  const url = `${baseUrl}`;

  try {
    return axios.post(url, body);
  } catch (error) {
    return { error };
  }
};
