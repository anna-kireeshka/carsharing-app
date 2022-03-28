import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

Vue.use(VueAxios, axios);
Vue.use(dayjs);

dayjs.extend(duration);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
