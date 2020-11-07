<template>
  <VContainer>
    <VRow>
      <VCol>
        <div v-for="word in words" :key="word._id">
          {{ JSON.stringify(word) }}
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PartOfSpeechChip from '@/components/PartOfSpeechChip/PartOfSpeechChip.vue';
import { useTraining } from './Training';

export default defineComponent({
  components: {
    PartOfSpeechChip,
  },
  setup() {
    const { words } = useTraining();
    return {
      words,
    };
  },
});
</script>

<style scoped lang="scss"></style>
