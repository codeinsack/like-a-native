import { Ref, ref, watch } from '@vue/composition-api';
import { fetchWords, addWord } from '@/api/words';
import { Word } from '@/types/words';
import { DataOptions } from 'vuetify/types';

const headers = [
  { text: 'Word', value: 'name' },
  { text: 'Translation', value: 'translation' },
  { text: 'Definition', value: 'definition' },
];

export function useWords() {
  const loading: Ref<boolean> = ref(false);
  const options: Ref<DataOptions | null> = ref(null);
  const totalWords: Ref<number> = ref(0);
  const wordEnglish: Ref<string> = ref('');
  const wordGerman: Ref<string> = ref('');
  const definition: Ref<string> = ref('');
  const words: Ref<Word[]> = ref([]);

  watch(
    options,
    async (value) => {
      if (!value) return;
      loading.value = true;
      const { data } = await fetchWords({ page: value.page, limit: value.itemsPerPage });
      if (data) {
        loading.value = false;
        words.value = data.resultList;
        totalWords.value = data.totalCount;
      }
      console.log('options', value);
    },
    { deep: true }
  );

  const addNewWord = async (): Promise<void> => {
    const newWord: Word = {
      name: wordEnglish.value,
      translation: wordGerman.value,
      definition: definition.value,
    };
    wordEnglish.value = '';
    wordGerman.value = '';
    definition.value = '';
    await addWord(newWord);
    words.value.push(newWord);
  };

  return {
    words,
    wordEnglish,
    wordGerman,
    addNewWord,
    headers,
    definition,
    loading,
    options,
    totalWords,
  };
}
