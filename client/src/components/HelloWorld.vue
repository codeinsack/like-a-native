<template>
  <div class="hello">
    Hello!
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from 'axios';

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  },
  async mounted() {
    const response = await axios.get('/api/v1/words');
    console.log('response', response);
  }
});
</script>

<style scoped></style>
