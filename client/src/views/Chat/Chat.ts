import { v4 as uuid } from 'uuid';
import { Ref, ref, watch, onUnmounted } from '@vue/composition-api';
import { useStore } from '@/uses/useStore';
import { Modules } from '@/store/types';
import { States as MessagesStates } from '@/store/modules/chat/types';
import { States as UserStates } from '@/store/modules/user/types';
import { useFormatter } from '@/uses/useFormatter';
import { Socket } from 'socket.io-client';
import { User } from '@/types/user';

const { useState: useMessagesState } = useStore(Modules.CHAT);
const { useState: useUserState } = useStore(Modules.USER);

const { messages, users } = useMessagesState([MessagesStates.messages, MessagesStates.users]);
const { user } = useUserState([UserStates.user]);

const { formatDate } = useFormatter();

export function useChat(socket: typeof Socket) {
  const message: Ref<string> = ref('');

  onUnmounted(() => {
    socket.emit('USER_LEFT', user.value._id);
  });

  watch(
    user,
    (usr: User) => {
      if (usr) {
        socket.emit('USER_JOINED', {
          _id: usr._id,
          name: usr.name,
          role: usr.role,
        });
      }
    },
    { immediate: true }
  );

  const sendMessage = () => {
    socket.emit('SEND_MESSAGE', {
      text: message.value,
      userName: user.value.name,
      time: Date.now(),
      _id: uuid(),
    });
    message.value = '';
  };

  return {
    message,
    messages,
    sendMessage,
    formatDate,
    users,
  };
}
