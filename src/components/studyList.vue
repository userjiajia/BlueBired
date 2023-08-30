<template>
  <ul class="flex">
    <li  v-for="item in StudyList" :key="item.courseid">
        <img :src="item.courseimg" alt="">
        <p class="til text"> {{ item.coursetitle }} </p>
        <div class="flex bot">{{item.shownum}}
            <slot></slot>
        </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    StudyList: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped lang="less">
ul{
    flex-wrap: wrap;
}
li{
    border:1px solid #fefefe;
    width: 22%;
    border-radius: 4px;
    border:1px solid #eee;
    font-size: 14px;
    box-shadow: 0px 0px 15px #f7f6f6;
    .til,.bot{
      padding:3px 10px
    }
    img{
        height: 130px;
        width: 100%;
        border-radius: 4px;
    }
    .bot{
        margin-top: 10px;
        color:#999;
        span{
        background: #f66e6e;
        padding: 2px 10px;
        color: #fff;
        border-radius: 10px;
        font-size: 12px;
    }
    }
}
li:hover{
  margin-top: -10px;
  box-shadow: 0px 8px 20px #eee;
}
</style>
