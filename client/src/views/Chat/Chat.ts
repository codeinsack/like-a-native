import { Ref, ref } from '@vue/composition-api';
import { useStore } from '@/uses/useStore';
import { Modules } from '@/store/types';
import { States as MessagesStates } from '@/store/modules/messages/types';
import { States as UserStates } from '@/store/modules/user/types';
import { useFormatter } from '@/uses/useFormatter';

const { useState: useMessagesState } = useStore(Modules.MESSAGES);
const { useState: useUserState } = useStore(Modules.USER);

const { messages } = useMessagesState([MessagesStates.messages]);
const { user } = useUserState([UserStates.user]);

const { formatDate } = useFormatter();

export function useChat(socket: any) {
  const message: Ref<string> = ref('');

  const sendMessage = () => {
    socket.emit('CLIENT_MESSAGE', {
      text: message.value,
      userName: user.value.name,
      time: Date.now(),
    });
    message.value = '';
  };

  return {
    message,
    messages,
    sendMessage,
    formatDate,
  };
}
