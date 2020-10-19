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
  return {
    words,
  };
}
