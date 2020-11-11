import { onMounted, Ref, ref } from '@vue/composition-api';
import { fetchAttachedWords, detachWord } from '@/api/attachedWords';
import { AttachedWord } from '@/types/word';

export function useMyWords() {
  const words: Ref<AttachedWord[]> = ref([]);

  onMounted(async () => {
    await loadAttachedWords();
  });

  const loadAttachedWords = async () => {
    const { data } = await fetchAttachedWords();
    words.value = data.resultList;
  };

  const removeWordFromTraining = async (relationId: string) => {
    await detachWord(relationId);
    await loadAttachedWords();
  };

  return {
    words,
    removeWordFromTraining,
  };
}
