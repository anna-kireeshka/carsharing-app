import { GetterTree } from "vuex";
import { City, ProfileState, ValueInput } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<ProfileState, RootState> = {
  getCityValue: (state: City[]) => (value: ValueInput["valueCity"]) => {
    console.log(state.map);
    console.log(value);
    // if (state.length !== 0) {
    //   console.log(state)
    //   state =  state.filter((el) => {
    //     el.name.toLowerCase().includes(value.toLowerCase());
    //   });
    // }
    return state;
  },
};
