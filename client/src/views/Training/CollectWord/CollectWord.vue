<template>
  <VStepper
    v-if="isTrainingStarted && words.length"
    v-model="currentStep"
    class="elevation-0 mr-12"
  >
    <VStepperHeader class="elevation-0">
      <template v-for="(attachedWord, index) in words">
        <VStepperStep
          :key="attachedWord.id"
          :complete="currentStep > index + 1"
          :step="index + 1"
          editable
        >
          Step {{ index + 1 }}
        </VStepperStep>
        <VDivider v-if="index + 1 !== words.length" :key="attachedWord.id" />
      </template>
    </VStepperHeader>
    <VStepperItems>
      <VStepperContent
        v-for="(attachedWord, index) in words"
        :key="attachedWord.id"
        :step="index + 1"
      >
        <VCard class="mb-12" color="grey lighten-1" height="600px">
          {{ attachedWord.word.word }}
        </VCard>
        <VBtn class="mr-4" color="primary" outlined>Check</VBtn>
        <VBtn color="primary" outlined>Next word</VBtn>
      </VStepperContent>
    </VStepperItems>
  </VStepper>
  <VContainer v-else fill-height fluid>
    <VRow justify="center">
      <VCol cols="4">
        <VBtn color="primary" outlined @click="loadWords">Start training</VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useCollectWord } from './CollectWord';

export default defineComponent({
  data() {
    return {
      currentStep: 1,
    };
  },
  watch: {
    steps(val) {
      if (this.currentStep > val) {
        this.currentStep = val;
      }
    },
  },

  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.currentStep = 1;
      } else {
        this.currentStep = n + 1;
      }
    },
  },
  setup() {
    const { loadWords, isTrainingStarted, words } = useCollectWord();
    return {
      loadWords,
      isTrainingStarted,
      words,
    };
  },
});
</script>

<style scoped lang="scss"></style>
