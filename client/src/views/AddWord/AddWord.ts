import { reactive } from '@vue/composition-api';
import { Word, PartOfSpeech } from '@/types/words';
import { addWord } from '@/api/words';
import { useFormatter } from '@/uses/useFormatter';

const initialWord = {
  word: '',
  translation: '',
  partOfSpeech: '',
  definition: '',
};

const { capitalizeUnderscore } = useFormatter();

const partsOfSpeech = (Object.keys(PartOfSpeech) as Array<keyof typeof PartOfSpeech>).map(
  (key) => ({
    value: key,
    text: capitalizeUnderscore(PartOfSpeech[key]),
  })
);

export function useAddWord() {
  const word: Word = reactive({ ...(initialWord as Word) });

  const addNewWord = async (): Promise<void> => {
    await addWord({ ...word });
    Object.assign(word, initialWord);
  };

  return {
    word,
    addNewWord,
    partsOfSpeech,
  };
}
