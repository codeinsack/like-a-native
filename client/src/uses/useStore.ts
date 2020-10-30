import { DispatchOptions } from 'vuex';
import { computed } from '@vue/composition-api';
import { store } from '@/store/store';

export function useStore(nameSpace: string) {
  return {
    useActions: (map: string[]) => {
      const obj: any = {};
      map.forEach((m) => {
        obj[m] = async (payload, options: DispatchOptions) => {
          return store.dispatch(`${nameSpace}/${m}`, payload, options);
        };
      });
      return obj;
    },
    useGetters: (map: string[]) => {
      const obj: any = {};
      map.forEach((m) => {
        obj[m] = store.getters[`${nameSpace}/${m}`];
      });
      return obj;
    },
    useMutations: (map: string[]) => {
      const obj: any = {};
      map.forEach((m) => {
        obj[m] = async (payload, options: DispatchOptions) => {
          return store.commit(`${nameSpace}/${m}`, payload, options);
        };
      });
      return obj;
    },
    useState: (map: string[]) => {
      const obj: any = {};
      map.forEach((m) => {
        obj[m] = computed(() => store.state[nameSpace][m]);
      });
      return obj;
    },
  };
}
