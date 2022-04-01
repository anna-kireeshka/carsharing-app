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
  // finalOrder:{
  //   orderStatusId: "",
  //   cityId:  "",
  //   pointId:  "",
  //   carId:  "",
  //   color:  "",
  //   dateFrom: 0,
  //   dateTo: 0,
  //   rateId:  "",
  //   price: 0,
  //   isFullTank: false,
  //   isNeedChildChair: false,
  //   isRightWheel: false,
  // },
  orderStatus: [],
  valueCity: "",
  valuePvz: "",
  carModel: "",
  carNumber: "",
  colorFilter: [],
  colorCheck: false,
  carAdditionally: [],
  carColor: "",
  additionallyFilter: [],
  dateFrom: "",
  dateTo: "",
  checked: true,
  carPrice: 0,
  maxCarPrice: 0,
  ratePrice: 0,
  timePrice: 0,
  additionallyPrice: 0,
  rateFilter: "",
  durationMinute: 0,
  loadingCarList: false,
  img: "",
  fuel: 0,
  orderId: 0,
  fullPrice: 0,
  carId: "",
  rateId: "",
  confirmOrder: [],
  finalOrder: [],
  dateToMs: 0,
  dateFromMs: 0,
  id: "",
  orderCard: [],
};

const namespaced: boolean = true;

export const OrderForm: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};