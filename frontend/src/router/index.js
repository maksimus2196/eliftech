import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import SecondPage from '../views/SecondPage';
import Registrate from '../views/Registrate';
import User from '../views/User';
import Authorize from '../views/Authorize';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
      {
          title:'Authorize',
          path:'/authorize',
          component:Authorize
      },
      {
        title:'Home',
          path:'/',
          component:Home
      },
      {
      title: 'User',
      path: '/user',
      component: User
    },
    {
      title: 'Second page',
      path: '/second',
      component: SecondPage
    },
      {
        title:'Registrate',
        path:'/Registrate',
        component: Registrate
      },

    {
      path: '/*',
      redirect: '/'
    }
  ]
})
