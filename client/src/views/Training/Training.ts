import { onMounted, Ref, ref } from '@vue/composition-api';
import { fetchAttachedWords } from '@/api/users';
import { Word } from '@/types/word';

export function useTraining() {
  const words: Ref<Word[]> = ref([]);

  onMounted(async () => {
    const { data } = await fetchAttachedWords();
    words.value = data;
  });

  return {
    words,
  };
}
