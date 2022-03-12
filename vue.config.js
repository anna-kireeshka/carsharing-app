module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData:
          '@import "@/styles/_style.scss";\n          @import "@/styles/_media.scss";\n          @import "@/styles/_fonts.scss";\n          @import "@/styles/_media_mini.scss";\n          @import "@/styles/_media_mobile.scss";',
      },
    },
  },

  outputDir: "docs",
  publicPath: "",
};
