import axios from "axios";

export const HTTP = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/db",
  headers: {
    "Content-Type": "application/json",
  },
});
HTTP.defaults.headers.common["X-Api-Factory-Application-Id"] =
  "5e25c641099b810b946c5d5b";

// Временное решение пока не раотает базовое апи
export const HTTP_FAKE = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
