import { GetterTree } from "vuex";
import { CarAdditionally, ProfileState, ValueInput } from "./types";
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

  getColorFilter: (state) => {
    state.colorFilter = [
      { name: "Любой", checked: true, val: "allColor" },
      { name: "Красный", checked: false, val: "red" },
      { name: "Голубой", checked: false, val: "blue" },
    ];
    return state.colorFilter;
  },

  getCarAdditionally: (state) => {
    state.carAdditionally = [
      { name: "Полный бак", checked: true, val: "fullTank", price: 500 },
      { name: "Детское кресло", checked: false, val: "babyChair", price: 200 },
      {
        name: "Правый руль",
        checked: false,
        val: "rightHandDrive",
        price: 1600,
      },
    ];
    return state.carAdditionally;
  },
};
