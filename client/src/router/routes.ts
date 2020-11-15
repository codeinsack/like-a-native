import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';

import Words from '@/views/Words/Words.vue';
import WordDetails from '@/views/WordDetails/WordDetails.vue';
import UpdateWord from '@/views/UpdateWord/UpdateWord.vue';
import Training from '@/views/Training/Training.vue';
import MyWords from '@/views/Training/MyWords/MyWords.vue';
import GuessByDescription from '@/views/Training/GuessByDescription/GuessByDescription.vue';
import CollectWord from '@/views/Training/CollectWord/CollectWord.vue';
import Login from '@/views/Login/Login.vue';
import Chat from '@/views/Chat/Chat.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/words',
    component: Words,
    alias: '/',
    meta: {
      protected: true,
    },
  },
  {
    path: '/words/details/:id',
    component: WordDetails,
    meta: {
      protected: true,
    },
  },
  {
    path: '/words/update/:id',
    component: UpdateWord,
    meta: {
      protected: true,
    },
  },
  {
    path: '/training',
    component: Training,
    meta: {
      protected: true,
    },
    children: [
      {
        path: 'my-words',
        name: 'myWords',
        component: MyWords,
      },
      {
        path: 'guess-by-description',
        name: 'guessByDescription',
        component: GuessByDescription,
      },
      {
        path: 'collect-word',
        name: 'collectWord',
        component: CollectWord,
      },
    ],
  },
  {
    path: '/chat',
    component: Chat,
    meta: {
      protected: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({ mode: 'history', routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.protected)) {
    if (Cookies.getJSON('user')) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
