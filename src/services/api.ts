import axios from "axios";

const API_KEY = process.env.VUE_APP_CARSHARING_APPLICATION_ID;
export const HTTP = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com",
  headers: {
    "Content-Type": "application/json",
  },
});
HTTP.defaults.headers.common["X-Api-Factory-Application-Id"] = API_KEY;
