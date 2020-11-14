import { fetchAttachedWords } from '@/api/attachedWords';

export function useCollectWord() {
  const loadWords = async () => {
    const { data } = await fetchAttachedWords({
      sort: 'learningProgress',
      limit: 5,
    });
    console.log('data', data);
  };

  return {
    loadWords,
  };
}
