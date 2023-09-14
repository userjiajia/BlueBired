<template>
  <div>
    <slot></slot>
    <div class="flex checkbox">
      <div><slot name="check"></slot></div>
      <div class="forgot"  ><slot name="forget"></slot></div>
    </div>
    <slot name="btn"></slot>
    <div class="icon_box"> 快速登录
      <i class="iconfont icon-QQ icon"></i>
      <i class="iconfont icon-xinlangweibo icon"></i>
      <i class="iconfont icon-weixin icon"></i>
      <i class="iconfont icon-github-fill icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String
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
.icon_box{
  display: flex;
  color: #999;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  .icon{
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0px 10px;
  }
  .icon-QQ{
    color: rgb(95, 199, 240);
    font-size: 20px;
  }
  .icon-QQ{
    color: rgb(95, 199, 240);
    font-size: 20px;
  }
  .icon-xinlangweibo{
    color: rgb(244, 109, 51);
    font-size: 20px;
  }
  .icon-weixin{
    color: rgb(42, 207, 105);
  }
  .icon-github-fill{
    color: #3e4151;
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
