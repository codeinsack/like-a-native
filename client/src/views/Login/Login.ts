import { Ref, ref } from '@vue/composition-api';
import { useStore } from '@/uses/useStore';
import { Modules } from '@/store/types';
import { Actions } from '@/store/modules/user/types';

const { useActions } = useStore(Modules.USER);

const { LOGIN } = useActions([Actions.LOGIN]);

export function useLogin() {
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');

  const login = async () => {
    LOGIN({ email: email.value, password: password.value });
  };

  return {
    email,
    password,
    login,
  };
}
