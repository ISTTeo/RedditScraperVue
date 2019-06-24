import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BySubReddit from './views/BySubReddit'
import ByUser from './views/ByUser'
import Post from './views/Post'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/subreddit',
      name: 'subreddit',
      
      component: BySubReddit
    },
    {
      path: '/user',
      name: 'user',
      
      component: ByUser
    },
    {
      path: '/post',
      name: 'post',
      component:Post ,
      props: true
    }
  ]
})

router.beforeEach( (to,from,next) => {
  //If one tries to access /post directly 
  if(to.fullPath == '/post' && from.fullPath != '/subreddit') {
    next('/subreddit');
  }

  //Default goes to wherever it should if not filtered before this line
  next();
})
export default router;