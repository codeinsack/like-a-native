import axios, { AxiosResponse } from 'axios';
import { PaginatedResult } from '@/types/paginatedResult';
import { Word } from '@/types/words';

const baseUrl = `/api/v1/words`;

export const fetchWords = async ({
  page,
  limit,
  search,
}: {
  page: number;
  limit: number;
  search: string | null;
}): Promise<AxiosResponse<PaginatedResult<Word>>> =>
  axios.get(baseUrl, {
    params: {
      page,
      limit,
      search,
    },
  });

export const addWord = async (body: Word): Promise<AxiosResponse<Word>> =>
  axios.post(baseUrl, body);
