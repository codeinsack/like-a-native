<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol class="d-flex child-flex" cols="6">
        <VCard flat tile class="d-flex rounded-lg">
          <YoutubeMedia player-width="500" player-height="300" video-id="ylzYfoisiAg" />
        </VCard>
      </VCol>
      <VCol class="d-flex child-flex" cols="6">
        <VCard flat tile class="d-flex rounded-lg">
          <YoutubeMedia player-width="500" player-height="300" video-id="_JBzbQCgXwQ" />
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol class="d-flex child-flex" cols="6">
        <VCard flat tile class="d-flex rounded-lg">
          <YoutubeMedia player-width="500" player-height="300" video-id="V8XybEzd9qQ" />
        </VCard>
      </VCol>
      <VCol class="d-flex child-flex" cols="6">
        <VCard flat tile class="d-flex rounded-lg">
          <YoutubeMedia player-width="500" player-height="300" video-id="dEraG4YhtFc" />
        </VCard>
      </VCol>
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
