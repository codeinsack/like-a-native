<template>
  <VStepper v-if="isTrainingStarted && words.length" v-model="e1" class="elevation-0 mr-12">
    <VStepperHeader class="elevation-0">
      <VStepperStep :complete="e1 > 1" step="1"> Name of step 1 </VStepperStep>
      <VDivider />
      <VStepperStep :complete="e1 > 2" step="2"> Name of step 2 </VStepperStep>
      <VDivider />
      <VStepperStep step="3"> Name of step 3 </VStepperStep>
    </VStepperHeader>
    <VStepperItems>
      <VStepperContent class="pa-0" step="1">
        <VCard class="mb-12" color="grey lighten-1" height="200px" />
        <VBtn color="primary" @click="e1 = 2"> Continue </VBtn>
        <VBtn text> Cancel </VBtn>
      </VStepperContent>
      <VStepperContent step="2">
        <VCard class="mb-12" color="grey lighten-1" height="200px" />
        <VBtn color="primary" @click="e1 = 3"> Continue </VBtn>
        <VBtn text> Cancel </VBtn>
      </VStepperContent>
      <VStepperContent step="3">
        <VCard class="mb-12" color="grey lighten-1" height="200px" />
        <VBtn color="primary" @click="e1 = 1"> Continue </VBtn>
        <VBtn text> Cancel </VBtn>
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
      e1: 1,
    };
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
