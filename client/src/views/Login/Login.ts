import VueRouter from 'vue-router';
import { Ref, ref } from '@vue/composition-api';
import { login } from '@/api/auth';

export function useLogin(router: VueRouter) {
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');

  const fetchToken = async () => {
    await login({ email: email.value, password: password.value });
    await router.push('/words');
  };

  return {
    email,
    password,
    fetchToken,
  };
}
