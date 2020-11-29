<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol v-if="word" cols="6">
        <div class="d-flex align-center flex-column">
          <div class="display-1">{{ word.word }}</div>
          <div class="headline grey--text text--darken-2">{{ word.translation }}</div>
        </div>
        <VAvatar class="rounded-lg ma-1" width="400" height="300" tile>
          <img
            v-if="head(word.images)"
            :src="`/api/v1/words/image/${head(word.images).name}`"
            alt=""
          />
          <img v-else :src="require('@/assets/no-image.png')" alt="" />
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
    const { word, head } = useWordDetails(root.$route);
    return {
      word,
      head,
    };
  },
});
</script>

<style scoped lang="scss"></style>
