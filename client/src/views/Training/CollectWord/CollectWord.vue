<template>
  <VContainer> GUESS WORD </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useGuessWord } from './CollectWord';

export default defineComponent({
  setup() {
    const { temp } = useGuessWord();
    return {
      temp,
    };
  },
});
</script>

<style scoped lang="scss"></style>
