<template>
    <div class="flex center content">
      <router-view class="right"></router-view>
      <div class="left">
        <div class="info">
          <img src="http://101.42.50.205/bluebird/images/index/bluebird_icon1.png" alt="">
          <div>
            <button class="btn">登录</button>
            <button id="btn_box">注册</button>
          </div>
          <a href="#">加入私有课</a>
          <a href="#">我要投稿</a>
        </div>
        <div class="path">
          <p class="til">热门课程</p>
          <ul>
            <li v-for="item in courseList" :key="item.courseid">
              <img :src="item.courseimg" alt="">
              {{item.coursename}}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'coursePage',
  computed: {
    courseList () {
      return this.$store.state.courseList.slice(0, 4)
    }
  }
}
</script>

<style scoped lang="less">
.content{
  align-items: start;
  padding-bottom: 60px;
}
.right{
  flex:1;
  margin-top: 80px;
}
.left{
  width: 280px;
  margin-left: 30px;
  margin-top: 80px;
  .info{
    text-align: center;
    border:1px solid #d6d6d6;
    border-radius: 4px;
    padding-bottom: 20px;
    img{
      width:249px;
      height:80px;
      box-sizing: content-box;
      padding: 16px 10px;
      border-bottom: 1px solid #e3e3e3;
    }
    button{
      width:105px;
      height: 31px;
      border:none;
      margin: 20px 10px;
      border-radius: 4px;
    }
    .btn{
      background: transparent;
      border:1px solid #11aa8c;
    }
    a{
      margin: 0px 34px;
      color:#11aa8c;
      font-size: 14px;
    }
  }
  .path{
    margin-top:20px;
    border:1px solid #d6d6d6;
    border-radius: 4px;
    p{
      padding: 10px 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    ul{
      margin:10px 0px;
    }
    li{
      display: flex;
      align-items: center;
      color:#666;
      font-size: 14px;
      padding: 6px 20px;
      img{
        width: 25px;
        margin-right:10px;
      }
    }
    li:hover{
      background: #ececec;
    }
  }
}
</style>
