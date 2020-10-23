<template>
  <VContainer class="mt-12">
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
                <VTextField
                  v-model="search"
                  class="mx-4"
                  label="Search"
                  append-icon="mdi-magnify"
                  clearable
                />
              </VCol>
              <VCol cols="2">
                <VBtn color="primary" outlined @click="$router.push('/words/add')">
                  Add new word
                </VBtn>
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
    const { headers, words, word, addNewWord, loading, options, totalWords, search } = useWords();
    return {
      headers,
      words,
      word,
      addNewWord,
      loading,
      options,
      totalWords,
      search,
    };
  },
});
</script>

<style scoped lang="scss"></style>