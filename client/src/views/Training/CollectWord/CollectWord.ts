import { fetchAttachedWords } from '@/api/attachedWords';
import { ref, Ref } from '@vue/composition-api';
import { AttachedWord } from '@/types/word';
import { head } from 'lodash';

export function useCollectWord() {
  const words: Ref<Array<AttachedWord>> = ref([]);
  const isTrainingStarted: Ref<boolean> = ref(false);
  const userAnswer: Ref<string> = ref('');
  const showResult: Ref<boolean> = ref(false);
  const isCorrect: Ref<boolean> = ref(false);
  const currentStep: Ref<number> = ref(1);

  const loadWords = async () => {
    const { data } = await fetchAttachedWords({
      sort: 'learningProgress',
      limit: 5,
    });
    words.value = data.resultList;
    isTrainingStarted.value = true;
  };

  const checkAnswer = (word: string) => {
    showResult.value = true;
    isCorrect.value = userAnswer.value === word;
    userAnswer.value = '';
  };

  const moveToNextWord = () => {
    showResult.value = false;
    currentStep.value += 1;
  };

  return {
    loadWords,
    isTrainingStarted,
    words,
    head,
    userAnswer,
    checkAnswer,
    showResult,
    isCorrect,
    moveToNextWord,
    currentStep,
  };
}
