<template>
  <div class="talk_box">
    <el-tabs v-model="activeName">
        <el-tab-pane class="tab" name="second">
          <span slot="label">全部</span>
          <TalkList></TalkList>
          <Page :page="page" @changePage="handlePage"></Page>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">课程回答</span>
          <el-empty :image-size="200"></el-empty>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">交流讨论</span>
          <el-empty :image-size="200"></el-empty>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">技术分享</span>
          <el-empty :image-size="200"></el-empty>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">实验报告</span>
          <el-empty :image-size="200"></el-empty>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">站内报告</span>
          <el-empty :image-size="200"></el-empty>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TalkList from '@/components/talkList'
import Page from '@/components/pageList'
export default {
  name: 'talkPage',
  data () {
    return {
      activeName: 'second',
      pagesize: 15
    }
  },
  components: {
    TalkList,
    Page
  },
  computed: {
    page () {
      let page = Math.ceil(this.$store.state.talkTotal / 15)
      if (page > 10)page = 10
      return page
    }
  },
  methods: {
    handlePage (page) {
      console.log(page)
      this.$store.dispatch('getTalkList', {
        page: page,
        pagesize: this.pagesize
      })
    }
  }

}
</script>

<style>
</style>
