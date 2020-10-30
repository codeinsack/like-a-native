import '@/plugins/installCompositionApi';
import Vue from 'vue';
import axios from 'axios';

import router from '@/router/routes';
import { store } from '@/store/store';
import vuetify from './plugins/vuetify';
import App from './App.vue';

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
