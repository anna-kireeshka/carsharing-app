import { HTTP } from "../../services/api";
import { ActionTree } from "vuex";
import { ProfileState, City, Pvz, Car, CarFilter, Rate } from "./types";
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

  fetchDataCar({ commit }) {
    HTTP.get("/api/db/car").then(
      (response) => {
        const car: Car[] = response.data;
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

  fetchDataRate({ commit }) {
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
};
