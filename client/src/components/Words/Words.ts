import { onMounted } from '@vue/composition-api';
import { fetchWords } from '@/api/words';

const words = [
  {
    name: 'man',
    translation: 'der Mann',
  },
  {
    name: 'child',
    translation: 'das Kind',
  },
  {
    name: 'woman',
    translation: 'die Frau',
  },
];

export function useWords() {
  onMounted(async () => {
    const { data } = await fetchWords();
    console.log('data', data);
  });

  return {
    words,
  };
}
