import mutations from './mutations';
import actions from './actions';

export const state = {
  notifications: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
