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
              <VCol cols="3">
                <VSelect
                  v-model="partOfSpeech"
                  :items="partsOfSpeech"
                  placeholder="Filter by part of speech"
                  clearable
                />
              </VCol>
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
          <template #item.partOfSpeech="{ item }">
            <PartOfSpeechChip :type="item.partOfSpeech" />
          </template>
        </VDataTable>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PartOfSpeechChip from '@/components/PartOfSpeechChip/PartOfSpeechChip.vue';
import { useWords } from './Words';

export default defineComponent({
  components: {
    PartOfSpeechChip,
  },
  setup() {
    const {
      headers,
      words,
      loading,
      options,
      totalWords,
      search,
      partOfSpeech,
      partsOfSpeech,
    } = useWords();
    return {
      headers,
      words,
      loading,
      options,
      totalWords,
      search,
      partOfSpeech,
      partsOfSpeech,
    };
  },
});
</script>

<style scoped lang="scss"></style>
