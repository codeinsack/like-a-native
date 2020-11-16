import VueRouter, { Route } from 'vue-router';
import { reactive, onMounted, Ref, ref } from '@vue/composition-api';
import { Word, PartOfSpeech, Article } from '@/types/word';
import { updateWord, fetchWordDetails, uploadWordImage } from '@/api/words';
import { useFormatter } from '@/uses/useFormatter';
import { map } from 'lodash';

const initialWord = {
  word: '',
  translation: '',
  partOfSpeech: '',
  definitions: [],
  examples: [],
  verbForm: {
    thirdPerson: '',
    pastSimple: '',
    pastParticiple: '',
  },
  article: '',
  pluralForm: '',
};

const { capitalizeUnderscore } = useFormatter();

const partsOfSpeech = (Object.keys(PartOfSpeech) as Array<keyof typeof PartOfSpeech>).map(
  (key) => ({
    value: key,
    text: capitalizeUnderscore(PartOfSpeech[key]),
  })
);

const articles = map(Article, (article) => article);

export function useUpdateWord(route: Route, router: VueRouter) {
  const word: Word = reactive({ ...(initialWord as any) });
  const uploadedImage: Ref<File | null> = ref(null);

  onMounted(async () => {
    const {
      params: { id },
    } = route;
    const { data } = await fetchWordDetails(id);
    if (data.content) {
      Object.assign(word, data.content);
    }
  });

  const saveWord = async (): Promise<void> => {
    await updateWord({ ...word });
    if (uploadedImage.value) {
      await uploadWordImage({ wordId: word._id, image: uploadedImage.value });
    }
    await router.push('/words');
  };

  const changeDefinitions = (updatedDefinitions: Array<string>) => {
    word.definitions = updatedDefinitions;
  };

  const changeExamples = (updatedExamples: Array<string>) => {
    word.examples = updatedExamples;
  };

  return {
    word,
    saveWord,
    partsOfSpeech,
    uploadedImage,
    changeDefinitions,
    changeExamples,
    PartOfSpeech,
    articles,
  };
}
