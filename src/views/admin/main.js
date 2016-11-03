import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

window.Vue = Vue
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: function (resolve) {
        require(['./pages/Hello.vue'], resolve)
      }
    }

  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app-container')
