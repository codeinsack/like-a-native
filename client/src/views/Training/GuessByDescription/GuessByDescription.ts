import { fetchAttachedWords, updateProgress } from '@/api/attachedWords';
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
  const answers: Ref<Array<boolean>> = ref([]);
  const isFinish: Ref<boolean> = ref(false);

  const loadWords = async () => {
    const { data } = await fetchAttachedWords({
      sort: 'learningProgress',
      limit: 5,
    });
    if (data.content) {
      words.value = data.content.resultList;
      isTrainingStarted.value = true;
    }
  };

  const checkAnswer = async (attachedWord: AttachedWord) => {
    const correct = userAnswer.value === attachedWord.word.word;
    showResult.value = true;
    isCorrect.value = correct;
    answers.value.push(correct);
    userAnswer.value = '';
    const updatedProgress = attachedWord.learningProgress + (correct ? 50 : 10);
    await updateProgress({
      id: attachedWord._id,
      progress: updatedProgress > 100 ? 100 : updatedProgress,
    });
  };

  const moveToNextWord = () => {
    showResult.value = false;
    currentStep.value += 1;
    if (currentStep.value > words.value.length) {
      isFinish.value = true;
      isTrainingStarted.value = false;
    }
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
    answers,
    isFinish,
  };
}
