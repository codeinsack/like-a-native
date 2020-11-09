import { Actions } from '@/store/modules/notification/types';
import { Modules } from '@/store/types';
import { useStore } from '@/uses/useStore';
import { Notification, Variant } from '@/types/notification';

const { useActions } = useStore(Modules.NOTIFICATION);

export function useSnackbar() {
  const showSnackbar = ({ message, variant = Variant.INFO, duration = 5000 }: Notification) => {
    const { ADD_NOTIFICATION } = useActions([Actions.ADD_NOTIFICATION]);
    ADD_NOTIFICATION({
      variant,
      message,
      duration,
    });
  };
  return {
    showSnackbar,
  };
}
