import { GetterTree } from "vuex";
import {
  CarAdditionally,
  ProfileState,
  ValueInput,
  City,
  Car,
  CarFilter,
} from "./types";
import { RootState } from "../types";
import dayjs from "dayjs";

export const getters: GetterTree<ProfileState, RootState> = {
  getCityValue: (state) => (value: ValueInput["valueCity"]) => {
    const arr = state.city;
    return arr?.filter((el: City) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
  },

  getFilteredCar: (state) => {
    let carList = state.car;
    carList = carList?.filter((el: Car) => el.priceMin >= 5000);
    return carList;
  },

  getRateFilter: (state) => {
    return state.rate;
  },

  getColorFilter: (state) => {
    return (state.colorFilter = [
      { name: "Любой", checked: false, val: "allColor" },
      { name: "Красный", checked: false, val: "red" },
      { name: "Голубой", checked: false, val: "blue" },
    ]);
  },

  getCarAdditionally: (state) => {
    return (state.carAdditionally = [
      { name: "Полный бак", checked: false, val: "fullTank", price: 500 },
      { name: "Детское кресло", checked: false, val: "babyChair", price: 200 },
      {
        name: "Правый руль",
        checked: false,
        val: "rightHandDrive",
        price: 1600,
      },
    ]);
  },

  getRateTime: (state) => {
    let duration = "";

    if (state.dateTo !== "" && state.dateFrom !== "") {
      const startDate = dayjs(state.dateTo);
      const endDate = dayjs(state.dateFrom);
      duration = dayjs.duration(startDate.diff(endDate)).format("D[д] H[ч]");
    }
    return duration;
  },

  getRateTimeMinute: (state) => {
    if (state.dateTo !== "" && state.dateFrom !== "") {
      const startDate = dayjs(state.dateTo);
      const endDate = dayjs(state.dateFrom);
      state.durationMinute = dayjs
        .duration(startDate.diff(endDate))
        .asMinutes();
    }
    return parseInt(state.durationMinute as string);
  },

  getDateToMs: (state) => {
    if (state.dateTo !== "") {
      state.dateToMs = dayjs(state.dateTo).valueOf();
    }
    return state.dateToMs;
  },

  getDateFromMs: (state) => {
    if (state.dateFrom !== "") {
      state.dateFromMs = dayjs(state.dateFrom).valueOf();
    }
    return state.dateFromMs;
  },

  fullPrice: (state) => {
    const price =
      Number(state.carPrice) +
      Number(state.additionallyPrice) +
      Number(state.ratePrice);
    if (state.dateTo === "" || state.dateFrom === "") {
      state.fullPrice = price;
    } else {
      state.fullPrice = price * Number(state.durationMinute);
    }
    return state.fullPrice;
  },

  getSortFilter: (state) => {
    const filterList = state.carFilter;
    return filterList?.filter((el: CarFilter) => el.name !== "Name");
  },
};
