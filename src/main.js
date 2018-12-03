import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import router from './assets/js/router.js'
//import Mint from 'mint-ui';
Vue.use(Mint);

Vue.prototype.$http=axios
Vue.use(vueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
   router:router
   	
  
})
