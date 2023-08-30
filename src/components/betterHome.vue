<template>
  <ul class="better center flex">
    <li v-for="(item,i) in list" :key="i">
      <img :src="item.url" alt="">
      <p class="text">{{ item.title }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { title: '丰富全面的计算机实验课程', url: 'http://101.42.50.205/bluebird/images/img/introduceContainer1.gif' },
        { title: '在线编程环境，1秒启动', url: 'http://101.42.50.205/bluebird/images/img/introduceContainer2.gif' },
        { title: '每天一个项目课，丰富你的项目经验', url: 'http://101.42.50.205/bluebird/images/img/introduceContainer3.gif' },
        { title: '有效学习时间，真实记录你的代码生涯', url: 'http://101.42.50.205/bluebird/images/img/introduceContainer4.gif' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.better{
  height: 300px;
  flex-wrap: wrap;
      li{
        width: 229px;
        color:#6a849d;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
}
</style>
