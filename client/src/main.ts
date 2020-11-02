import '@/plugins/installCompositionApi';
import Vue from 'vue';
import axios from 'axios';
import VueSocketIO from 'vue-socket.io';

import router from '@/router/routes';
import { store } from '@/store/store';
import vuetify from './plugins/vuetify';
import App from './App.vue';

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: 'http://localhost:8000',
    vuex: {
      store,
      mutationPrefix: 'SOCKET_',
    },
  })
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      await router.push('/login');
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
