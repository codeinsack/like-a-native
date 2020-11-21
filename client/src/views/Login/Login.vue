<template>
  <VContainer fill-height fluid>
    <VRow justify="center">
      <VCol cols="4">
        <VBtn class="pl-0" color="primary" outlined @click="login">
          <VAvatar width="30" height="30">
            <img :src="require('@/assets/google.png')" />
          </VAvatar>
          Sign in with Google
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useLogin } from './Login';

export default defineComponent({
  setup(props, { root }) {
    const { login } = useLogin(root);
    return {
      login,
    };
  },
});
</script>

<style scoped lang="scss"></style>
