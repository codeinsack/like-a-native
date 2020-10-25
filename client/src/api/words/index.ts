import axios, { AxiosResponse } from 'axios';
import { PaginatedResult } from '@/types/paginatedResult';
import { PartOfSpeech, Word } from '@/types/words';

const baseUrl = `/api/v1/words`;

export const fetchWords = async ({
  page,
  limit,
  sort,
  search,
  partOfSpeech,
}: {
  page: number;
  limit: number;
  sort: string | null;
  search: string | null;
  partOfSpeech: PartOfSpeech | null;
}): Promise<AxiosResponse<PaginatedResult<Word>>> =>
  axios.get(baseUrl, {
    params: {
      page,
      limit,
      sort,
      search,
      partOfSpeech,
    },
  });

export const fetchWordDetails = async (wordId: string): Promise<AxiosResponse<Word>> => {
  const url = `${baseUrl}/${wordId}`;
  return axios.get(url);
};

export const createNewWord = async (body: Word): Promise<AxiosResponse<Word>> =>
  axios.post(baseUrl, body);

export const updateWord = async (body: Word): Promise<AxiosResponse<Word>> =>
  axios.put(baseUrl, body);

export const uploadWordImage = async ({
  wordId,
  image,
}: {
  wordId: string;
  image: File;
}): Promise<AxiosResponse<Word>> => {
  const url = `${baseUrl}/${wordId}/image`;
  const formData = new FormData();
  formData.append('file', image);
  return axios.put(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
