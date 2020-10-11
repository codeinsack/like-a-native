<template>
  <div>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TodoList from '@/components/TodoList/TodoList.vue';

export default defineComponent({
  components: {
    TodoList,
  }
})
</script>

<style></style>
