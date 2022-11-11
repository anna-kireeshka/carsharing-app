/* eslint-disable @typescript-eslint/no-var-requires */
const city = require("./city.json");
const pvz = require("./pvz.json");

module.exports = () => ({
  city: city,
  pvz: pvz,
});
