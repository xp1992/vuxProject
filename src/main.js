// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import axios from 'axios'
import 'jquery'

// Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })
Vue.prototype.$http = axios.create({
  // baseURL: 'http://salewxqa.gtdreamlife.com/rest/api/',
  baseURL: '/api/',
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.commonFn = {
  isNullOrBlank: function (str) {
    if (str === null || str === '' || str === undefined) {
      return true
    }
    return false
  }
}

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
