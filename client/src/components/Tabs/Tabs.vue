<template>
  <VTabs right class="mr-5">
    <VTab v-for="item in tabs" :key="item.tab" :to="item.link">
      {{ item.tab }}
    </VTab>
  </VTabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { tab: 'Words', link: '/words' },
        { tab: 'Training', link: '/training/my-words' },
        { tab: 'Chat', link: '/chat' },
      ],
    };
  },
};
</script>
