/*
* Created by Steven Lee
* Date: 2020/11/3
* Time: 1:31
* Project: 微前端
* */

module.exports = {
  webpack: config => {
    config.output.library = 'reactApp'
    config.output.libraryTarget = 'umd'
    config.output.publicPath = 'http://localhost:20000/'
    return config
  },
  devServer: configFunction => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      config.port = '20000'
      config.headers = {
        "Access-Control-Allow-Origin": "*"
      }
      return config
    }
  }
}
