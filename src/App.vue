<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './views/layout'
import Footer from './components/footer'

export default {
  components: {
    Nav,
    Footer
  },
  created () {
    this.$store.dispatch('getStudyFn', {
      page: '1',
      pagesize: '4',
      type: 'all',
      tag: 'all'
    })
    this.$store.dispatch('CourseList')
  }
}
</script>
