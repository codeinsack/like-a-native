import { Notification } from '@/types/notification';
import { State, Mutations } from '@/store/modules/notification/types';

const mutations = {
  [Mutations.ADD_NOTIFICATION]: (state: State, targetNotification: Notification) => {
    state.notifications.push({ ...targetNotification });
  },
  [Mutations.REMOVE_NOTIFICATION]: (state: State, targetNotification: Notification) => {
    state.notifications = state.notifications.filter(
      (notification) => notification._id !== targetNotification._id
    );
  },
};

export default mutations;
