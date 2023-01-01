import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "MainPage",
    component: () => import("@/pages/MainPage.vue"),
    props: true,
  },
  {
    path: "/OrderForm",
    name: "location",
    component: () => import("@/components/CardLocation.vue"),
    props: true,
  },
  {
    path: "/car-model",
    name: "CarModel",
    component: () => import("@/components/CarModel.vue"),
    props: true,
  },
  {
    path: "/additionally",
    name: "OrderAdditionally",
    component: () => import("@/pages/OrderAdditionally.vue"),
  },
  {
    path: "/final-order",
    name: "FinalOrder",
    component: () => import("@/components/FinalOrder.vue"),
    props: true,
  },
  {
    path: "/order/:id",
    name: "ConfirmOrder",
    component: () => import("@/pages/ConfirmOrder.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/ConfirmOrder.vue"),
    name: "NotFoundPage",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
