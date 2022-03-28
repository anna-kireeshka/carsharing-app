import { HTTP } from "../../services/api";
import { ActionTree } from "vuex";
import { ProfileState, City, Pvz, Car, CarFilter } from "./types";
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
};
