import { Ref, ref } from '@vue/composition-api';

export function useChat() {
  const message: Ref<string> = ref('');

  return {
    message,
  };
}
