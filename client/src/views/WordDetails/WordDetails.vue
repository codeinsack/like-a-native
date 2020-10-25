<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol v-if="word">
        <VAvatar class="rounded-lg ma-1" width="600" height="400" tile>
          <img
            :src="word.image ? `/images/${word.image}` : require('@/assets/no-image.png')"
            alt=""
          />
        </VAvatar>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useWordDetails } from './WordDetails';

export default defineComponent({
  setup(props, { root }) {
    const { word } = useWordDetails(root.$route);
    return {
      word,
    };
  },
});
</script>

<style scoped lang="scss"></style>
