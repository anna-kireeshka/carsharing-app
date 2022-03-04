import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import OrderAdditionally from "@/components/OrderAdditionally.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/additionally",
    name: "OrderAdditionally",
    component: OrderAdditionally,
    meta: {
      breadCrumb() {
        return [
          {
            text: "Модель",
            to: {
              name: "CarModel",
            },
          },
          {
            text: "Дополнительно",
            to: {
              name: "OrderAdditionally",
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
