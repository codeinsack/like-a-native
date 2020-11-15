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
          :step="index + 1"
          :complete="currentStep > index + 1"
          :rules="[() => !(currentStep > index + 1) || answers[index]]"
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
        <VCard
          class="mb-12 d-flex justify-center align-center"
          color="grey lighten-1"
          height="600px"
        >
          <div class="d-flex flex-column">
            <div style="width: 300px" class="mb-12 d-flex flex-column align-center">
              <span class="blue--text title text-center">{{
                head(attachedWord.word.definitions)
              }}</span>
              <span
                v-show="showResult"
                :class="`${isCorrect ? 'green--text' : 'red--text'}`"
                class="headline mt-2"
              >
                {{ attachedWord.word.word }}
              </span>
            </div>
            <VTextField v-model="userAnswer" placeholder="Enter your answer here" outlined dense />
          </div>
        </VCard>
        <VBtn
          class="mr-4"
          :disabled="showResult"
          color="primary"
          outlined
          @click="checkAnswer(attachedWord)"
        >
          Check
        </VBtn>
        <VBtn :disabled="!showResult" color="primary" outlined @click="moveToNextWord">
          <span>{{ index + 1 === words.length ? 'Finish' : 'Next word' }}</span>
        </VBtn>
      </VStepperContent>
    </VStepperItems>
  </VStepper>
  <VContainer v-else-if="!isFinish" fill-height fluid>
    <VRow justify="center">
      <VCol cols="4">
        <VBtn color="primary" outlined @click="loadWords">Start training</VBtn>
      </VCol>
    </VRow>
  </VContainer>
  <VContainer v-else fill-height fluid>
    <VRow justify="center">
      <VCol cols="4">
        <p class="text-h6 blue--text text-decoration-underline">Training is finished!</p>
        <VList>
          <VListItem v-for="(word, index) in words" :key="word._id">
            <VListItemContent>
              <VListItemTitle :class="`${answers[index] ? 'green--text' : 'red--text'}`">
                {{ word.word.word }}
              </VListItemTitle>
              <VListItemSubtitle>{{ word.word.translation }}</VListItemSubtitle>
            </VListItemContent>
          </VListItem>
        </VList>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useCollectWord } from './GuessByDescription';

export default defineComponent({
  setup() {
    const {
      loadWords,
      isTrainingStarted,
      words,
      head,
      userAnswer,
      checkAnswer,
      showResult,
      isCorrect,
      moveToNextWord,
      currentStep,
      answers,
      isFinish,
    } = useCollectWord();
    return {
      loadWords,
      isTrainingStarted,
      words,
      head,
      userAnswer,
      checkAnswer,
      showResult,
      isCorrect,
      moveToNextWord,
      currentStep,
      answers,
      isFinish,
    };
  },
});
</script>

<style scoped lang="scss"></style>
