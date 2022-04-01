import { HTTP } from "../../services/api";
import { ActionTree } from "vuex";
import {
  Car,
  CarFilter,
  City,
  FinalOrder,
  OrderStatus,
  ProfileState,
  Pvz,
  Rate,
} from "./types";
import { RootState } from "../types";

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }) {
    HTTP.get("/api/db/city/").then(
      (response) => {
        const city: City[] = response.data;
        commit("cityLoaded", city);
      },
      (error) => {
        console.log(error);
        commit("cityLoaded");
      }
    );
  },
  fetchDataPvz({ commit, state }) {
    HTTP.get("/api/db/point", { params: { cityId: state.cityId } }).then(
      (response) => {
        const pvz: Pvz[] = response.data;
        commit("pvzLoaded", pvz);
      },
      (error) => {
        console.log(error);
        commit("pvzLoaded");
      }
    );
  },

  fetchDataCar({ commit, state }) {
    HTTP.get("/api/db/car", {
      params: { categoryId: state.categoryId },
    }).then(
      (response) => {
        const car: Car[] = response.data;
        state.loadingCarList = true;
        commit("carLoaded", car);
      },
      (error) => {
        console.log(error);
        commit("carLoaded");
      }
    );
  },

  fetchDataCarFilter({ commit }) {
    HTTP.get("/api/db/category").then(
      (response) => {
        const carFilter: CarFilter[] = response.data;
        commit("carFilterLoaded", carFilter);
      },
      (error) => {
        console.log(error);
        commit("carFilterLoaded");
      }
    );
  },

  fetchDataRate({ commit, state }) {
    HTTP.get("/api/db/rate").then(
      (response) => {
        const rate: Rate[] = response.data;
        commit("rateLoaded", rate);
      },
      (error) => {
        console.log(error);
        commit("rateLoaded");
      }
    );
  },

  fetchDataOrder({ commit, state }) {
    HTTP.post("/api/db/order", {
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
    }).then(
      (response) => {
        const finalOrder: FinalOrder[] = response.data;
        commit("finalOrderLoaded", finalOrder);
      },
      (error) => {
        console.log(error);
      }
    );
  },

  fetchDataStatusOrder({ commit }) {
    HTTP.get("/api/db/orderStatus").then(
      (response) => {
        const orderStatus: OrderStatus = response.data;
        commit("orderStatusLoaded", orderStatus);
      },
      (error) => {
        console.log(error);
        commit("orderStatusLoaded");
      }
    );
  },

  fetchDataFinalOrderForId({ state }) {
    HTTP.get("/api/db/order/" + state.id).then(
      (response) => {
        state.orderCard = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
