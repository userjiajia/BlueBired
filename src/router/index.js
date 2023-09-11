import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入一级路由
import Home from '@/views/layout/home'
import Course from '@/views/course'
import Vip from '@/views/layout/vip'
import XunL from '@/views/layout/xunL'
// 导入二级路由
import CourseList from '@/views/course/courseList'
import Path from '@/views/course/path'
import Talk from '@/views/course/talk'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  {
    path: '/course',
    component: Course,
    children: [
      { path: 'courseList', component: CourseList },
      { path: 'path', component: Path },
      { path: 'talk', component: Talk }
    ]

  },
  { path: '/vip', component: Vip },
  { path: '/xunL', component: XunL }
]

const router = new VueRouter({
  routes
})

export default router
