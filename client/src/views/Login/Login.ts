import { Ref, ref } from '@vue/composition-api';
import { login, fetchMe } from '@/api/auth';

export function useLogin() {
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');

  const fetchToken = async () => {
    await login({ email: email.value, password: password.value });
    await fetchMe();
  };

  return {
    email,
    password,
    fetchToken,
  };
}
