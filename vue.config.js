module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        };
      });
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: `
         @import "@/styles/_style";
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
