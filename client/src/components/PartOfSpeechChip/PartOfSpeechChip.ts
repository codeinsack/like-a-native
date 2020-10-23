import { useFormatter } from '@/uses/useFormatter';
import { PartOfSpeech } from '@/types/words';

const { capitalizeUnderscore } = useFormatter();

const colors = {
  [PartOfSpeech.NOUN]: 'green',
  [PartOfSpeech.VERB]: 'red',
  [PartOfSpeech.ADJECTIVE]: 'purple',
};

export function usePartOfSpeechChip() {
  return {
    capitalizeUnderscore,
    colors,
  };
}
