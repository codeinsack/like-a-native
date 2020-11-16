import { Route } from 'vue-router';
import { onMounted, Ref, ref } from '@vue/composition-api';
import { Word } from '@/types/word';
import { fetchWordDetails } from '@/api/words';

export function useWordDetails(route: Route) {
  const word: Ref<Word | null> = ref(null);

  onMounted(async () => {
    const {
      params: { id },
    } = route;
    const { data } = await fetchWordDetails(id);
    if (data.content) {
      word.value = data.content;
    }
  });

  return {
    word,
  };
}
