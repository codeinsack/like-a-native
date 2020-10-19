<template>
  <div>
    <ul>
      <li v-for="(word, index) in words" :key="index">
        {{ word }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useWords } from './Words';

export default defineComponent({
  setup() {
    const { words } = useWords();
    return {
      words,
    };
  },
});
</script>

<style scoped lang="scss"></style>
