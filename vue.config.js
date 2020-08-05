module.exports = {
  productionSourceMap: true, // 设为false打包时不生成.map文件
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8700,
    compress: true,
    disableHostCheck: true,
    // proxy: {

    // }
  }

}