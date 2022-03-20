import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import FinalOrder from "@/components/ModalFinalOrder.vue";
import OrderAdditionally from "@/components/OrderAdditionally.vue";
import CarModel from "@/components/CarModel.vue";
import CardLocation from "@/components/CardLocation.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "",
    name: "MainPage",
    component: MainPage,
    props: true,
  },
  {
    path: "/location",
    name: "location",
    component: CardLocation,
    props: true,
  },
  {
    path: "/car-model/:city/:pvz",
    name: "CarModel",
    component: CarModel,
    props: true,
  },
  {
    path: "/additionally",
    name: "OrderAdditionally",
    component: OrderAdditionally,
    props: true,
  },
  {
    path: "/final-order",
    name: "FinalOrder",
    component: FinalOrder,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
