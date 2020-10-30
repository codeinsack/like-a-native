import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import axios from 'axios';

import router from '@/router/routes';
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

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
