/* eslint-disable */
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from './types';
import { RootState } from '../types';

export const state: ProfileState = {
  city: [],
  pvz: [],
  valueCity:"",
  valuePvz:"",
  error: false,
};

const namespaced: boolean = true;

export const location: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};