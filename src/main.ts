import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const app = createApp(App);

app.use(router).use(store);

app.use(VueAxios, axios);
app.use(dayjs);
dayjs.extend(duration);
app.use(DatePicker);

app.mount("#app");
