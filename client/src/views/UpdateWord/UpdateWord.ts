import { Route } from 'vue-router';
import { reactive, onMounted } from '@vue/composition-api';
import { Word, PartOfSpeech } from '@/types/words';
import { updateWord, fetchWordDetails } from '@/api/words';
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

export function useAddWord(route: Route) {
  const word: Word = reactive({ ...(initialWord as Word) });

  onMounted(async () => {
    const {
      params: { id },
    } = route;
    const { data } = await fetchWordDetails(id);
    if (data) {
      Object.assign(word, data);
    }
  });

  const saveWord = async (): Promise<void> => {
    await updateWord({ ...word });
  };

  return {
    word,
    saveWord,
    partsOfSpeech,
  };
}
