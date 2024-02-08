const path = require("path");
const vueSrc = "./src/";
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        "@": path.resolve(__dirname, vueSrc),
      },
      extensions: [".js", ".vue", ".json", ".html"],
    },
  },
});
