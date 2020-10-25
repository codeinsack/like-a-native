import Vue from 'vue';
import VueRouter from 'vue-router';

import Words from '@/views/Words/Words.vue';
import WordDetails from '@/views/WordDetails/WordDetails.vue';
import UpdateWord from '@/views/UpdateWord/UpdateWord.vue';
import Training from '@/views/Training/Training.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/words',
    component: Words,
    alias: '/',
  },
  {
    path: '/words/details/:id',
    component: WordDetails,
  },
  {
    path: '/words/update/:id',
    component: UpdateWord,
  },
  {
    path: '/training',
    component: Training,
  },
];

export default new VueRouter({ mode: 'history', routes });
