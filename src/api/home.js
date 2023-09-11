import request from '@/utils/request'
// 获取 科目列表
export const getCourseList = () => {
  return request.get('https://tools.yufenghen.cn/mock/vueserver/bluebird/courseList.php')
}

// 获取 课程教程 列表 基地址不一样 所以单独拆开
export const getStudyList = (page, pagesize, type, tag) => {
  return request.get('https://tools.yufenghen.cn/mock/vueserver/bluebird/allCourseList.php', {
    params: {
      page,
      pagesize,
      type,
      tag
    }
  })
}

// 获取课程标签
export const getCourseId = () => {
  return request.get('https://tools.yufenghen.cn/mock/vueserver/bluebird/courseTagList.php')
}

// 获取讨论区
export const getTalkList = (page, pagesize) => {
  return request.get('https://tools.yufenghen.cn/mock/vueserver/bluebird/dicussionList.php', {
    params: {
      page,
      pagesize
    }
  })
}
// 获取训练营
export const getXunList = () => {
  return request.get('https://tools.yufenghen.cn/mock/vueserver/bluebird/bootcamplist.php')
}

// 获取标签 id
export const login = (mobile, password) => {
  return request({
    url: 'https://tools.yufenghen.cn/mock/vueserver/bluebird/login.php',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: {
      mobile,
      password
    }
  })
}
// 注册
export const reg = (mobile, password) => {
  return request({
    url: 'https://tools.yufenghen.cn/mock/vueserver/bluebird/reg.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      mobile,
      password
    }
  })
}
// 获取验证码
export const getCode = (mobile) => {
  return request({
    url: 'https://tools.yufenghen.cn/mock/vueserver/bluebird/numcode.php',
    params: {
      mobile
    }
  })
}
