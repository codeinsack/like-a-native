<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol cols="6">
        <VTextField v-model="word.word" label="Word" outlined dense />
        <VTextField v-model="word.translation" label="Translation" outlined dense />
        <VSelect
          v-model="word.partOfSpeech"
          :items="partsOfSpeech"
          label="Part of speech"
          outlined
          dense
        />
        <VFileInput
          v-model="uploadedImage"
          accept="image/jpeg, image/png"
          label="Image"
          outlined
          dense
        />
        <VBtn color="primary" outlined @click="saveWord">Update word</VBtn>
      </VCol>
      <VCol cols="6">
        <VTextField v-model="word.form.thirdPerson" label="Third person singular" outlined dense />
        <VTextField v-model="word.form.pastSimple" label="Simple past tense" outlined dense />
        <VTextField
          v-model="word.form.pastParticiple"
          label="Helping verb plus Past participle"
          outlined
          dense
        />
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
