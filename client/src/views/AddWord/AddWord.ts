import { reactive } from '@vue/composition-api';
import { Word } from '@/types/words';
import { addWord } from '@/api/words';

const initialWord = {
  word: '',
  translation: '',
  definition: '',
};

export function useAddWord() {
  const word: Word = reactive({ ...initialWord });

  const addNewWord = async (): Promise<void> => {
    await addWord({ ...word });
    Object.assign(word, initialWord);
  };

  return {
    word,
    addNewWord,
  };
}
