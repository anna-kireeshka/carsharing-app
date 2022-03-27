import { GetterTree } from "vuex";
import { CarAdditionally, ProfileState, ValueInput } from "./types";
import { RootState } from "../types";
import dayjs from "dayjs";

export const getters: GetterTree<ProfileState, RootState> = {
  getCityValue: (state) => (value: ValueInput["valueCity"]) => {
    const arr = state.city.data;
    return arr?.filter((el: any) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
  },

  getFilteredCar: (state) => {
    let carList = state.car.data;
    carList = carList?.filter((el: any) => el.priceMin >= 5000);
    return carList;
  },

  getRateFilter: (state) => {
    return state.rate.data;
  },

  getColorFilter: (state) => {
    state.colorFilter = [
      { name: "Любой", checked: false, val: "allColor" },
      { name: "Красный", checked: false, val: "red" },
      { name: "Голубой", checked: false, val: "blue" },
    ];
    return state.colorFilter;
  },

  getCarAdditionally: (state) => {
    state.carAdditionally = [
      { name: "Полный бак", checked: false, val: "fullTank", price: 500 },
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

  getRateTime: (state) => {
    let duration: any = null;
    if (state.dateTo !== "" && state.dateFrom !== "") {
      const startDate = dayjs(state.dateTo);
      const endDate = dayjs(state.dateFrom);
      duration = dayjs.duration(startDate.diff(endDate)).format("D[д] H[ч]");
    }
    return duration;
  },
};
