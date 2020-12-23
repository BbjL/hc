const path = require("path"); //引入path模块
const TerserPlugin = require("terser-webpack-plugin"); // 去console.log
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // 打包分析工具
const CompressionWebpackPlugin = require("compression-webpack-plugin"); // gzip

function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

const isProds = process.env.NODE_ENV === "production";

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: "/",
  // 指定打包上线dist文件存放目录
  // 打包时，把dist文件放置../code目录下
  outputDir: "dist",
  // // assetsDir静态资源整合，比如img,css,js,font
  assetsDir: "public",
  lintOnSave: process.env.NODE_ENV !== "production",
  // 是否保留打包之前的代码映射
  productionSourceMap: false,
  // 多入口
  pages: {
    client: {
      // page 的入口
      entry: "src/client/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "海创团队",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["common", "vendors", "bootstrap", "jquery", "mockjs", "client"],
    },
    admin: {
      // page 的入口
      entry: "src/admin/main.js",
      // 模板来源
      template: "public/admin.html",
      // 在 dist/index.html 的输出
      filename: "admin.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "信息管理-海创团队",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["common", "vendors", "elementUI", "mockjs", "admin"],
    },
  },
  configureWebpack: (config) => {
    // 切割代码块
    config.optimization.splitChunks = {
      cacheGroups: spliteChunks,
    };

    if (isProds) {
      // 去除项目中的console.log
      config.optimization.minimizer.push(productionPlugins.terserPlugin);
      // 添加差用插件
      config.plugins.push(...productionPlugins.common);
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("@client", resolve("./src/client"))
      .set("@admin", resolve("./src/admin"));

    // image-webpack-loader 由于下载源问题  请使用cnpm安装
    if (isProds) {
      config.module
        .rule("images")
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          bypassOnDebug: true,
        })
        .end();

      // config.plugins.delete('prefetch')
    }
  },
  css: {
    sourceMap: false,
    // 去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS
    requireModuleExtension: true,
  },
  devServer: {
    hotOnly: true,
    hot: true,
    disableHostCheck: true,//webpack4.0 开启热更新
    // eslint 报错展示在浏览器
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
};

const spliteChunks = {
  common: {
    // 公共js
    name: "common",
    chunks: "initial",
    minChunks: 2,
    maxInitialRequests: 5,
    minSize: 0,
    priority: 1,
    reuseExistingChunk: true,
    enforce: true,
  },
  vendors: {
    // modules
    name: "vendors",
    test: /[\\/]node_modules[\\/]/,
    chunks: "initial",
    priority: 2,
    reuseExistingChunk: true,
    enforce: true,
  },
  bootstrap: {
    name: "bootstrap",
    test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
    chunks: "all",
    reuseExistingChunk: true,
    enforce: true,
    priority: 3,
  },
  jquery: {
    name: "jquery",
    test: /[\\/]node_modules[\\/]jquery[\\/]/,
    chunks: "all",
    reuseExistingChunk: true,
    enforce: true,
    priority: 4,
  },
  mockjs: {
    name: "mockjs",
    test: /[\\/]node_modules[\\/]mockjs[\\/]/,
    chunks: "all",
    reuseExistingChunk: true,
    enforce: true,
    priority: 5,
  },
  elementUI: {
    name: "elementUI",
    test: /[\\/]node_modules[\\/].*element-ui.*[\\/]/,
    chunks: "all",
    reuseExistingChunk: true,
    enforce: true,
    priority: 6,
  },
};

const productionPlugins = {
  // 常规插件
  common: [
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
      filename: "[path].gz[query]", // 旧版本为assets，现为filename
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240, // 文件大10k进行压缩处理
      // deleteOriginalAssets: true, // 删除源文件，不建议开启
      minRatio: 0.8,
    }),
  ],
  terserPlugin: new TerserPlugin({
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
};
