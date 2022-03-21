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
  car: [],
  rate: [],
  carFilter: [],
  valueCity: "",
  valuePvz: "",
  carModel: "",
  carNumber: "",

};

const namespaced: boolean = true;

export const OrderForm: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};