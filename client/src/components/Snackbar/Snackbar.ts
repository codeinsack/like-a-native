import { Notification } from '@/types/notification';
import { Modules } from '@/store/types';
import { Actions, States } from '@/store/modules/notification/types';
import { useStore } from '@/uses/useStore';

const { useState, useActions } = useStore(Modules.NOTIFICATION);

export function useSnackbar() {
  const { notifications } = useState([States.notifications]);

  const { REMOVE_NOTIFICATION } = useActions([Actions.REMOVE_NOTIFICATION]);

  const snackbarClose = (notification: Notification) => {
    REMOVE_NOTIFICATION(notification);
  };

  return {
    notifications,
    snackbarClose,
  };
}
