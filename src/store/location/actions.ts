import { HTTP } from "../../services/api";
import { ActionTree } from "vuex";
import { ProfileState, City } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    HTTP.get("city").then(
      (response) => {
        const city: City[] = response && response.data;
        commit("cityLoaded", city);
      },
      (error) => {
        console.log(error);
        commit("cityLoaded");
      }
    );
  },
};
