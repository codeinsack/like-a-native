<template>
  <div class="d-flex justify-start">
    <VTextarea
      :value="value"
      :label="label"
      rows="2"
      outlined
      dense
      auto-grow
      hide-details
      @input="changeValue"
    />
    <VBtn :disabled="!index" color="primary" icon @click="$emit('itemDeleted')">
      <VIcon>mdi-close-circle-outline</VIcon>
    </VBtn>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useRow } from './Row';

export default defineComponent({
  props: {
    value: {
      type: String,
    },
    index: {
      type: Number,
    },
    label: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const { changeValue } = useRow(emit);
    return {
      changeValue,
    };
  },
});
</script>

<style lang="scss" scoped></style>
