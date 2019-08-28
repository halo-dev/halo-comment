import Vue from 'vue'
import App from './App.vue'
require('promise.prototype.finally').shim();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')