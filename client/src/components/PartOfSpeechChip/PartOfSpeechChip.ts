import { useFormatter } from '@/uses/useFormatter';
import { PartOfSpeech } from '@/types/word';

const { capitalizeUnderscore } = useFormatter();

const colors = {
  [PartOfSpeech.noun]: 'green',
  [PartOfSpeech.verb]: 'blue',
  [PartOfSpeech.adjective]: 'purple',
  [PartOfSpeech.adverb]: 'pink',
};

export function usePartOfSpeechChip() {
  return {
    capitalizeUnderscore,
    colors,
  };
}
