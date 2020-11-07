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
        <AddRow
          :items="word.definitions"
          label="Definition"
          @itemsDataChanged="changeDefinitions"
        />
        <AddRow :items="word.examples" label="Example" @itemsDataChanged="changeExamples" />
        <VFileInput
          v-model="uploadedImage"
          accept="image/jpeg, image/png"
          label="Image"
          outlined
          dense
        />
      </VCol>
      <VCol cols="6">
        <div class="subtitle-1 mb-4">Verb forms</div>
        <VTextField v-model="word.form.thirdPerson" label="Third person singular" outlined dense />
        <VTextField v-model="word.form.pastSimple" label="Simple past tense" outlined dense />
        <VTextField
          v-model="word.form.pastParticiple"
          label="Helping verb plus Past participle"
          outlined
          dense
        />
        <VBtn color="primary" fab bottom right fixed @click="saveWord">
          <VIcon>mdi-content-save</VIcon>
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
    } = useUpdateWord(root.$route, root.$router);
    return {
      word,
      saveWord,
      partsOfSpeech,
      uploadedImage,
      changeDefinitions,
      changeExamples,
    };
  },
});
</script>

<style scoped lang="scss"></style>
