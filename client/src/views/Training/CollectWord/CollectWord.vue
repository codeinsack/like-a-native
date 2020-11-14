<template>
  <VContainer fill-height fluid>
    <VRow justify="center">
      <VCol cols="4">
        <VBtn color="primary" outlined @click="loadWords">Start training</VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useCollectWord } from './CollectWord';

export default defineComponent({
  setup() {
    const { loadWords } = useCollectWord();
    return {
      loadWords,
    };
  },
});
</script>

<style scoped lang="scss"></style>
