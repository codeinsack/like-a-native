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
        <VBtn color="primary" outlined @click="addNewWord">Add new word</VBtn>
      </VCol>
      <VCol cols="6">
        <VTextarea v-model="word.definition" outlined label="Definition" />
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <VDataTable
          :headers="headers"
          :items="words"
          :options.sync="options"
          :server-items-length="totalWords"
          :loading="loading"
          :footer-props="{ showFirstLastPage: true, itemsPerPageOptions: [5, 10, 25, 50] }"
        >
          <template #top>
            <VRow class="d-flex justify-end align-center">
              <VCol cols="4">
                <VTextField class="mx-4" label="Search" append-icon="mdi-magnify" clearable />
              </VCol>
            </VRow>
          </template>
        </VDataTable>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useWords } from './Words';

export default defineComponent({
  setup() {
    const { headers, words, word, addNewWord, loading, options, totalWords } = useWords();
    return {
      headers,
      words,
      word,
      addNewWord,
      loading,
      options,
      totalWords,
    };
  },
});
</script>

<style scoped lang="scss"></style>
