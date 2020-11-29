<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol cols="5">
        <div class="title text-decoration-underline mb-4 blue--text text-center">Main info</div>
        <VTextField v-model="word.word" label="Word" outlined dense />
        <VTextField v-model="word.translation" label="Translation" outlined dense />
        <AddRow :items="word.definitions" label="Definitions" @itemsUpdated="changeDefinitions" />
        <AddRow :items="word.examples" label="Examples" @itemsUpdated="changeExamples" />
      </VCol>
      <VCol class="d-flex flex-column justify-space-between" cols="5">
        <div>
          <template v-if="word.partOfSpeech === PartOfSpeech.verb">
            <div class="title text-decoration-underline mb-4 blue--text text-center">Verb</div>
            <VTextField
              v-model="word.verbForm.thirdPerson"
              label="Third person singular"
              outlined
              dense
            />
            <VTextField
              v-model="word.verbForm.pastSimple"
              label="Simple past tense"
              outlined
              dense
            />
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
          <template v-if="word.partOfSpeech === PartOfSpeech.adjective">
            <div class="title text-decoration-underline mb-4 blue--text text-center">
              <span>Adjective</span>
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
        </div>
        <div class="d-flex justify-end mb-6">
          <VBtn color="green" outlined @click="saveWord">
            <VIcon class="mr-2">mdi-panda</VIcon>
            Save
          </VBtn>
        </div>
      </VCol>
    </VRow>
    <div class="title text-decoration-underline mb-4 blue--text text-center">
      Associative pictures
    </div>
    <VRow>
      <VCol cols="8">
        <VRow>
          <VCol v-for="image in word.images" :key="image.name" class="d-flex child-flex" cols="4">
            <VHover v-slot:default="{ hover }">
              <VCard flat tile class="d-flex rounded-lg">
                <VImg
                  class="rounded-lg"
                  :src="`/api/v1/words/image/${image.name}`"
                  alt=""
                  @click="deleteImage(word._id, image.name)"
                >
                  <VFadeTransition>
                    <VOverlay v-if="hover" absolute color="#036358">
                      <VIcon large>mdi-delete-forever</VIcon>
                    </VOverlay>
                  </VFadeTransition>
                </VImg>
              </VCard>
            </VHover>
          </VCol>
        </VRow>
        <VFileInput
          ref="refImage"
          v-model="uploadedImage"
          class="d-none"
          accept="image/jpeg, image/png"
          label="Image"
          outlined
          dense
          @change="uploadImage"
        />
      </VCol>
      <VCol class="d-flex justify-end pt-5" cols="2">
        <VBtn color="green" outlined @click="openFilesDialog">
          <VIcon class="mr-2">mdi-image</VIcon>
          Upload
        </VBtn>
      </VCol>
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
      deleteImage,
      uploadImage,
      openFilesDialog,
      refImage,
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
      deleteImage,
      uploadImage,
      openFilesDialog,
      refImage,
    };
  },
});
</script>

<style scoped lang="scss"></style>
