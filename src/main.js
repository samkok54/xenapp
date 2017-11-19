// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.js'
import VueResource from 'vue-resource/dist/vue-resource.min.js'
import VueSweetalert2 from 'vue-sweetalert2'
import VeeValidate from 'vee-validate'
import '../static/fonts/Kanit/stylesheet.css'
// import '../static/fonts/Athiti/stylesheet.css'
// import '../static/fonts/Poppins/stylesheet.css'
// import '../static/fonts/THSarabun/stylesheet.css'
// import 'font-awesome/css/font-awesome.css'

Vue.use(VueSweetalert2)
Vue.use(VueResource)
Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
