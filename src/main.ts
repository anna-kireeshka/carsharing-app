import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import VCalendar from "v-calendar";
import "v-calendar/dist/style.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const app = createApp(App);

app.use(router).use(store);

app.use(VueAxios, axios);
app.use(dayjs);
dayjs.extend(duration);
app.use(VCalendar, { componentPrefix: "vc" });

app.mount("#app");
