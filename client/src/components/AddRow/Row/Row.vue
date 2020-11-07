<template>
  <div class="d-flex justify-start">
    <VTextarea :value="value" :label="label" outlined dense @input="changeValue" />
    <VBtn color="primary" icon>
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
