import { MutationTree } from "vuex";
import { ProfileState, City, Pvz, ValueInput } from "./types";

export const mutations: MutationTree<ProfileState> = {
  cityLoaded(state, city: City[]) {
    state.city = city;
  },
  pvzLoaded(state, pvz: Pvz[]) {
    state.pvz = pvz;
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
};
