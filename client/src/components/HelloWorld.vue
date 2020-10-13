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
    await axios.get('/api/v1/words');
  }
});
</script>

<style scoped></style>
