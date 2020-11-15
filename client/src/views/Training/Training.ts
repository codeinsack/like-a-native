const tabs = [
  ['mdi-format-list-bulleted-type', 'My Words', 'myWords'],
  ['mdi-comment-question-outline', 'Guess by description', 'guessByDescription'],
  ['mdi-drag', 'Collect Word', 'collectWord'],
];

export function useTraining() {
  return {
    tabs,
  };
}
