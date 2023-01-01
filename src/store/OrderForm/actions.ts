import { HTTP, HTTP_FAKE } from "@/services/api";
import { ActionTree } from "vuex";
import {
  Car,
  City,
  FinalOrder,
  OrderStatus,
  ProfileState,
  Pvz,
  Rate,
} from "./types";
import { RootState } from "../types";
import { AxiosResponse } from "axios";
import { v4 as uuidv4 } from "uuid";

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

  async loadCar({ commit, state }, id) {
    try {
      const response: AxiosResponse<Car> = await HTTP_FAKE.get("/car", {
        params: { categoryId: id },
      });
      state.loadingCarList = true;
      commit("carLoaded", response.data);
    } catch (err) {
      console.log(err);
    }
  },

  async loadRate({ commit }) {
    try {
      const response: AxiosResponse<Rate> = await HTTP_FAKE.get("/rate");
      commit("rateLoaded", response.data);
    } catch (err) {
      console.log(err);
    }
  },

  async fetchDataOrder({ commit, state }) {
    try {
      const response: AxiosResponse<FinalOrder> = await HTTP.post("/rate", {
        orderStatusId: uuidv4(),
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
      });
      state.loadedResponsPost = true;
      commit("finalOrderLoaded", response.data);
    } catch (err) {
      console.log(err);
    }
  },

  async fetchDataStatusOrder({ commit }) {
    try {
      const response: AxiosResponse<OrderStatus> = await HTTP_FAKE.get(
        "/orderStatus"
      );
      commit("orderStatusLoaded", response.data);
    } catch (err) {
      console.log(err);
    }
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
