import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

window.Vue = Vue
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: function () {
        require('./pages/demo.vue')
      }
    }

  ]
})

new Vue({
  template: '<App/>',
  router,
  render: h => h(App)
}).$mount('#app-container')
