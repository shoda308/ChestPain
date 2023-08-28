import Vue from 'vue'
import Router from 'vue-router'
import Scene6 from '@/components/Scene6'
import Scene4 from '@/components/Scene4'
import Scene7 from '@/components/Scene7'
import Scene5 from '@/components/Scene5'


Vue.use(Router)

export default new Router({
  routes: [
#ifdef WKAKUTEI
    {
      path: '/',
      name: 'Index',
      redirect: { name: 'Scene6' }
    },
    {
      path: '/scene6',
      name: 'Scene6',
      component: Scene6
    },
#else
    {
      path: '/',
      name: 'Index',
      redirect: { name: 'Scene4' }
    },
#endif
    {
      path: '/scene4',
      name: 'Scene4',
      component: Scene4
    },
    {
      path: '/scene7',
      name: 'Scene7',
      component: Scene7
    },
    {
      path: '/scene5',
      name: 'Scene5',
      component: Scene5
    }
  ]
})
