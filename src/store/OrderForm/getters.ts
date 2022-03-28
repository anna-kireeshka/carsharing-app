import { GetterTree } from "vuex";
import { ProfileState, ValueInput } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<ProfileState, RootState> = {
  getCityValue: (state) => (value: ValueInput["valueCity"]) => {
    const arr = state.city.data;
    return arr?.filter((el: any) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
  },
};
