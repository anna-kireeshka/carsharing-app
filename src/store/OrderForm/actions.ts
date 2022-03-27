import { HTTP } from "../../services/api";
import { ActionTree } from "vuex";
import { ProfileState, City, Pvz } from "./types";
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
};