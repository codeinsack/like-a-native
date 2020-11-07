<template>
  <div class="ml-3 mb-6 mt-7">
    <Row
      v-for="(item, index) in items"
      :key="index"
      :value="item"
      :label="label"
      @rowValueChanged="changeItemsData($event, index)"
    />
    <VBtn color="primary" text> Add </VBtn>
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
    const { changeItemsData } = useAddRow(props, emit);
    return {
      changeItemsData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
