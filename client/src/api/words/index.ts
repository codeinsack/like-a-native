import axios, { AxiosResponse } from 'axios';
import { PaginatedResult } from '@/types/paginatedResult';
import { Word } from '@/types/word';
import { logError } from '@/utils/logger';
import { Params } from '@/types/params';

const baseUrl = `/api/v1/words`;

export const fetchWords = async (params: Params): Promise<AxiosResponse<PaginatedResult<Word>>> => {
  try {
    return await axios.get(baseUrl, {
      params,
    });
  } catch (error) {
    logError(error);
    return error;
  }
};

export const fetchWordDetails = async (wordId: string): Promise<AxiosResponse<Word>> => {
  const url = `${baseUrl}/${wordId}`;
  try {
    return await axios.get(url);
  } catch (error) {
    logError(error);
    return error;
  }
};

export const createNewWord = async (body: Word): Promise<AxiosResponse<Word>> => {
  try {
    return await axios.post(baseUrl, body);
  } catch (error) {
    logError(error);
    return error;
  }
};

export const updateWord = async (body: Word): Promise<AxiosResponse<Word>> => {
  try {
    return await axios.put(baseUrl, body);
  } catch (error) {
    logError(error);
    return error;
  }
};

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
  try {
    return await axios.put(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    logError(error);
    return error;
  }
};
