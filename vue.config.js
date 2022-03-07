module.exports = {
  publicPath: "",
  outputDir: "./docs",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
                    @import "@/assets/scss/_variables.scss";
                `,
      },
    },
  },
};

// vue-cli 의 "@""는  "/src" 와 같다
