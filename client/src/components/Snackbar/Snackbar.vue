<template>
  <div v-if="notifications.length" class="snackbar">
    <VSnackbar
      v-for="notification in notifications"
      :key="notification._id"
      :color="notification.variant"
      :timeout="notification.duration"
      :value="notification.visible"
      class="snackbar__item"
      @input="snackbarClose(notification)"
    >
      {{ notification.message }}
      <VBtn dark text @click="snackbarClose(notification)"> Close </VBtn>
    </VSnackbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useSnackbar } from './Snackbar';

export default defineComponent({
  setup() {
    const { notifications, snackbarClose } = useSnackbar();
    return {
      notifications,
      snackbarClose,
    };
  },
});
</script>

<style lang="scss" scoped>
.snackbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  &__item {
    position: relative;
    height: auto;
  }
}
</style>
