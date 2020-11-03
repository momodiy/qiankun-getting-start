/*
* Created by Steven Lee
* Date: 2020/11/2
* Time: 23:23
* Project: 微前端
* */
module.exports = {
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: {
    output: {
      library: 'vue',
      libraryTarget: 'umd'
    }
  }
}
