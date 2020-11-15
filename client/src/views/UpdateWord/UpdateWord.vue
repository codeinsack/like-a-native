<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol cols="6">
        <div class="subtitle-1 mb-4">Main info</div>
        <VTextField v-model="word.word" label="Word" outlined dense />
        <VTextField v-model="word.translation" label="Translation" outlined dense />
        <VSelect
          v-model="word.partOfSpeech"
          :items="partsOfSpeech"
          label="Part of speech"
          outlined
          dense
        />
        <AddRow :items="word.definitions" label="Definition" @itemsUpdated="changeDefinitions" />
        <AddRow :items="word.examples" label="Example" @itemsUpdated="changeExamples" />
        <VFileInput
          v-model="uploadedImage"
          accept="image/jpeg, image/png"
          label="Image"
          outlined
          dense
        />
      </VCol>
      <VCol cols="6">
        <template v-if="word.partOfSpeech === PartOfSpeech.verb">
          <div class="subtitle-1 mb-4">Verb</div>
          <VTextField
            v-model="word.verbForm.thirdPerson"
            label="Third person singular"
            outlined
            dense
          />
          <VTextField v-model="word.verbForm.pastSimple" label="Simple past tense" outlined dense />
          <VTextField
            v-model="word.verbForm.pastParticiple"
            label="Helping verb plus Past participle"
            outlined
            dense
          />
        </template>
        <template v-else-if="word.partOfSpeech === PartOfSpeech.noun">
          <div class="subtitle-1 mb-4">Noun</div>
          <VSelect v-model="word.article" :items="articles" label="Article" outlined dense />
          <VTextField v-model="word.pluralForm" label="Plural form" outlined dense />
        </template>
      </VCol>
      <VBtn color="primary" fab bottom right fixed @click="saveWord">
        <VIcon>mdi-content-save</VIcon>
      </VBtn>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AddRow from '@/components/AddRow/AddRow.vue';
import { useUpdateWord } from './UpdateWord';

export default defineComponent({
  components: {
    AddRow,
  },
  setup(props, { root }) {
    const {
      word,
      saveWord,
      partsOfSpeech,
      uploadedImage,
      changeDefinitions,
      changeExamples,
      PartOfSpeech,
      articles,
    } = useUpdateWord(root.$route, root.$router);
    return {
      word,
      saveWord,
      partsOfSpeech,
      uploadedImage,
      changeDefinitions,
      changeExamples,
      PartOfSpeech,
      articles,
    };
  },
});
</script>

<style scoped lang="scss"></style>
