import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../pages/MainPage.vue";
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
    meta: {
      breadCrumb() {
        return [
          {
            text: "Местоположение",
            to: {
              name: "location",
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
