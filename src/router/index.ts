import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../pages/MainPage.vue";
//import Home from "../views/Home.vue";
import CardLocation from "@/components/CardLocation.vue";

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
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  /**Местоположение */
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/location",
    name: "CardLocation",
    component: CardLocation,
    props: true,
    meta: {
      breadCrumb() {
        return [
          {
            text: "Местоположение",
            to: {
              name: "CardLocation",
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
