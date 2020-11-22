import axios from 'axios';
import { Word } from '@/types/word';
import { logError } from '@/utils/logger';
import { AxiosResponse } from '@/types/response';

const baseUrl = `/api/v1/wordimage`;

export const uploadWordImage = async ({
  wordId,
  image,
}: {
  wordId: string;
  image: File;
}): Promise<AxiosResponse<Word>> => {
  const url = `${baseUrl}/${wordId}`;
  const formData = new FormData();
  formData.append('file', image);
  try {
    return await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    logError(error);
    return error;
  }
};
