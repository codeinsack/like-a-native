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
  const wordEnglish: Ref<string> = ref('');
  const wordGerman: Ref<string> = ref('');
  const definition: Ref<string> = ref('');
  const words: Ref<Word[]> = ref([]);

  watch(
    options,
    async (value) => {
      loading.value = true;
      const { data } = await fetchWords();
      loading.value = false;
      words.value = data.data;
      console.log('options', value);
    },
    { deep: true }
  );

  const addNewWord = async () => {
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
  };
}
