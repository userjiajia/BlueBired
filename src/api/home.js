import request from '@/utils/request'
import axios from 'axios'

// 获取 科目列表
export const getCourseList = () => {
  return request.get('/courseList.php')
}

// 获取 课程教程 列表 基地址不一样 所以单独拆开
export const getStudyList = (page, pagesize, type, tag) => {
  return axios.get('https://tools.yufenghen.cn/mock/vueserver/bluebird/allCourseList.php', {
    params: {
      page,
      pagesize,
      type,
      tag
    }
  })
}
