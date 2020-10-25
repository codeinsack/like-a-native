<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol cols="6">
        <VTextField
          v-model="word.word"
          label="Word"
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
        <VFileInput
          v-model="uploadedImage"
          accept="image/jpeg, image/png"
          placeholder="Upload associated image"
          label="Image"
          outlined
          dense
        />
        <VBtn color="primary" outlined @click="saveWord">Update word</VBtn>
      </VCol>
      <VCol cols="6">
        <VTextarea v-model="word.definition" outlined label="Definition" />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useUpdateWord } from './UpdateWord';

export default defineComponent({
  setup(props, { root }) {
    const { word, saveWord, partsOfSpeech, uploadedImage } = useUpdateWord(
      root.$route,
      root.$router
    );
    return {
      word,
      saveWord,
      partsOfSpeech,
      uploadedImage,
    };
  },
});
</script>

<style scoped lang="scss"></style>
