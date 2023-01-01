import { GetterTree } from "vuex";
import { CarAdditionally, ProfileState, City, Car } from "./types";
import { RootState } from "../types";
import dayjs from "dayjs";
import _ from "lodash";

export const getters: GetterTree<ProfileState, RootState> = {
  getCityValue: (state: ProfileState) => (value: string) => {
    const arr = _.cloneDeep(state.city);
    if (!_.isEmpty(value)) {
      return arr?.filter((el: City) =>
        el.name.toLowerCase().includes(value.toLowerCase())
      );
    }
    return arr;
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

    if (state.dateTo && state.dateFrom) {
      const startDate = dayjs(state.dateTo);
      const endDate = dayjs(state.dateFrom);

      duration = dayjs.duration(startDate.diff(endDate)).format("D[д] H[ч]");
    }

    return duration;
  },

  getRateTimeMinute: (state) => {
    if (state.dateTo && state.dateFrom) {
      const startDate = dayjs(state.dateTo);
      const endDate = dayjs(state.dateFrom);
      state.durationMinute = dayjs
        .duration(startDate.diff(endDate))
        .asMinutes();
    }
    return parseInt(state.durationMinute as string);
  },

  getDateToMs: (state) => {
    if (state.dateTo) {
      state.dateToMs = dayjs(state.dateTo).valueOf();
    }

    return state.dateToMs;
  },

  getDateFromMs: (state) => {
    if (state.dateFrom) {
      state.dateFromMs = dayjs(state.dateFrom).valueOf();
    }

    return state.dateFromMs;
  },

  fullPrice: (state) => {
    let price = Number(state.carPrice);

    if (state.dateTo || state.dateFrom) {
      if (state.rateId === "24h") {
        price = price + Number(state.ratePrice);
      } else if (state.rateId === "1min") {
        price = price + Number(state.durationMinute) * 9;
      }
    }

    return (state.fullPrice = price);
  },
};
