<template>
  <VApp>
    <VAppBar app clipped-right>
      <Tabs />
    </VAppBar>
    <VContent>
      <RouterView />
    </VContent>
  </VApp>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue';

export default {
  components: {
    Tabs,
  },
};
</script>
