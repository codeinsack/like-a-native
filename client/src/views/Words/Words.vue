<template>
  <VContainer class="py-0">
    <VRow>
      <VCol class="py-0">
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
                <VBtn
                  :disabled="!(search && partOfSpeech)"
                  color="primary"
                  outlined
                  @click="addNewWord"
                >
                  Add new word
                </VBtn>
              </VCol>
            </VRow>
          </template>
          <template #item.partOfSpeech="{ item }">
            <PartOfSpeechChip :type="item.partOfSpeech" />
          </template>
          <template #item.image="{ item }">
            <VAvatar class="rounded-lg ma-1" width="70" height="52.50" tile>
              <img
                v-if="head(item.images)"
                :src="`/api/v1/words/image/${head(item.images).name}`"
                alt=""
              />
              <img v-else :src="require('@/assets/no-image.png')" alt="" />
            </VAvatar>
          </template>
          <template #item.training="{ item }">
            <VBtn @click="trainWord(item._id)">
              <VIcon>mdi-sword</VIcon>
            </VBtn>
          </template>
          <template #item.actions="{ item }">
            <VIcon small class="mr-2" @click="viewWordDetails(item)">mdi-eye</VIcon>
            <VIcon small class="mr-2" @click="editWord(item)">mdi-pencil</VIcon>
            <VIcon small @click="deleteWord(item)">mdi-delete</VIcon>
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
  setup(props, { root }) {
    const {
      headers,
      words,
      loading,
      options,
      totalWords,
      search,
      partOfSpeech,
      partsOfSpeech,
      addNewWord,
      viewWordDetails,
      editWord,
      deleteWord,
      trainWord,
      head,
    } = useWords(root.$router);
    return {
      headers,
      words,
      loading,
      options,
      totalWords,
      search,
      partOfSpeech,
      partsOfSpeech,
      addNewWord,
      viewWordDetails,
      editWord,
      deleteWord,
      trainWord,
      head,
    };
  },
});
</script>

<style scoped lang="scss"></style>
