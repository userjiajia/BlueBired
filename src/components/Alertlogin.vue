<template>
  <div class="login" v-if="isLogin">
    <!-- 登录框 -->
    <div class="box">
        <el-tabs :value="type" @tab-click="goLogin">
            <el-tab-pane class="tab" name="login" >
                <span slot="label" >登录</span>
                <!-- 登录框 -->
                <Login :type="type" @changeType="handle">
                  <template v-slot:check>
                    <el-checkbox v-model="checked"></el-checkbox><span>下次自动登录</span>
                  </template>
                  <template v-slot:forget>
                    <el-link target="_blank">忘记密码?</el-link>
                  </template>
                  <template v-slot:btn>
                    进入蓝鸟课程
                  </template>
                </Login>
            </el-tab-pane>
            <el-tab-pane label="即将上线" name="reg">
                <span slot="label">注册</span>
                <!-- 注册框 -->
                <Login :type="type" :code="code">
                  <template v-slot:check>
                    <el-input v-model="code" placeholder="请输入验证码"></el-input>
                  </template>
                  <template v-slot:forget>
                    <button id="btn_box" class="code">获取验证码</button>
                  </template>
                  <template v-slot:btn>
                    注册并领取免费课程
                  </template>
                </Login>
            </el-tab-pane>
        </el-tabs>
        <el-button icon="el-icon-close" circle @click="close"></el-button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Login from '@/components/loginFrom.vue'
export default {
  name: 'LoginPage',
  props: ['isLogin', 'type'],
  components: {
    Login
  },
  data () {
    return {
      activeName: 'login',
      code: '',
      checked: false
    }
  },
  methods: {
    handle (type) {
      console.log(1)
      console.log(type)
      // this.$emit('update:type', type)
    },
    close () {
      $('.box').animate({
        top: 0,
        opacity: 0
      }, 10)
      setTimeout(() => {
        this.$emit('update:isLogin', false)
      }, 200)
    },
    goLogin (item) {
      this.$emit('update:type', item.name)
    }
  },
  watch: {
    isLogin (val) {
      if (val) {
        this.$nextTick(() => {
          $('.box').animate({
            top: '120px',
            opacity: 1
          }, 10)
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.login{
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.568);
    position: fixed;
    z-index: 2;
    .box{
        width: 350px;
        position: absolute;
        left: 50%;
        margin-left: -175px;
        background: white;
        top:-120px;
        opacity: 0;
        padding: 20px;
        .til{
            position: relative;
        }
    }
}

</style>
<style>
.el-button{
    border:none !important;
    position: absolute;
    right: 10px;
    top:10px;
}
.el-button:focus, .el-button:hover{
    color:black !important;
    background: #11aa8b22 !important;
}
</style>
