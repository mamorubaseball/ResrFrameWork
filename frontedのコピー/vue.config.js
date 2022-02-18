const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  publicPath: "http://0.0.0.0:8080/",
  outputDir: "./dist/",
  transpileDependencies: ["vuetify"],

  chainWebpack: config => {
    config.optimization.splitChunks(false);

    config.output.filename("bundle.js");

    config
      .plugin("BundleTracker")
      .use(BundleTracker, [{ filename: "./webpack-stats.json" }]);

    config.resolve.alias.set("__STATIC__", "static");

    config.devServer
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .disableHostCheck(true)
      .headers({ "Access-Control-Allow-Origin": ["*"] });
  },

};
