<template>
  <VApp>
    <template v-if="$route.name === 'login'">
      <RouterView />
    </template>
    <template v-else>
      <VAppBar app clipped-right>
        <div v-if="user" class="d-flex">
          <VIcon class="mr-3" large>mdi-account-circle</VIcon>
          <div>{{ user.name }}</div>
        </div>
        <Tabs />
        <VIcon @click="deleteToken"> mdi-logout </VIcon>
      </VAppBar>
      <VContent>
        <RouterView />
      </VContent>
    </template>
  </VApp>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue';
import { useApp } from './App';

export default {
  components: {
    Tabs,
  },
  setup(props, { root }) {
    const { deleteToken, user } = useApp(root.$router);
    return {
      deleteToken,
      user,
    };
  },
};
</script>
