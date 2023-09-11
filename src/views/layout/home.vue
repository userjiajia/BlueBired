<template>
  <div class="content">
    <div class="info">
        <div class="center flex">
            <div class="l flex">
                <img src="http://101.42.50.205/bluebird/images/img/container-title-2.png" alt="">
                <button id="btn_box">进入课程</button>
            </div>
            <form action="" class="right">
                <el-input prefix-icon="el-icon-user" placeholder="请输入名称" v-model="name" clearable></el-input>
                <el-input prefix-icon="el-icon-phone-outline" placeholder="请输入手机号" class="input"  v-model="phone" maxlength="11" clearable></el-input>
                <el-input prefix-icon="el-icon-key" placeholder="请输入密码" class="input"  v-model="pwd"  show-password></el-input>
                <button id="btn_box">加入蓝鸟</button>
                <p>点击"加入蓝鸟"，表示您已经同意我们的 <el-link type="info" class="a">信息链接</el-link></p>
            </form>
        </div>
    </div>
    <!-- 最好 -->
    <betterHome></betterHome>
    <el-divider content-position="center" class="center split">学习路径</el-divider>
    <!-- 列表 -->
    <courseList class="center"></courseList>
    <el-divider content-position="center" class="center split split2">实习课程</el-divider>
    <!-- 教程 -->
    <ul class="flex study2 center">
      <studyList class="center study" v-for="item in  StudyList" :key="item.courseid" :StudyList="item"></studyList>
    </ul>
  </div>
</template>

<script  scoped>
import betterHome from '@/components/betterHome.vue'
import courseList from '@/components/courseList.vue'
import studyList from '@/components/studyList.vue'

export default {
  name: 'homePage',
  components: {
    betterHome,
    courseList,
    studyList
  },
  data () {
    return {
      name: '', // 表单信息
      phone: '', // 表单信息
      pwd: '' // 表单信息
    }
  },
  computed: {
    StudyList () {
      return this.$store.state.StudyList
    }
  }

}
</script>

<style lang="less" scoped>
.info{
    height: 93vh;
    overflow: hidden;
    background: url(http://101.42.50.205/bluebird/images/img/homepage-bg.png) no-repeat center/cover;
    .center{
        align-items: start;
        margin-top:140px;
    }
    .l{
        flex-direction: column;
        align-items: start;
        width:583px;
        img{
            width: 90%;
        }
        button{
            width: 154px;
            height: 53px;
            font-size: 20px;
            margin-top: 10px;
        }
    }
    .right{
        width: 366px;
        height: 40px;
        border:1px solid transparent;
        .input{
            margin-top:20px;
        }
        button{
            width: 366px;
            height: 40px;
            margin-top:30px;
            font-size:18px;
        }
        p{
            color: rgba(255, 255, 255, 0.527);
            font-size: 13px;
            margin-top:5px;
            text-align: center;
            .a{
                color:white;
                margin-left: 5px;
                margin-top:-2px;
            }
        }
    }
}
.split{
  margin-top: 50px;

    .el-divider__text.is-center{
        font-size: 20px;
        color:#999;
    }
}
.split2{
  margin-top: 100px;
}
.study{
    margin: 60px auto;
}
.study2{
    flex-wrap: wrap;
    justify-content: start;
}
</style>
