import { MutationTree } from "vuex";
import {
  Car,
  CarAdditionally,
  CarFilter,
  City,
  ColorFilter,
  OrderStatus,
  ProfileState,
  Pvz,
  Rate,
  ValueInput,
  FinalOrder,
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

  orderStatusLoaded(state, order: OrderStatus[]) {
    state.orderStatus = order;
  },

  finalOrderLoaded: function (state, order: FinalOrder[]) {
    state.finalOrder = order;
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

  getCategoryId(state, category: CarFilter[]) {
    for (let i = 0; i < category?.length; i++) {
      state.categoryId = category;
    }
    return state.categoryId;
  },

  getCarModel(state, car: Car[]) {
    if (car.length !== 0) {
      for (let i = 0; i < car.length; i++) {
        state.carModel = car;
      }
    }

    return state.carModel;
  },

  getCarNumber(state, car: Car["number"]) {
    return (state.carNumber = car);
  },

  getColorChecked(state, colorCheck: ColorFilter["checked"]) {
    return (state.colorCheck = colorCheck);
  },

  getCarColor(state, color: ColorFilter[]) {
    if (color.length !== 0) {
      for (let i = 0; i < color.length; i++) {
        state.carColor = color;
      }
    }
    return state.carModel;
  },

  getCarPrice(state, car: Car["priceMin"]) {
    return (state.carPrice = car);
  },

  getCarPriceMax(state, car: Car["priceMax"]) {
    return (state.maxCarPrice = car);
  },

  getCarImg(state, car: Car["thumbnail"]["path"]) {
    return (state.img = car);
  },

  getCarFuel(state, car: Car["tank"]) {
    return (state.fuel = car);
  },
  getCarId(state, car: Car["id"]) {
    return (state.carId = car);
  },

  getCarAdditionallyChecked(state, filter: CarAdditionally["checked"]) {
    return (state.checked = filter);
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

  getCarRate(state, rate: Rate[]) {
    if (rate.length !== 0) {
      for (let i = 0; i < rate.length; i++) {
        state.rateFilter = rate;
      }
    }
    return state.rateFilter;
  },

  getCarPriceAdditionally(state, filter: CarAdditionally["price"]) {
    return (state.additionallyPrice = filter);
  },

  getDateTimeFrom(state, startDate: ValueInput["dateFrom"]) {
    state.dateFrom = startDate;
  },

  getDateTimeTo(state, endDate: ValueInput["dateTo"]) {
    state.dateTo = endDate;
  },

  getCarPriceRate(state, rate: Rate["price"]) {
    return (state.ratePrice = rate);
  },

  getRateId(state, rate: Rate["id"]) {
    return (state.rateId = rate);
  },

  getOrderId(state) {
    return state.orderId;
  },

  deleteDateStart(state) {
    state.dateTo = "";
  },

  deleteDateEnd(state) {
    state.dateFrom = "";
  },
};
