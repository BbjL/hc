const path = require("path"); //引入path模块
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); 
const CompressionWebpackPlugin = require('compression-webpack-plugin')


function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: "./",
  // 指定打包上线dist文件存放目录
  // 打包时，把dist文件放置../code目录下
  outputDir: "./dist",
  // // assetsDir静态资源整合，比如img,css,js,font
  assetsDir: "public",
  lintOnSave: "warning",
  // 是否保留打包之前的代码映射
  productionSourceMap: false,
  //
  configureWebpack: (config) => {
    // 去除项目中的console.log
    config.optimization.minimizer.push(
      new TerserPlugin({
        sourceMap: false,
        // 开启多线程提高打包速度, 默认并发运行数：os.cpus().length - 1
        parallel: true,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: false,
            pure_funcs: ["console.log"], // 移除console
          },
        },
      }),
      
    );

    // 打包分析
    // config.plugins = [
    //   ...config.plugins,
    //   new BundleAnalyzerPlugin({
    //     analyzerMode: "server",
    //     analyzerHost: "localhost",
    //     analyzerPort: 3000,
    //     reportFilename: "report.html",
    //     defaultSizes: "parsed",
    //     openAnalyzer: false,
    //     generateStatsFile: false,
    //     statsFilename: "stats.json",
    //     statsOptions: null,
    //     logLevel: "info",
    //   }),
    // ];
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: "localhost",
        analyzerPort: 3000,
        reportFilename: "report.html",
        defaultSizes: "parsed",
        openAnalyzer: false,
        generateStatsFile: false,
        statsFilename: "stats.json",
        statsOptions: null,
        logLevel: "info",
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]', // 旧版本为assets，现为filename
        algorithm: 'gzip',
        test: /\.js$|\.css$/,
        threshold: 1024,
        // deleteOriginalAssets: true, // 删除源文件，不建议开启
        minRatio: 0.8
  })
    )

  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("@c", resolve("./src/components"))
      .set("@v", resolve("./src/views"))
      .set("@a", resolve("./src/assets"));

    if (process.env.NODE_ENV === "production") {
      config.module
        .rule("images")
        .use("image-wepack-loader")
        .loader("image-webpack-loader")
        .options({
          bypassOnDebug: true,
        })
        .end();
    }
  },
  css: {
    sourceMap: false,
    // 去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS
    requireModuleExtension: true,
  },
  devServer: {
    hotOnly: true,
    // eslint 报错展示在浏览器
    overlay: {
      warnings: false,
      errors: false,
    },
  },
};
