import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import upload from '../views/upload.vue'
import edit from '../views/edit.vue'
import Favo from '../views/favo.vue'
import create from '../views/playlist.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
    path: '/edit-profile',
    name: 'edit',
    component: edit
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
    path: '/Favorites',
    name: 'favo',
    component: Favo
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Create',
    name: 'create',
    component: create
  }
]

const router = new VueRouter({
  routes
})

export default router
