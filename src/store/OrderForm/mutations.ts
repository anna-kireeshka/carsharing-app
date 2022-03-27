import { MutationTree } from "vuex";
import {
  Car,
  CarAdditionally,
  CarFilter,
  City,
  ColorFilter,
  ProfileState,
  Pvz,
  Rate,
  ValueInput,
} from "./types";

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

  carFilterLoaded(state, filter: CarFilter[]) {
    state.carFilter = filter;
  },

  rateLoaded(state, rate: Rate[]) {
    state.rate = rate;
  },

  searchCity(state, payload: ValueInput["valueCity"]) {
    state.valueCity = payload;
  },
  searchPvz(state, payload: ValueInput["valuePvz"]) {
    state.valuePvz = payload;
  },

  getCityId(state, city: City[]) {
    if (city.length !== 0) {
      for (let i = 0; i < city.length; i++) {
        state.cityId = city;
      }
    }
    return state.cityId;
  },

  getPvzId(state, pvz: Pvz[]) {
    if (pvz.length !== 0) {
      for (let i = 0; i < pvz.length; i++) {
        state.pvzId = pvz;
      }
    }
    return state.cityId;
  },

  getCarModel(state, car: Car[]) {
    if (car.length !== 0) {
      for (let i = 0; i < car.length; i++) {
        state.carModel = car;
      }
    }

    return state.carModel;
  },

  getCarNumber(state, car: Car[]) {
    if (car.length !== 0) {
      for (let i = 0; i < car.length; i++) {
        state.carNumber = car;
      }
    }
    return state.carNumber;
  },

  getCarColor(state, color: ColorFilter[]) {
    if (color.length !== 0) {
      for (let i = 0; i < color.length; i++) {
        state.carColor = color;
      }
    }
    return state.carModel;
  },

  getCarAdditionallyFilter(state, filter: CarFilter[]) {
    if (filter.length !== 0) {
      state.additionallyFilter.push(filter);
    }
    return state.additionallyFilter;
  },

  getCarRate(state, rate: Rate[]) {
    if (rate.length !== 0) {
      for (let i = 0; i < rate.length; i++) {
        state.rateFilter = rate;
      }
    }
    return state.rateFilter;
  },

  getDateTimeFrom(state, startDate: ValueInput["dateFrom"]) {
    state.dateFrom = startDate;
  },

  getDateTimeTo(state, endDate: ValueInput["dateTo"]) {
    state.dateTo = endDate;
  },
};
