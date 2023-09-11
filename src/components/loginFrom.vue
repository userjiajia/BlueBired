<template>
  <div>
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
    <div class="flex checkbox">
      <div><slot name="check"></slot></div>
      <div class="forgot"  @click="getCode"><slot name="forget"></slot></div>
    </div>
    <button id="btn_box" @click="handleLogin"><slot name="btn"></slot></button>
    <div>快速登录 qq</div>
  </div>
</template>

<script>
import { login, getCode } from '@/api/home'
import { Message } from 'element-ui'
export default {
  props: {
    type: {
      type: String,
      default: 'login'
    },
    code: {
      type: String
    }
  },
  data () {
    return {
      phone: '',
      pwd: ''
    }
  },
  methods: {
    async handleLogin () {
      console.log(this.type)
      if (this.type === 'login') {
        console.log('login')
        if (!this.check()) return
        const { data: { msg } } = await login(this.phone, this.$md5(this.pwd))
        Message.success(msg)
      } else {
        // if (!this.check()) return
        // if (!/^\d{4}$/.test(this.code)) {
        //   Message.error('验证码至少4位')
        //   return
        // }
        // const { data: { msg } } = await reg(this.phone, this.$md5(this.pwd))
        // Message.success(msg)
        this.$emit('changeType', 'login')
      }
    },
    async getCode () {
      if (this.type === 'reg') {
        const { data: { data, msg } } = await getCode(this.phone)
        Message.success(data, msg)
      }
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
    }
  }
}
</script>
<style lang="less" scoped>
#btn_box{
  width: 100%;
  height: 34px;
  margin-top: 10px;
}
.code{
  height: 40px !important;
  margin-top: -0px !important;
  padding: 0px 10px;
}
.checkbox{
  color:#666;
  font-size: 12px;
  margin:15px 0px;
  span{
    margin: 0px 10px;
  }
}
</style>
<style>
.el-input-group__prepend button.el-button{
    margin: -10px -10px;
    width: 46px;
}
.el-input-group{
    margin-top: 10px;
}
.el-link.el-link--default{
  font-size: 12px;
}
.el-tabs__item{
  font-weight: 700 !important;
  font-size: 16px !important;
}
</style>
