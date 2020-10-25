import { debounce } from 'lodash';
import { Ref, ref, watch } from '@vue/composition-api';
import { fetchWords } from '@/api/words';
import { PartOfSpeech, Word } from '@/types/words';
import { DataOptions } from 'vuetify/types';
import { useFormatter } from '@/uses/useFormatter';

const headers = [
  { text: 'Word', value: 'word' },
  { text: 'Translation', value: 'translation' },
  { text: 'Part of speech', value: 'partOfSpeech' },
  { text: 'Definition', value: 'definition' },
  { text: 'Image', value: 'image' },
];

const { capitalizeUnderscore } = useFormatter();

const partsOfSpeech = (Object.keys(PartOfSpeech) as Array<keyof typeof PartOfSpeech>).map(
  (key) => ({
    value: key,
    text: capitalizeUnderscore(PartOfSpeech[key]),
  })
);

export function useWords() {
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

  return {
    words,
    headers,
    loading,
    options,
    totalWords,
    search,
    partOfSpeech,
    partsOfSpeech,
  };
}
