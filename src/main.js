import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
