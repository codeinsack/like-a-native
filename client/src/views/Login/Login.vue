<template>
  <VContainer fill-height fluid>
    <VRow justify="center">
      <VCol cols="4">
        <form>
          <VTextField v-model="email" label="Please enter email" outlined dense />
          <VTextField
            v-model="password"
            type="password"
            label="Please enter password"
            outlined
            dense
          />
          <VBtn color="primary" outlined @click="login">Login</VBtn>
        </form>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useLogin } from './Login';

export default defineComponent({
  setup(props, { root }) {
    const { email, password, login } = useLogin(root.$router);
    return {
      email,
      password,
      login,
    };
  },
});
</script>

<style scoped lang="scss"></style>
