import { MutationTree } from "vuex";
import { ProfileState, City } from "./types";

export const mutations: MutationTree<ProfileState> = {
  cityLoaded(state, city: City[]) {
    state.error = false;
    state.city = city;
  },
  cityError(state) {
    state.error = true;
    state.city = undefined;
  },
};
