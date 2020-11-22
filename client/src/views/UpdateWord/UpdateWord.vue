<template>
  <VContainer class="mt-12">
    <VRow class="d-flex justify-center">
      <VCol cols="5">
        <div class="title text-decoration-underline mb-4 blue--text text-center">Main info</div>
        <VTextField v-model="word.word" label="Word" outlined dense />
        <VTextField v-model="word.translation" label="Translation" outlined dense />
        <AddRow :items="word.definitions" label="Definitions" @itemsUpdated="changeDefinitions" />
        <AddRow :items="word.examples" label="Examples" @itemsUpdated="changeExamples" />
        <VFileInput
          v-model="uploadedImage"
          accept="image/jpeg, image/png"
          label="Image"
          outlined
          dense
        />
        <img
          v-for="image in word.images"
          :key="image.name"
          :src="`/api/v1/words/image/${image.name}`"
          alt=""
        />
      </VCol>
      <VCol cols="5">
        <template v-if="word.partOfSpeech === PartOfSpeech.verb">
          <div class="title text-decoration-underline mb-4 blue--text text-center">Verb</div>
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
          <div class="title text-decoration-underline mb-4 blue--text text-center">Noun</div>
          <VSelect v-model="word.article" :items="articles" label="Article" outlined dense />
          <VTextField v-model="word.genitiveForm" label="Genetive form" outlined dense />
          <VTextField v-model="word.pluralForm" label="Plural form" outlined dense />
        </template>
        <template
          v-if="
            word.partOfSpeech === PartOfSpeech.adjective ||
            word.partOfSpeech === PartOfSpeech.adverb
          "
        >
          <div class="title text-decoration-underline mb-4 blue--text text-center">
            <span>{{ word.partOfSpeech === PartOfSpeech.adverb ? 'Adverb' : 'Adjective' }}</span>
          </div>
          <VTextField
            v-model="word.comparativeForm.comparative"
            label="Comparative form"
            outlined
            dense
          />
          <VTextField
            v-model="word.comparativeForm.superlative"
            label="Superlative form"
            outlined
            dense
          />
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
