import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Register.vue';
import Home from '../views/Home.vue';
import Meeting from '../views/Meeting.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: Landing,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Signup,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/meet',
    name: 'Meeting',
    component: Meeting,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
