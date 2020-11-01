<template>
  <VContainer fill-height>
    <VRow justify="center">
      <VCol cols="4"> CHAT </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useChat } from './Chat';

export default defineComponent({
  setup() {
    const { message } = useChat();
    return {
      message,
    };
  },
});
</script>

<style scoped lang="scss"></style>
