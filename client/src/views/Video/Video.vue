<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol class="d-flex flex-column align-center" cols="6"> VIDEO </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useVideo } from './Video';

export default defineComponent({
  setup() {
    const { head } = useVideo();
    return {
      head,
    };
  },
});
</script>

<style scoped lang="scss"></style>
