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

  getFilteredCar: (state) => {
    const engRegEx = /([a-z])/g;
    let carList = state.car.data;
    carList = carList?.filter(
      (el: any) => el.priceMin >= 5000 && el.name?.match(engRegEx)
    );
    return carList;
  },

  getRateFilter: (state) => {
    let rateList = state.rate.data;
    rateList = rateList?.filter((el: any) => el !== undefined);

    return rateList;
  },
};
