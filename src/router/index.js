import Vue from 'vue'
import Router from 'vue-router'
import deletes from '@/components/deletes'
// import indexs from '@/components/indexs'
import provisionapp from '@/components/provision_app'
import deprovisionapp from '@/components/deprovision'
import createcus from '@/components/createcus'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: provisionapp },
    { path: '/deletes', component: deletes },
    { path: '/provisionapp', component: provisionapp },
    { path: '/de-provisionapp', component: deprovisionapp },
    { path: '/createcus', component: createcus }
  ]
})
