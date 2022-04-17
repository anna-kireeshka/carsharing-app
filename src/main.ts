import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

Vue.use(VueAxios, axios);
Vue.use(dayjs);
dayjs.extend(duration);
Vue.use(DatePicker);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
