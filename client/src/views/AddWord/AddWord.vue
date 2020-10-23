<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol cols="6">
        <VTextField
          v-model="word.word"
          label="Name"
          placeholder="Please enter a word"
          outlined
          dense
        />
        <VTextField
          v-model="word.translation"
          label="Translation"
          placeholder="Please enter a translation"
          outlined
          dense
        />
        <VSelect
          v-model="word.partOfSpeech"
          :items="partsOfSpeech"
          label="Part of speech"
          placeholder="Please select a part of speech"
          outlined
          dense
        />
        <VBtn color="primary" outlined @click="addNewWord">Add new word</VBtn>
      </VCol>
      <VCol cols="6">
        <VTextarea v-model="word.definition" outlined label="Definition" />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useAddWord } from './AddWord';

export default defineComponent({
  setup() {
    const { word, addNewWord, partsOfSpeech } = useAddWord();
    return {
      word,
      addNewWord,
      partsOfSpeech,
    };
  },
});
</script>

<style scoped lang="scss"></style>
