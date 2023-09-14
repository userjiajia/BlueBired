<template>
  <div class="login" v-if="isLogin">
    <!-- 登录框 -->
    <div class="box">
        <el-tabs :value="loginType" @tab-click="goLogin">
            <el-tab-pane class="tab" name="login" >
                <span slot="label" >登录</span>
                <!-- 登录框 -->
             <Login>
                <el-input placeholder="请输入手机号" v-model="phone" clearable>
                    <template slot="prepend">
                        <el-button slot="append" icon="el-icon-mobile-phone"></el-button>
                    </template>
                </el-input>
                <el-input placeholder="请输入密码" v-model="pwd" show-password>
                    <template slot="prepend">
                        <el-button slot="append" icon="el-icon-lock"></el-button>
                    </template>
                </el-input>
                <template v-slot:check>
                    <el-checkbox v-model="checked"></el-checkbox><span>下次自动登录</span>
                  </template>
                  <template v-slot:forget>
                    <el-link target="_blank">忘记密码?</el-link>
                  </template>
                  <template v-slot:btn>
                    <button id="btn_box" @click="isGoLogin">进入蓝鸟课程</button>
                  </template>
             </Login>
            </el-tab-pane>
            <el-tab-pane label="即将上线" name="reg">
                <span slot="label">注册</span>
                <!-- 注册框 -->
                <Login :type="type" :code="code">
                  <el-input placeholder="请输入手机号" v-model="phone" clearable>
                      <template slot="prepend">
                          <el-button slot="append" icon="el-icon-mobile-phone"></el-button>
                      </template>
                  </el-input>
                  <el-input placeholder="请输入密码" v-model="pwd" show-password>
                      <template slot="prepend">
                          <el-button slot="append" icon="el-icon-lock"></el-button>
                      </template>
                  </el-input>
                  <template v-slot:check>
                    <el-input v-model="code" placeholder="请输入验证码"></el-input>
                  </template>
                  <template v-slot:forget>
                    <button id="btn_box" class="code" @click="getCode">获取验证码</button>
                  </template>
                  <template v-slot:btn>
                    <button id="btn_box" @click="isGoLogin">注册并领取免费课程</button>
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
import Login from './loginFrom.vue'
import { getCode, login, reg } from '@/api/home'
import { Message } from 'element-ui'

export default {
  name: 'LoginPage',
  props: ['isLogin'],
  components: {
    Login
  },
  data () {
    return {
      activeName: 'login',
      code: '',
      checked: false,
      type: 'login',
      phone: '',
      pwd: ''
    }
  },
  computed: {
    loginType () {
      return this.$store.state.loginType
    }
  },
  methods: {
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
      this.$store.commit('setLoginType', item._props.name)
    },
    async getCode () {
      const { data: { data, msg } } = await getCode(this.phone)
      Message.success(data, msg)
    },
    check () {
      if (this.phone.trim() === '') {
        Message.error('手机号不能为空')
        return false
      }
      if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(this.phone)) {
        Message.error('请输入正确的手机号')
        return false
      }
      if (!/\w{6,16}/.test(this.pwd)) {
        Message.error('密码至少6位数')
        return false
      }
      return true
    },
    async isGoLogin () {
      if (this.loginType === 'login') {
        if (!this.check()) return
        const { data: { msg } } = await login(this.phone, this.$md5(this.pwd))
        Message.success(msg)
        this.$emit('update:isLogin', false)
      } else {
        if (!this.check()) return
        if (!/^\d{4}$/.test(this.code)) {
          Message.error('验证码至少4位')
          return
        }
        const { data: { msg } } = await reg(this.phone, this.$md5(this.pwd))
        Message.success(msg)
        this.$store.commit('setLoginType', 'login')
      }
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
