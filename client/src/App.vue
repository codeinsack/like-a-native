<template>
  <VApp>
    <Words />
    <VContainer>
      <VRow>
        <VCol>
          <VTextField placeholder="Please enter a word" outlined dense/>
        </VCol>
        <VCol>
          <VBtn color="primary" outlined>Add new word</VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VApp>
</template>

<script>
import Words from './components/Words/Words.vue';

export default {
  name: 'App',

  components: {
    Words,
  },

  data: () => ({
    //
  }),
};
</script>
