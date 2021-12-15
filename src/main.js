// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button } from 'ant-design-vue'
import ant from 'ant-design-vue'


Vue.use(ant)
Vue.component(Button.name, Button);

Vue.config.productionTip = false

// Vue使用element-ui
Vue.use(ElementUI)
const history = require('connect-history-api-fallback');

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount("#app");
