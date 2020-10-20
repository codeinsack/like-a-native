<template>
  <VContainer class="mt-12">
    <VRow>
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
      <VCol cols="6">
        <VTextarea v-model="definition" outlined label="Definition" />
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <VDataTable :options.sync="options" :headers="headers" :items="words" :loading="loading" />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useWords } from './Words';

export default defineComponent({
  setup() {
    const {
      headers,
      words,
      wordEnglish,
      wordGerman,
      definition,
      addNewWord,
      loading,
      options,
    } = useWords();
    return {
      headers,
      words,
      wordEnglish,
      wordGerman,
      definition,
      addNewWord,
      loading,
      options,
    };
  },
});
</script>

<style scoped lang="scss"></style>
