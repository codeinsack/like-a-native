import Vue from 'vue';
import VueRouter from 'vue-router';

import Words from '@/views/Words/Words.vue';
import WordDetails from '@/views/WordDetails/WordDetails.vue';
import UpdateWord from '@/views/UpdateWord/UpdateWord.vue';
import Training from '@/views/Training/Training.vue';
import Login from '@/views/Login/Login.vue';
import Chat from '@/views/Chat/Chat.vue';
import { useStore } from '@/uses/useStore';
import { Modules } from '@/store/types';
import { States } from '@/store/modules/user/types';

const { useState } = useStore(Modules.USER);

const { user } = useState([States.user]);

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
    if (user.value) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
