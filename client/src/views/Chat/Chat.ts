import { v4 as uuid } from 'uuid';
import { Ref, ref, onUnmounted, onMounted, watch } from '@vue/composition-api';
import { useStore } from '@/uses/useStore';
import { Modules } from '@/store/types';
import { States as MessagesStates } from '@/store/modules/chat/types';
import { States as UserStates } from '@/store/modules/user/types';
import { useFormatter } from '@/uses/useFormatter';
import { Socket } from 'socket.io-client';

const { useState: useMessagesState } = useStore(Modules.CHAT);
const { useState: useUserState } = useStore(Modules.USER);

const { messages, users } = useMessagesState([MessagesStates.messages, MessagesStates.users]);
const { user } = useUserState([UserStates.user]);

const { formatDate } = useFormatter();

export function useChat(socket: typeof Socket) {
  const message: Ref<string> = ref('');

  onMounted(() => {
    socket.connect();
  });

  onUnmounted(() => {
    socket.disconnect();
  });

  const sendMessage = () => {
    socket.emit('SEND_MESSAGE', {
      text: message.value,
      userName: user.value.name,
      time: Date.now(),
      _id: uuid(),
    });
    message.value = '';
  };

  const clearAllMessages = () => {
    socket.emit('CLEAR_ALL_MESSAGES');
  };

  return {
    message,
    messages,
    sendMessage,
    formatDate,
    users,
    clearAllMessages,
  };
}
