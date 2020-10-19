import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
moment.locale('zh-cn')
Vue.prototype.$moment = moment

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
