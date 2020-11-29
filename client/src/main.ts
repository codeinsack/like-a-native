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
import { useSnackbar } from '@/uses/useSnackbar';
import { Variant } from '@/types/notification';
import GAuth from 'vue-google-oauth2';
import vuetify from './plugins/vuetify';
import App from './App.vue';

const gauthOption = {
  clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account',
};
Vue.use(GAuth, gauthOption);

const { useActions } = useStore(Modules.USER);
const { LOGOUT } = useActions([Actions.LOGOUT]);

const { showSnackbar } = useSnackbar();

const socket = io({
  autoConnect: false,
});
Vue.use(VueSocketIOExt, socket, { store });

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    showSnackbar({
      message: error.response.data.message,
      variant: Variant.ERROR,
    });
    if (error.response.status === 401) {
      LOGOUT();
    }
    return Promise.reject(error.response);
  }
);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
