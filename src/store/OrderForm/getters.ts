import { GetterTree } from "vuex";
import { CarAdditionally, ProfileState, ValueInput } from "./types";
import { RootState } from "../types";
import dayjs from "dayjs";
import { state } from "@/store/OrderForm/index";

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
    let duration: any = null;

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
    return parseInt(state.durationMinute);
  },

  fullPrice: (state) => {
    if (state.dateTo === "" && state.dateFrom === "") {
      state.fullPrice =
        state.carPrice + state.additionallyPrice + state.ratePrice;
    } else {
      state.fullPrice =
        state.carPrice +
        state.additionallyPrice +
        state.ratePrice * state.durationMinute;
    }
    return state.fullPrice;
  },

  getSortFilter: (state) => {
    const filterList = state.carFilter.data;
    return filterList?.filter((el: any) => el.name !== "Name");
  },

  getFinalCard: (state) => {
    const order = {
      orderStatusId: "5e26a1f0099b810b946c5d8b",
      cityId: state.cityId,
      pointId: state.pvzId,
      carId: state.carId,
      color: state.carColor,
      dateFrom: state.dateFrom,
      dateTo: state.dateTo,
      rateId: state.rateId,
      price: state.fullPrice,
      isFullTank: state.checked,
      isNeedChildChair: state.checked,
      isRightWheel: state.checked,
    };
    return (state.finalOrderCard = order);
  },
};
