import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Register.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: Landing,
    meta: {
      title: 'Landing Page',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Signup,
    meta: {
      title: 'Register',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - Dashboard',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
