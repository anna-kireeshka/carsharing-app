/* eslint-disable */
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from "./types";
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
  colorFilter: [],
  carAdditionally: [],
  carColor: "",
  additionallyFilter: [],
  dateFrom: "",
  dateTo: "",
  checkedAdditionally: false,
  carPrice: 0,
  maxCarPrice: 0,
  ratePrice: 0,
  timePrice: 0,
  additionallyPrice: 0,
  rateFilter: "",
  durationMinute: 0,
  loadingCarList:false,
  img: "",
  fuel: 0,

};

const namespaced: boolean = true;

export const OrderForm: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};