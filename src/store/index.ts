import Vuex from "vuex";
import { RootState } from "./types";

import { OrderForm } from "./OrderForm/index";

export default new Vuex.Store<RootState>({
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {
    OrderForm,
  },
  mutations: {},
  actions: {},
});
