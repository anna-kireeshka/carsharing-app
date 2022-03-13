import { MutationTree } from "vuex";
import { ProfileState, City, Pvz, ValueInput } from "./types";

export const mutations: MutationTree<ProfileState> = {
  cityLoaded(state, city: City[]) {
    state.error = false;
    state.city = city;
  },
  pvzLoaded(state, pvz: Pvz[]) {
    state.error = false;
    state.pvz = pvz;
  },

  searchCity(state, payload: ValueInput["valueCity"]) {
    state.valueCity = payload;
  },
  searchPvz(state, payload: ValueInput["valuePvz"]) {
    state.valuePvz = payload;
  },

  cityError(state) {
    state.error = true;
    state.city = undefined;
  },
  pvzError(state) {
    state.error = true;
    state.pvz = undefined;
  },
};
