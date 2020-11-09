import { ActionTree } from 'vuex';
import { v4 as uuid } from 'uuid';

import { Notification } from '@/types/notification';
import { Mutations, Actions, State, States } from '@/store/modules/notification/types';
import { RootState } from '@/store/types';

const actions: ActionTree<State, RootState> = {
  [Actions.ADD_NOTIFICATION]: ({ commit, state }, targetNotification: Notification) => {
    if (
      state[States.notifications].some(
        (notification: Notification) =>
          notification.message === targetNotification.message &&
          notification.variant === targetNotification.variant &&
          notification.visible
      )
    ) {
      return;
    }
    commit(Mutations.ADD_NOTIFICATION, { _id: uuid(), visible: true, ...targetNotification });
  },
  [Actions.REMOVE_NOTIFICATION]: ({ commit }, targetNotification: Notification) => {
    commit(Mutations.REMOVE_NOTIFICATION, targetNotification);
  },
};

export default actions;
