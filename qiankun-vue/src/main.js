import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false
//

let instance = null

function render(props) {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app') // 挂载在自己的html中，基座可以拿到挂载后的html将其插入
}

if (window.__POWERED_BY_QIANKUN__) { // 判断是否独立运行
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ //动态添加publicPath
} else {
  render() // 独立运行
}

// 子组件的协议
export async function bootstrap(props) {
}

export async function mount(props) {
  console.log(props, 'props')
  render(props)
}

export async function unmount(props) {
  instance.$destroy()
}
