<template>
  <VApp>
    <Snackbar />
    <template v-if="$route.name === 'login'">
      <RouterView />
    </template>
    <template v-else>
      <VAppBar app clipped-right>
        <div v-if="user" class="d-flex ml-4">
          <VAvatar size="48">
            <img :src="user.avatar" />
          </VAvatar>
          <div class="ml-4">{{ user.name }}</div>
        </div>
        <Tabs />
        <VIcon @click="logout"> mdi-logout </VIcon>
      </VAppBar>
      <VMain>
        <RouterView />
      </VMain>
    </template>
  </VApp>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue';
import Snackbar from '@/components/Snackbar/Snackbar.vue';
import { useApp } from './App';

export default {
  components: {
    Tabs,
    Snackbar,
  },
  setup() {
    const { logout, user } = useApp();
    return {
      logout,
      user,
    };
  },
};
</script>
