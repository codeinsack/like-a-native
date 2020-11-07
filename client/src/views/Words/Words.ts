import VueRouter from 'vue-router';
import { debounce, map } from 'lodash';
import { Ref, ref, watch } from '@vue/composition-api';
import { fetchWords, createNewWord } from '@/api/words';
import { PartOfSpeech, Word } from '@/types/word';
import { DataOptions } from 'vuetify/types';
import { useFormatter } from '@/uses/useFormatter';

const headers = [
  { text: 'Word', value: 'word' },
  { text: 'Translation', value: 'translation' },
  { text: 'Part of speech', value: 'partOfSpeech' },
  { text: 'Image', value: 'image' },
  { text: 'In training', value: 'inTraining' },
  { text: '', value: 'actions' },
];

const { capitalizeUnderscore } = useFormatter();

const partsOfSpeech = map(PartOfSpeech, (key) => ({
  value: key,
  text: capitalizeUnderscore(key),
}));

export function useWords(router: VueRouter) {
  const loading: Ref<boolean> = ref(false);
  const options: Ref<DataOptions | null> = ref(null);
  const search: Ref<string | null> = ref(null);
  const partOfSpeech: Ref<PartOfSpeech | null> = ref(null);
  const totalWords: Ref<number> = ref(0);
  const words: Ref<Word[]> = ref([]);

  watch(
    options,
    async () => {
      await loadWords();
    },
    { deep: true }
  );

  watch(search, async () => {
    await loadWords();
  });

  watch(partOfSpeech, async () => {
    await loadWords();
  });

  const loadWords = debounce(async () => {
    if (!options.value) return;
    const [desc] = options.value.sortDesc;
    const [by] = options.value.sortBy;
    const sort = by ? `${desc ? '-' : ''}${by}` : null;
    loading.value = true;
    const { data } = await fetchWords({
      page: options.value.page,
      limit: options.value.itemsPerPage,
      sort,
      search: search.value,
      partOfSpeech: partOfSpeech.value,
    });
    if (data) {
      loading.value = false;
      words.value = data.resultList;
      totalWords.value = data.totalCount;
    }
  }, 300);

  const addNewWord = async () => {
    const { data } = await createNewWord({
      word: search.value,
    } as Word);
    if (data) {
      await router.push(`/words/update/${data._id}`);
    }
  };

  const viewWordDetails = async (word: Word) => {
    await router.push(`/words/details/${word._id}`);
  };

  const editWord = async (word: Word) => {
    await router.push(`/words/update/${word._id}`);
  };

  const deleteWord = () => {
    // delete
  };

  return {
    words,
    headers,
    loading,
    options,
    totalWords,
    search,
    partOfSpeech,
    partsOfSpeech,
    addNewWord,
    viewWordDetails,
    editWord,
    deleteWord,
  };
}
