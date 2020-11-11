<template>
  <VContainer> COLLECT WORD </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useCollectWord } from './CollectWord';

export default defineComponent({
  setup() {
    const { temp } = useCollectWord();
    return {
      temp,
    };
  },
});
</script>

<style scoped lang="scss"></style>
