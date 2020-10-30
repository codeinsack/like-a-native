import { Ref, ref } from '@vue/composition-api';
import { login } from '@/api/auth';

export function useLogin() {
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');

  const fetchToken = async () => {
    await login({ email: email.value, password: password.value });
  };

  return {
    email,
    password,
    fetchToken,
  };
}
