<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol cols="6">
        <VList>
          <VListItem v-for="(word, index) in words" :key="index">
            <VListItemContent>
              <VListItemTitle v-text="word.name" />
              <VListItemSubtitle v-text="word.translation" />
            </VListItemContent>
          </VListItem>
        </VList>
      </VCol>
      <VCol cols="6">
        <VTextField
          v-model="wordEnglish"
          label="Name"
          placeholder="Please enter a word"
          outlined
          dense
        />
        <VTextField
          v-model="wordGerman"
          label="Translation"
          placeholder="Please enter a translation"
          outlined
          dense
        />
        <VBtn color="primary" outlined @click="addNewWord">Add new word</VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useWords } from './Words';

export default defineComponent({
  setup() {
    const { words, wordEnglish, wordGerman, addNewWord } = useWords();
    return {
      words,
      wordEnglish,
      wordGerman,
      addNewWord,
    };
  },
});
</script>

<style scoped lang="scss"></style>
