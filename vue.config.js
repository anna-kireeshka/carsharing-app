//  module.exports = {
//     css: {
//       extract: false,
//       loaderOptions: {
//         sass: {
//           prependData: "@import `@/styles/_style.scss`;"
//         }
//       }
//     }
//   };
//module.exports = {}
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_style.scss";`,
      },
    },
  },
};
