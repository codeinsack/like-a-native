import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { State } from './types';
import mutations from './mutations';

export const state: State = {
  messages: [],
};

const module: Module<State, RootState> = {
  namespaced: true,
  state,
  mutations,
};

export default module;
