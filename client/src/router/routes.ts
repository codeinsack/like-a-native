import Vue from 'vue';
import VueRouter from 'vue-router';

import Words from '@/components/Words/Words.vue';
import Training from '@/components/Training/Training.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/words',
    name: 'words',
    component: Words,
    alias: '/',
  },
  {
    path: '/training',
    name: 'training',
    component: Training,
  },
];

export default new VueRouter({ mode: 'history', routes });
