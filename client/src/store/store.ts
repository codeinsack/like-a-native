import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { Modules, RootState } from '@/store/types';
import user from '@/store/modules/user';
import messages from '@/store/modules/messages';

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
  modules: {
    [Modules.USER]: user,
    [Modules.MESSAGES]: messages,
  },
};

export const store = new Vuex.Store(storeOptions);

export default store;
