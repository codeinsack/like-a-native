<template>
  <VApp>
    <VAppBar app clipped-right>
      <Tabs />
      <VIcon @click="deleteToken"> mdi-logout </VIcon>
    </VAppBar>
    <VContent>
      <RouterView />
    </VContent>
  </VApp>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue';
import { useApp } from './App';

export default {
  components: {
    Tabs,
  },
  setup() {
    const { deleteToken } = useApp();
    return {
      deleteToken,
    };
  },
};
</script>
