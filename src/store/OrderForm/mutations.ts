import { MutationTree } from "vuex";
import {
  Car,
  CarAdditionally,
  City,
  ColorFilter,
  OrderStatus,
  ProfileState,
  Pvz,
  Rate,
  FinalOrder,
} from "./types";
import dayjs from "dayjs";

export const mutations: MutationTree<ProfileState> = {
  cityLoaded(state, city: City[]) {
    state.city = city;
  },

  pvzLoaded(state, pvz: Pvz[]) {
    state.pvz = pvz;
  },

  carLoaded(state, car: Car[]) {
    state.car = car;
  },

  rateLoaded(state, rate: Rate[]) {
    state.rate = rate;
  },

  orderStatusLoaded(state, order: OrderStatus[]) {
    state.orderStatus = order;
  },

  finalOrderLoaded(state, order: FinalOrder[]) {
    state.finalOrder = order;
  },

  setCityValue(state, payload: string) {
    state.valueCity = payload;
  },
  setPvzValue(state, payload: string) {
    state.valuePvz = payload;
  },

  getPvzId(state, id: number) {
    state.pvzId = id;
  },

  getCarModel(state, name: string) {
    state.carModel = name;
  },

  getCarNumber(state, number: string) {
    state.carNumber = number;
  },

  getColorChecked(state, colorCheck: ColorFilter["checked"]) {
    state.colorCheck = colorCheck;
  },

  getCarColor(state, color: string) {
    state.carColor = color;
  },

  getCarPrice(state, car: Car["priceMin"]) {
    state.carPrice = car;
  },

  getCarPriceMax(state, car: Car["priceMax"]) {
    state.maxCarPrice = car;
  },

  getCarImg(state, car: Car["thumbnail"]["path"]) {
    state.img = car;
  },

  getCarFuel(state, car: Car["tank"]) {
    state.fuel = car;
  },
  getCarId(state, car: Car["id"]) {
    state.carId = car;
  },

  getCarAdditionallyChecked(state, filter: CarAdditionally["checked"]) {
    state.checked = filter;
  },

  getCarAdditionallyFilter(state, filter: CarAdditionally[]) {
    if (state.additionallyFilter.indexOf(filter) === -1 && state.checked) {
      state.additionallyFilter.push(filter);
    } else if (!state.checked) {
      const index = state.additionallyFilter.indexOf(filter);
      state.additionallyFilter.splice(index, 1);
    }

    return state.additionallyFilter;
  },

  getCarRate(state, rate: number) {
    state.rateFilter = rate;
  },

  getCarPriceAdditionally(state, filter: CarAdditionally["price"]) {
    state.additionallyPrice = filter;
  },

  getDateTimeFrom(state, startDate: string) {
    state.dateFrom = dayjs(startDate).format("YYYY-MM-DD HH:mm:ss");
  },

  getDateTimeTo(state, endDate: string) {
    state.dateTo = endDate;
  },

  getCarPriceRate(state, price: number) {
    state.ratePrice = price;
  },

  getRateId(state, rate: Rate["id"]) {
    state.rateId = rate;
  },

  getIsCarLocationValidation(state, isValid) {
    state.isCarAdditionalyValidation = isValid;
  },

  getIsCarModelValidation(state, isValid) {
    state.isCarModelValidation = isValid;
  },

  getIsCarAdditionalyValidation(state, isValid) {
    state.isCarAdditionalyValidation = isValid;
  },

  getIsFinalOrderValidation(state, isValid) {
    state.isFinalOrderValidation = isValid;
  },
};
