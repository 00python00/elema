import Vue from 'vue'
import Router from 'vue-router'
import iii from '@/components/iii'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/y',
      name: 'iii',
      component: iii
    }
  ]
})
