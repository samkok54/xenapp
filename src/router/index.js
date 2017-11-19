import Vue from 'vue'
import Router from 'vue-router'
import Application from '@/components/Application'
import deletes from '@/components/deletes'
// import indexs from '@/components/indexs'
import provisionapp from '@/components/provision_app'
import provisionuser from '@/components/provisionUser'
import project from '@/components/project'
import deprovisionapp from '@/components/deprovision'
import createcus from '@/components/createcus'
import login from '@/components/login'
import menubar from '@/components/menubar'
import getuser from '@/components/getuser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: login },
    // { path: '/deletes', component: deletes },
    // { path: '/provisionapp', component: provisionapp },
    // { path: '/de-provisionapp', component: deprovisionapp },
    // { path: '/createcus', component: createcus },
    { path: '/login', component: login },
    { path: '/menubar',
      component: menubar,
      children: [{path: '/', component: project},
        {path: '/deletes', component: deletes},
        {path: '/provision_app/:customer', component: provisionapp},
        {path: '/provision_user/:customer', component: provisionuser},
        {path: '/createcus', component: createcus},
        {path: '/deprovision/:customer', component: deprovisionapp},
        {path: '/Application', component: Application},
        {path: '/project', component: project},
        {path: '/getuser/:customer', component: getuser}
      ]
    }
  ]
})
