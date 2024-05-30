import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import PostDetailView from '@/views/PostDetailView.vue'
import PostEditlView from '@/views/PostEditView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'welcome',
      alias: '/welcome',
      component: WelcomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/posts/:id',
      name: 'post-detail',
      component: PostDetailView
    },
    {
      path: '/posts/:id/edit',
      name: 'post-edit',
      component: PostEditlView
    }
  ]
})

export default router
