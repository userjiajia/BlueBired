<template>
  <div class="footer">
    <div class="center flex">
      <div class="logo">
        <img src="http://101.42.50.205/bluebird/images/index/bluebird_logo.png" alt="">
        <p>做一只蓝鸟,在技术天空里翱翔</p>
        <div class="flex">
          <span>微信</span>
          <span>qq</span>
          <span>微博</span>
        </div>
      </div>
      <div class="left">
        <ul v-for="(item,i) in list" :key="i">
          <li>{{item.til}}</li>
          <li v-for="(item,i) in list[i].data" :key="i">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerPage',
  data () {
    return {
      list: [
        { til: '公司', data: ['关于我们', '联系我们', '加入我们', '技术博客'] },
        { til: '合作', data: ['我要投稿', '教师合作', '高校合作', '友情链接'] },
        { til: '服务', data: ['实战训练营', '会员服务', '实验报告', '常见问题', '隐私条款'] },
        { til: '学习路线', data: ['Web前端学习路径', 'Java服务器学习路径', '软件测试学习路径', 'php学习路径', 'Python学习路径', '全部'] }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.footer{
  background: #191e29;
  height: 200px;
  .logo{
    margin-top:15px;
    color:white;
    font-size: 14px;
    img{
      width: 119px;
      height: 50px;
      margin-bottom: 10px;
    }
    div{
      margin-top:10px
    }
  }
  .left{
    color:rgba(255, 255, 255, 0.639);
    font-size: 12px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    ul{
      margin-top: 20px;
      li:first-child{
        margin-bottom: 15px;
        font-size: 16px;
      }
      li{
        line-height: 19px;
      }
      li:hover{
        color:white
      }
    }
  }
}
</style>
