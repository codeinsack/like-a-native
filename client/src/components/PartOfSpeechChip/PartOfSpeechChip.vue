<template>
  <VChip :color="colors[type]" small dark>
    {{ capitalizeUnderscore(type) }}
  </VChip>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { PartOfSpeech } from '@/types/word';
import { usePartOfSpeechChip } from './PartOfSpeechChip';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<PartOfSpeech>,
    },
  },
  setup() {
    const { capitalizeUnderscore, colors } = usePartOfSpeechChip();
    return {
      capitalizeUnderscore,
      colors,
    };
  },
});
</script>

<style scoped lang="scss"></style>
