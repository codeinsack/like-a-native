import { onMounted, Ref, ref } from '@vue/composition-api';
import { fetchWords, addWord } from '@/api/words';
import { Word } from '@/types/words';

export function useWords() {
  const wordEnglish: Ref<string> = ref('');
  const wordGerman: Ref<string> = ref('');
  const words: Ref<Word[]> = ref([]);

  onMounted(async () => {
    const { data } = await fetchWords();
    words.value = data.data;
  });

  const addNewWord = async () => {
    const newWord: Word = {
      name: wordEnglish.value,
      translation: wordGerman.value,
    };
    wordEnglish.value = '';
    wordGerman.value = '';
    await addWord(newWord);
    words.value.push(newWord);
  };

  return {
    words,
    wordEnglish,
    wordGerman,
    addNewWord,
  };
}
