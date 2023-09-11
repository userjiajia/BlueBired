<template>
 <div>
  <ul class="talk_" v-if="TalkList.length>0">
    <li class="flex" v-for="item in TalkList" :key="item.id">
      <div class="flex">
        <img :src="item.authorimg" alt="">
        <div class="t">
          <p class="til">{{ item.title }}</p>
          <div class="detail">{{ item.author }}<span>{{ item.publishtime }}</span>{{ item.lastreply }}</div>
        </div>
      </div>
      <div class="flex">
        <div class="r" :class="{reply:item.reply>0}">
          <p>{{ item.reply }}</p>
          <p>回复</p>
        </div>
        <div class="r">
          <p>{{ item.see }}</p>
          <p>查看</p>
        </div>
      </div>
    </li>
  </ul>
  <el-skeleton :rows="10" animated v-else/>
 </div>
</template>

<script>
export default {
  computed: {
    TalkList () {
      return this.$store.state.TalkList
    }
  },
  data () {
    return {
      page: 1,
      pagesize: 15
    }
  },
  created () {
    this.$store.dispatch('getTalkList', {
      page: this.page,
      pagesize: this.pagesize
    })
  }
}
</script>

<style scoped lang="less">
.talk_{
  li{
    padding: 0px 20px;
    height: 100px;
    border-bottom:1px solid #eee;
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .t{
      padding-left: 15px;
      .detail{
      font-size: 12px;
      color:#999;
      margin-top: 10px;
      span{
        color:#666;
        font-size: 14px;
      }
    }
    }
    .r{
      text-align: center;
      margin-right: 20px;
      color:#999;
      font-size: 14px;
    }
    .reply{
      color: #11aa8c;
    }
  }
  li:hover{
    background: #fafffe;
  }
}
</style>
