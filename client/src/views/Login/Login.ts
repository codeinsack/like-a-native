import { Ref, ref } from '@vue/composition-api';
import { login } from '@/api/auth';

export function useLogin() {
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');

  const fetchToken = async () => {
    const { data } = await login({ email: email.value, password: password.value });
    console.log('data', data);
  };

  return {
    email,
    password,
    fetchToken,
  };
}
