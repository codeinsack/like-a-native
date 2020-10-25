import VueRouter, { Route } from 'vue-router';
import { reactive, onMounted, Ref, ref } from '@vue/composition-api';
import { Word, PartOfSpeech } from '@/types/words';
import { updateWord, fetchWordDetails, uploadWordImage } from '@/api/words';
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

export function useAddWord(route: Route, router: VueRouter) {
  const word: Word = reactive({ ...(initialWord as Word) });
  const uploadedImage: Ref<File | null> = ref(null);

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
    if (uploadedImage.value) {
      await uploadWordImage({ wordId: word._id, image: uploadedImage.value });
    }
    await router.push('/words');
  };

  return {
    word,
    saveWord,
    partsOfSpeech,
    uploadedImage,
  };
}
