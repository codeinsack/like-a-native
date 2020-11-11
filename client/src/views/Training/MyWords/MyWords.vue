<template>
  <VList>
    <VListItem v-for="attachedWord in words" :key="attachedWord._id">
      <VListItemContent>
        <VListItemTitle>{{ attachedWord.word.word }}</VListItemTitle>
        <VListItemSubtitle>{{ attachedWord.word.word }}</VListItemSubtitle>
      </VListItemContent>
      <VListItemAction>
        <VBtn @click="removeWordFromTraining(attachedWord._id)">
          <VIcon>mdi-sword-cross</VIcon>
        </VBtn>
      </VListItemAction>
    </VListItem>
  </VList>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PartOfSpeechChip from '@/components/PartOfSpeechChip/PartOfSpeechChip.vue';
import { useMyWords } from './MyWords';

export default defineComponent({
  components: {
    PartOfSpeechChip,
  },
  setup() {
    const { words, removeWordFromTraining } = useMyWords();
    return {
      words,
      removeWordFromTraining,
    };
  },
});
</script>

<style scoped lang="scss"></style>
