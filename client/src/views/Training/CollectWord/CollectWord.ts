import { fetchAttachedWords } from '@/api/attachedWords';
import { ref, Ref } from '@vue/composition-api';
import { AttachedWord } from '@/types/word';

export function useCollectWord() {
  const words: Ref<Array<AttachedWord>> = ref([]);
  const isTrainingStarted: Ref<boolean> = ref(false);

  const loadWords = async () => {
    const { data } = await fetchAttachedWords({
      sort: 'learningProgress',
      limit: 5,
    });
    words.value = data.resultList;
    isTrainingStarted.value = true;
  };

  return {
    loadWords,
    isTrainingStarted,
    words,
  };
}
