import { HTTP, HTTP_FAKE } from "@/services/api";
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
import { AxiosResponse } from "axios";

export const actions: ActionTree<ProfileState, RootState> = {
  async loadСities({ commit }) {
    try {
      const response: AxiosResponse<City> = await HTTP_FAKE.get("/city");
      commit("cityLoaded", response.data);
    } catch (err) {
      console.log(err);
    }
  },
  async loadPoint({ commit }, id) {
    try {
      const response: AxiosResponse<Pvz> = await HTTP_FAKE.get(`/pvz/${id}`);
      commit("pvzLoaded", response.data);
    } catch (err) {
      console.log(err);
    }
  },

  fetchDataCar({ commit, state }) {
    HTTP.get("/car", {
      params: { categoryId: state.categoryId },
    }).then(
      (response: AxiosResponse<Car[]>) => {
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
    HTTP.get("/category").then(
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
    HTTP.get("/rate").then(
      (response: AxiosResponse<Rate[]>) => {
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
    HTTP.post("/order", {
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
      (response: AxiosResponse<FinalOrder[]>) => {
        const finalOrder: FinalOrder[] = response.data;
        state.loadedResponsPost = true;
        commit("finalOrderLoaded", finalOrder);
      },
      (error) => {
        console.log(error);
      }
    );
  },

  fetchDataStatusOrder({ commit }) {
    HTTP.get("/orderStatus").then(
      (response: AxiosResponse<OrderStatus>) => {
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
    HTTP.get("/order/" + state.id).then(
      (response) => {
        state.orderCard = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
