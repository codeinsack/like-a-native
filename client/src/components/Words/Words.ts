import { reactive, Ref, ref, watch } from '@vue/composition-api';
import { fetchWords, addWord } from '@/api/words';
import { Word } from '@/types/words';
import { DataOptions } from 'vuetify/types';

const headers = [
  { text: 'Word', value: 'word' },
  { text: 'Translation', value: 'translation' },
  { text: 'Definition', value: 'definition' },
];

const initialWord = {
  word: '',
  translation: '',
  definition: '',
};

export function useWords() {
  const loading: Ref<boolean> = ref(false);
  const options: Ref<DataOptions | null> = ref(null);
  const totalWords: Ref<number> = ref(0);
  const words: Ref<Word[]> = ref([]);
  const word: Word = reactive({ ...initialWord });

  watch(
    options,
    async () => {
      await loadWords();
    },
    { deep: true }
  );

  const loadWords = async () => {
    if (!options.value) return;
    loading.value = true;
    const { data } = await fetchWords({
      page: options.value.page,
      limit: options.value.itemsPerPage,
    });
    if (data) {
      loading.value = false;
      words.value = data.resultList;
      totalWords.value = data.totalCount;
    }
  };

  const addNewWord = async (): Promise<void> => {
    await addWord({ ...word });
    Object.assign(word, initialWord);
    await loadWords();
  };

  return {
    word,
    words,
    addNewWord,
    headers,
    loading,
    options,
    totalWords,
  };
}
