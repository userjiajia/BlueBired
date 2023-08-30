import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入一级路由
import Home from '@/views/layout/home'
import Subject from '@/views/layout/subject'
import Path from '@/views/layout/path'
import Talk from '@/views/layout/talk'
import XunL from '@/views/layout/xunL'
import Vip from '@/views/layout/vip'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/subject', component: Subject },
  { path: '/path', component: Path },
  { path: '/talk', component: Talk },
  { path: '/xunL', component: XunL },
  { path: '/vip', component: Vip }
]

const router = new VueRouter({
  routes
})

export default router
