import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api';
import vuetify from './plugins/vuetify';

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
