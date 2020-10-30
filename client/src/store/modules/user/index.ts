import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { State } from './types';
import mutations from './mutations';
import actions from './actions';

export const state: State = {
  user: null,
};

const module: Module<State, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default module;
