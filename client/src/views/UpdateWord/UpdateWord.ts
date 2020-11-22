import VueRouter, { Route } from 'vue-router';
import { reactive, onMounted, Ref, ref } from '@vue/composition-api';
import { Word, PartOfSpeech, Article } from '@/types/word';
import { updateWord, fetchWordDetails, uploadWordImage, deleteWordImage } from '@/api/words';
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
  comparativeForm: {
    comparative: '',
    superlative: '',
  },
  article: '',
  pluralForm: '',
  genitiveForm: '',
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
  const refImage: Ref<any> = ref(null);

  onMounted(async () => {
    await loadWordDetails();
  });

  const loadWordDetails = async () => {
    const {
      params: { id },
    } = route;
    const { data } = await fetchWordDetails(id);
    if (data.content) {
      Object.assign(word, data.content);
    }
  };

  const saveWord = async (): Promise<void> => {
    await updateWord({ ...word });
    await router.push('/words');
  };

  const changeDefinitions = (updatedDefinitions: Array<string>) => {
    word.definitions = updatedDefinitions;
  };

  const changeExamples = (updatedExamples: Array<string>) => {
    word.examples = updatedExamples;
  };

  const deleteImage = async (wordId, imageName) => {
    await deleteWordImage({
      wordId,
      imageName,
    });
    await loadWordDetails();
  };

  const uploadImage = async (image: File) => {
    await uploadWordImage({ wordId: word._id, image });
    await loadWordDetails();
  };

  const openFilesDialog = async () => {
    refImage.value?.$refs.input.click();
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
    deleteImage,
    uploadImage,
    openFilesDialog,
    refImage,
  };
}
