<template>
  <div class="ml-3 mb-6 mt-7">
    <Row
      v-for="(item, index) in items"
      :key="index"
      class="mb-5"
      :index="index"
      :value="item"
      :label="label"
      @valueChanged="updateItems($event, index)"
      @itemDeleted="deleteItem(index)"
    />
    <VBtn color="primary" outlined @click="addItem"> Add </VBtn>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useAddRow } from './AddRow';
import Row from './Row/Row.vue';

export default defineComponent({
  components: {
    Row,
  },
  props: {
    items: {
      type: Array,
    },
    label: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const { updateItems, addItem, deleteItem } = useAddRow(props, emit);
    return {
      updateItems,
      addItem,
      deleteItem,
    };
  },
});
</script>

<style lang="scss" scoped></style>
