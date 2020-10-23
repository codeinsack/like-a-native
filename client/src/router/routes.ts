import Vue from 'vue';
import VueRouter from 'vue-router';

import Words from '@/views/Words/Words.vue';
import AddWord from '@/views/AddWord/AddWord.vue';
import Training from '@/views/Training/Training.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/words',
    name: 'words',
    component: Words,
    alias: '/',
  },
  {
    path: '/words/add',
    name: 'add-word',
    component: AddWord,
  },
  {
    path: '/training',
    name: 'training',
    component: Training,
  },
];

export default new VueRouter({ mode: 'history', routes });
