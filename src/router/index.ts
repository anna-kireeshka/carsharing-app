import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import FinalOrder from "@/components/FinalOrder.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
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
