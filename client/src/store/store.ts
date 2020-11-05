import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { Modules, RootState } from '@/store/types';
import user from '@/store/modules/user';
import chat from '@/store/modules/chat';

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
  modules: {
    [Modules.USER]: user,
    [Modules.CHAT]: chat,
  },
};

export const store = new Vuex.Store(storeOptions);

export default store;
