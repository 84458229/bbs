module.exports = {
  productionSourceMap: false, // 设为false打包时不生成.map文件
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8700,
    compress: true,
    disableHostCheck: true,
    // proxy: {

    // }
  }

}