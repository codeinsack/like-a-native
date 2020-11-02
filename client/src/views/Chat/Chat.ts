import { Ref, ref } from '@vue/composition-api';
import { useStore } from '@/uses/useStore';
import { Modules } from '@/store/types';
import { States } from '@/store/modules/messages/types';
import { useFormatter } from '@/uses/useFormatter';

const { useState } = useStore(Modules.MESSAGES);

const { messages } = useState([States.messages]);

const { formatDate } = useFormatter();

export function useChat(socket: any) {
  const message: Ref<string> = ref('');

  const sendMessage = () => {
    socket.emit('CLIENT_MESSAGE', message.value);
    message.value = '';
  };

  return {
    message,
    messages,
    sendMessage,
    formatDate,
  };
}
