import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'appWrapper',
    component: () => import('@/pages/AppWrapper.vue'),
    children:[
      {
        path: '/',
        name: 'homeApp',
        component: () => import('@/views/HomeCustom.vue')
      },
      {
        path: '/',
        name: 'homeApp',
        component: () => import('@/views/HomeCustom.vue')
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
