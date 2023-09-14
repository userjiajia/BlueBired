<template>
  <div class="header">
    <nav class="tab">
        <div class="nav flex">
          <div class="flex nav1">
            <router-link to="/" class="flex"><img src="http://101.42.50.205/bluebird/images/index/bluebird_logo.png" alt=""></router-link>
            <router-link to="/course/courseList">课程</router-link>
            <router-link to="/course/path">路径</router-link>
            <router-link to="/course/talk">讨论区</router-link>
            <router-link to="/xunL">训练营</router-link>
            <router-link to="/vip">会员</router-link>
          </div>
          <div class="flex nav2">
            哈哈
          </div>
          <div class="right flex">
            <el-input placeholder="搜索 课程/问答" class="input" size="small" clearable v-model="search"></el-input>
            <button class="btn" @click="login">登录</button>
            <button class="btn" id="btn_box" @click="reg">注册</button>
          </div>
        </div>
    </nav>
    <!-- 登录注册框 -->
    <AlertLogin :isLogin.sync="isLogin"></AlertLogin>
  </div>
</template>

<script>
import AlertLogin from './components/Alertlogin.vue'
export default {
  name: 'layoutIndex',
  data () {
    return {
      search: '',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      isLogin: false
    }
  },
  components: {
    AlertLogin
  },
  computed: {
  },
  methods: {
    login () {
      this.dialogFormVisible = true
      this.isLogin = true
      this.$store.commit('setLoginType', 'login')
    },
    reg () {
      this.isLogin = true
      this.$store.commit('setLoginType', 'reg')
    }
  }
}
</script>

<style scoped lang="less">
// nav
.nav2{
  display: none;
}
nav.tab{
  height: 50px;
  background: #191e29;
  position: fixed;
  z-index:3;

  width: 100%;
  .nav{
    width: 80%;
    margin: 0 auto;
    img{
      height: 40px;
    }
    a{
      color: rgba(255, 255, 255, 0.639);
      line-height: 50px;
      padding: 0px 15px;
    }
    a:hover{
      color:white
    }
    a.router-link-active{
      color:white;
    }
    .right{
      .input{
        width: 175px;
        height: 34px;
      }
        .btn{
          height: 32px;
          margin-top: -2px;
          width: 52px;
          background: transparent;
          color: rgba(255, 255, 255, 0.639);
          border-radius: 4px;
          border:1px solid rgba(255, 255, 255, 0.639);
          margin-left: 10px;
        }

    }
  }
}
@media screen and (min-width:468px) and (max-width:1000px){
  .nav1{
    display: none;
  }
  .nav2{
    display: flex;
  }
}
/* 大 */
@media screen and (min-width:992px) and (max-width:1200px){

}

</style>
