<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol class="d-flex child-flex" cols="6">
        <VCard flat tile class="d-flex rounded-lg">
          <iframe
            frameborder="0"
            height="300"
            width="100%"
            :src="`https://www.youtube.com/embed/ylzYfoisiAg`"
            allowfullscreen
          >
          </iframe>
        </VCard>
      </VCol>
      <VCol class="d-flex child-flex" cols="6">
        <VCard flat tile class="d-flex rounded-lg">
          <iframe
            frameborder="0"
            height="300"
            width="100%"
            :src="`https://www.youtube.com/embed/_JBzbQCgXwQ`"
            allowfullscreen
          >
          </iframe>
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol class="d-flex child-flex" cols="6">
        <VCard flat tile class="d-flex rounded-lg">
          <iframe
            frameborder="0"
            height="300"
            width="100%"
            :src="`https://www.youtube.com/embed/V8XybEzd9qQ`"
            allowfullscreen
          >
          </iframe>
        </VCard>
      </VCol>
      <VCol class="d-flex child-flex" cols="6">
        <VCard flat tile class="d-flex rounded-lg">
          <iframe
            frameborder="0"
            height="300"
            width="100%"
            :src="`https://www.youtube.com/embed/dEraG4YhtFc`"
            allowfullscreen
          >
          </iframe>
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
