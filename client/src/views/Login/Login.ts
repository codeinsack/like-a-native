import { Ref, ref } from '@vue/composition-api';
import { useStore } from '@/uses/useStore';
import { Modules } from '@/store/types';
import { Actions } from '@/store/modules/user/types';

const { useActions } = useStore(Modules.USER);

const { LOGIN } = useActions([Actions.LOGIN]);

export function useLogin(root: any) {
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');

  const login = async () => {
    const response = await root.$gAuth.signIn();
    LOGIN(response.xc.id_token);
  };

  return {
    email,
    password,
    login,
  };
}
