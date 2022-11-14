module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
         @import "@/styles/_style.scss";
         @import "@/styles/_media.scss";
         @import "@/styles/_fonts.scss";
         @import "@/styles/_media_mini.scss";
         @import "@/styles/_media_mobile.scss";
      `,
      },
    },
  },

  outputDir: "docs",
  publicPath: "",
};
