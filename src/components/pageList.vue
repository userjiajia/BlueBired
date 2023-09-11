<template>
  <ul class="flex pageList">
    <button @click="prev" ref="prev" class="disabled">上一页</button>
    <li :class="{active:activeNum===i}" v-for="(item,i) in page" :key="item" @click="courseChang(i)">{{ i+1 }}</li>
    <button @click="next" ref="next"  class="disabled">下一页</button>
  </ul>
</template>

<script>
export default {
  name: 'pageList',
  props: {
    page: {
      type: Number,
      default: 1
    }

  },
  data () {
    return {
      activeNum: 0, // 点击下标
      page2: 0
    }
  },
  mounted () {
  },
  methods: {
    prev () {
      if (this.activeNum < 1) {
        this.$refs.prev.classList.add('disabled')
        return
      }
      this.$refs.prev.classList.remove('disabled')
      this.activeNum--
    },
    next () {
      if (this.activeNum >= this.page - 1) {
        this.$refs.next.classList.add('disabled')
        this.$emit('changePage', this.activeNum + 1)
        return
      }
      this.$refs.next.classList.remove('disabled')
      this.activeNum++
      // this.$emit('changePage', this.activeNum)
      this.$emit('changePage', this.activeNum + 1)
    },
    // 通知父改变页数
    courseChang (i) {
      this.activeNum = i
      this.$emit('changePage', this.activeNum + 1)
    }
  }

}
</script>

<style scoped lang="less">
.pageList{
  justify-content: center;
  margin-top: 30px;
  button{
    padding: 5px 8px;
    vertical-align: middle;
    border: none;
    background-color: transparent;
  }
  button:hover{
    background: #11aa8c;
    color:white;
  }
  .disabled:hover{
    background-color: transparent;
    color:#333;
  }
  li{
    width: 30px;
    height: 27px;
    line-height: 27px;
    margin: 0 4px;
    text-align: center;
  }
  .active{
    background: #11aa8c;
    color:white;
  }
}
</style>
