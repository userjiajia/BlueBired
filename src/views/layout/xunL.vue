<template>
    <div class="xunL">
      <div class="banner">
        <h1>来一场高效又实战的训练</h1>
        <h4>资深工程师指导学习，实战中融会贯通IT技术</h4>
        <el-button type="primary">主要按钮</el-button>
      </div>
      <ul class="container flex">
        <li v-for="(item,i) in list" :key="i">
          <img :src="item.img" alt="">
          <p :class="{active:i===1}">{{ item.a }}</p>
          <p :class="{active:i===1}">{{ item.b }}</p>
        </li>
      </ul>
      <div class="bootcamp_list">
        <div class="til">
          <h3 id="btn_box">训练营课程</h3>
          <p>动手实践，激发创新实力</p>
        </div>
        <XunList :xunList="xunList"></XunList>
      </div>
    </div>
</template>

<script>
import XunList from '@/components/xunList.vue'
export default {
  name: 'xunLPage',
  components: {
    XunList
  },
  data () {
    return {
      list: [
        { img: 'http://101.42.50.205/bluebird/images/bootcamp/bootcamp-project.png', a: '优秀项目', b: '专注实战' },
        { img: 'http://101.42.50.205/bluebird/images/bootcamp/bootcamp-teacher.png', a: '技术大牛', b: '有问必答' },
        { img: 'http://101.42.50.205/bluebird/images/bootcamp/bootcamp-comment.png', a: '实验报告', b: '悉心点评' },
        { img: 'http://101.42.50.205/bluebird/images/bootcamp/bootcamp-certificate.png', a: '完成课程', b: '获得证书' }
      ],
      page: 1,
      pagesize: 15
    }
  },
  computed: {
    xunList () {
      return this.$store.state.xunList
    },
    total () {
      return this.$store.state.xunTotal
    }
  },
  async mounted () {
    await this.$store.dispatch('getXunList', {
      page: this.page,
      pagesize: this.pagesize
    })
  }
}
</script>

<style lang="less" scoped>
.banner{
  height: 340px;
  background-color: rgb(8, 191, 145);
  color:white;
  text-align: center;
  overflow: hidden;
  h1{
    margin-top: 80px;
    text-shadow: rgba(0, 0, 0, 0.2) 3px 3px;
    font-size: 60px;
    margin-bottom: 20px;
  }
  h4{
    font-size: 25px;
    font-weight: 100;
    text-shadow: rgba(0, 0, 0, 0.2) 3px 3px;
    margin-bottom: 30px;
  }
}
.container{
  justify-content: space-around;
  padding: 40px 30px 20px;
  li{
    text-align: center;
    color: rgb(8, 191, 145);
    img{
      width: 148px;
      height: 148px;
    }
  }
  .active{
    padding-left: 30px !important;
    text-align: left !important;
  }
}
.bootcamp_list{
  background-image: linear-gradient(rgb(240, 255, 252),white);
  .til{
    text-align: center;
    padding: 30px 0px;
    color: #11aa8c;
    h3{
      width: 137px;
      height: 40px;
      line-height: 40px;
      font-weight: 400;
      margin: 10px auto;
    }
  }
}
</style>
<style>
.el-button--primary{
  background: rgb(252, 215, 31) !important;
  color:black !important;
}
.el-button--primary:focus, .el-button--primary:hover{
  border:1px solid #fcd71f !important;
  color:black !important;
  background: #fcd71f9e !important;
}
</style>
