const tabs = [
  ['mdi-email', 'My Words', 'myWords'],
  ['mdi-account-supervisor-circle', 'Guess by description', 'guessByDescription'],
  ['mdi-clock-start', 'Collect Word', 'collectWord'],
];

export function useTraining() {
  return {
    tabs,
  };
}
