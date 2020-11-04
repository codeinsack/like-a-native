import '@/plugins/installCompositionApi';
import Vue from 'vue';
import axios from 'axios';
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

import router from '@/router/routes';
import { store } from '@/store/store';
import { Actions } from '@/store/modules/user/types';
import { useStore } from '@/uses/useStore';
import { Modules } from '@/store/types';
import vuetify from './plugins/vuetify';
import App from './App.vue';

const { useActions } = useStore(Modules.USER);
const { LOGOUT } = useActions([Actions.LOGOUT]);

const socket = io();
Vue.use(VueSocketIOExt, socket, { store });

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      LOGOUT();
    }
    return Promise.reject(error);
  }
);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
