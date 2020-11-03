import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUI)

import {registerMicroApps, start} from 'qiankun'

const apps = [
  {
    name: 'vue',
    entry: 'http://localhost:10001', // 默认会加载这个html，计息里面的js 动态执行 （子应用必须支持跨域）
    container: '#vue',
    activeRule: '/vue',
    props: {
      type: 'enjoy it'
    }
  },
  {
    name: 'react',
    entry: 'http://localhost:20000', // 默认会加载这个html，计息里面的js 动态执行 （子应用必须支持跨域）
    container: '#react',
    activeRule: '/react',
    props: {
      a: '1'
    }
  },
]
registerMicroApps(apps, {}) //注册应用
start()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
