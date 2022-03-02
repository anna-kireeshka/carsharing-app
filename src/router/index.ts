import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import CarModel from "@/components/CarModel.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/car-model",
    name: "CarModel",
    component: CarModel,
    props: true,
    meta: {
      breadCrumb() {
        return [
          {
            text: "Местоположение",
            to: { name: "location" },
          },
          {
            text: "Модель",
            to: {
              name: "CarModel",
            },
          },
        ];
      },
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
