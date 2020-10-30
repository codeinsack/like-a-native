<template>
  <VContainer class="mt-12">
    <VRow>
      <VCol cols="6">
        <VTextField v-model="email" label="Please enter email" outlined dense />
        <VTextField
          v-model="password"
          type="password"
          label="Please enter password"
          outlined
          dense
        />
        <VBtn color="primary" outlined @click="fetchToken">Login</VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useLogin } from './Login';

export default defineComponent({
  setup(props, { root }) {
    const { email, password, fetchToken } = useLogin(root.$router);
    return {
      email,
      password,
      fetchToken,
    };
  },
});
</script>

<style scoped lang="scss"></style>
