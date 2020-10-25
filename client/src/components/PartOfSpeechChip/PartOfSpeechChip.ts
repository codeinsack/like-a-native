import { useFormatter } from '@/uses/useFormatter';
import { PartOfSpeech } from '@/types/words';

const { capitalizeUnderscore } = useFormatter();

const colors = {
  [PartOfSpeech.noun]: 'green',
  [PartOfSpeech.verb]: 'red',
  [PartOfSpeech.adjective]: 'purple',
};

export function usePartOfSpeechChip() {
  return {
    capitalizeUnderscore,
    colors,
  };
}
