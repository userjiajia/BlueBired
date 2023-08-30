<template>
  <div class="header">
    <nav class="tab">
        <div class="nav flex">
          <div class="flex">
            <router-link to="/" class="flex"><img src="http://101.42.50.205/bluebird/images/index/bluebird_logo.png" alt=""></router-link>
            <router-link to="/subject">课程</router-link>
            <router-link to="/path">路径</router-link>
            <router-link to="/talk">讨论区</router-link>
            <router-link to="/xunL">训练营</router-link>
            <router-link to="/vip">会员</router-link>
          </div>
          <div class="right flex">
            <el-input placeholder="搜索 课程/问答" class="input" size="small" clearable v-model="search"></el-input>
            <button class="btn" @click="dialogFormVisible=true">登录</button>
            <button class="btn" id="btn_box">注册</button>
          </div>
          <!-- 登录注册框 -->
            <el-dialog :visible.sync="dialogFormVisible" center class="dialog">
                <span>登录</span>
                <span>注册</span>
                <form action="">
                  <input type="text">
                </form>
              <div slot="footer" class="dialog-footer" >
                <el-button type="primary" @click="dialogFormVisible = false">注册并领取免费课程</el-button>
              </div>
          </el-dialog>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layoutIndex',
  data () {
    return {
      search: '',
      dialogFormVisible: false,
      formLabelWidth: '120px'
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
// nav
nav.tab{
  height: 50px;
  background: #191e29;
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
</style>
