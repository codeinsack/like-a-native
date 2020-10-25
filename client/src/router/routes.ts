import Vue from 'vue';
import VueRouter from 'vue-router';

import Words from '@/views/Words/Words.vue';
import UpdateWord from '@/views/UpdateWord/UpdateWord.vue';
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
    path: '/words/update/:id',
    name: 'update-word',
    component: UpdateWord,
  },
  {
    path: '/training',
    name: 'training',
    component: Training,
  },
];

export default new VueRouter({ mode: 'history', routes });
