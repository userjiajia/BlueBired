import Vue from 'vue'
import Vuex from 'vuex'

import { getStudyList, getCourseList, getTalkList, getXunList, getCourseId } from '@/api/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    StudyList: [],
    courseList: [],
    StudyList2: [],
    TalkList: [],
    talkTotal: 0,
    total: 0,
    xunList: [],
    CourseId: [],
    loginType: 'login'
  },
  mutations: {
    setLoginType (state, val) {
      state.loginType = val
    },
    StudyList (state, NewList) {
      state.StudyList = NewList
    },
    StudyList2 (state, NewList) {
      state.StudyList2 = NewList
    },
    courseList (state, NewList) {
      state.courseList = NewList
    },
    setTotal (state, num) {
      state.total = num
    },
    setTalkList (state, newList) {
      state.TalkList = newList
    },
    setTalkTotal (state, num) {
      state.talkTotal = num
    },
    setXunList (state, newList) {
      state.xunList = newList
    },
    setCourseId (state, newId) {
      state.CourseId = newId
    }
  },
  actions: {
    async getStudyFn (context, obj) {
      const { page, pagesize, type, tag } = obj
      const { data: { data, total } } = await getStudyList(page, pagesize, type, tag)
      // const { data } = await getStudyList(page, pagesize, type, tag)
      if (pagesize === '4') {
        context.commit('StudyList', data || [])
      } else {
        context.commit('StudyList2', data || [])
        context.commit('setTotal', total)
      }
    },
    async CourseList (context) {
      const { data: { data } } = await getCourseList()
      context.commit('courseList', data || [])
    },
    async getTalkList (context, obj) {
      const { page, pagesize } = obj
      const { data: { data, total } } = await getTalkList(page, pagesize)
      context.commit('setTalkList', data)
      context.commit('setTalkTotal', total)
    },
    async getXunList (context) {
      const { data: { data } } = await getXunList()
      context.commit('setXunList', data)
    },
    async getCourseId (context) {
      const { data: { data } } = await getCourseId()
      context.commit('setCourseId', data)
    }
  },
  modules: {
  }
})
