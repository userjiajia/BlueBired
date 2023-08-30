<template>
  <ul class="flex course">
    <li v-for="item in courseList" :key="item.courseid" class="flex">
        <img :src="item.courseimg" alt="">
        <div class="r">
            <p>{{ item.coursename }}</p>
            <span>{{ item.coursenum }}</span>
            <div class="detail">
                {{ item.coursedes }}
            </div>
        </div>
    </li>
  </ul>
</template>

<script>
import { getCourseList } from '@/api/home'
export default {
  created () {
    this.CourseList()
  },
  data () {
    return {
      courseList: []
    }
  },
  methods: {
    async CourseList () {
      const { data } = await getCourseList()
      this.courseList = data
    }
  }
}
</script>

<style lang="less" scoped>
.course{
    flex-wrap: wrap;
    margin-top: 60px;
    li{
        width: 299px;
        height: 100px;
        border:1px solid #eee;
        border-radius: 4px;
        margin-top: 15px;
        img{
            border-radius: 4px;
        }
        .r{
            flex: 1;
            padding-left: 15px;
            position: relative;
            height: 100%;
            p{
                color:#333;
                font-size: 16px;
                margin-bottom: 10px;
                margin-top: 25px;
            }
            span{
                color:#999;
                font-size:14px;
            }
            .detail{
                width: 100%;
                height: 0%;
                position: absolute;
                bottom: 0;
                left: 0;
                background: rgba(32, 32, 32, 0.678);
                overflow: hidden;
                font-size: 12px;
                color:white;
                line-height: 1rem;
                letter-spacing: 1px;
            }

        }
    }
    li:hover{
        box-shadow: 0px 5px 8px 5px #f0f0f0;
        margin-top:10px;
    }
    li:hover .detail{
        height: 64%;
    }
}
</style>
