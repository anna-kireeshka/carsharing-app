import { GetterTree } from "vuex";
import { ProfileState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<ProfileState, RootState> = {
  getCityName(state): any {
    const { city } = state;
    const cityList = city || [];
    return cityList;
  },
};
