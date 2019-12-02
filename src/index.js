// 组件的入口文件
import Vue from 'vue';
import App from './app.vue';

const root = document.createElement('div');
document.body.appendChild(root);

// 是render: function (createElement) {
//   return createElement(App);
// }的缩写

//$mount()手动挂载，然后渲染
new Vew({
  render:(h)=>h(App)
}).$mount(root);