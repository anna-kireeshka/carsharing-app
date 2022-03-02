import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../pages/MainPage.vue";
//import Home from "../views/Home.vue";
import CarModel from "@/components/CarModel.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
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
  },
];

const router = new VueRouter({
  routes,
});

export default router;
