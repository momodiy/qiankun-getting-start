import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );

}

if (window.__POWERED_BY_QIANKUN__) { // 判断是否独立运行
  // __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ //动态添加publicPath
} else {
  render() // 独立运行
}

export async function bootstrap() {
}

export async function mount() {
  render()
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
