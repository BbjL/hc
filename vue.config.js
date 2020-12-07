const path = require('path');//引入path模块

function resolve(dir){
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  // 指定打包上线dist文件存放目录
  // 打包时，把dist文件放置../code目录下
  outputDir: "./dist",
  // // assetsDir静态资源整合，比如img,css,js,font
  assetsDir: "public",
  lintOnSave: 'warning',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@c',resolve('./src/components'))
      .set('@v',resolve('./src/views'))
      .set('@a',resolve('./src/assets'))
  },
  devServer: {
    hotOnly: true,
    // eslint 报错展示在浏览器
    overlay: {
      warnings: false,
      errors: false,
    },
  }
};
