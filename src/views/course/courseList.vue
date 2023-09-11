<template>
  <div>
    <div class="label">
      <dl>
        <dt>类别：</dt>
        <dd :class="{active:tagNum===item}" v-for="(item,i) in type" :key="i" @click="changeTag(item)">{{ item==='all'?'全部':item }}</dd>
      </dl>
      <dl>
        <dt>标签：</dt>
        <div class="item_">
         <dd :class="{active:num=='all'}" @click="changeTag('all1')">全部</dd>
         <dd v-for="item in CourseId" :key="item.tagid" :class="{active:num===item.tagname}" @click="changeTag({id:item.tagid,name:item.tagname})">{{ item.tagname }}</dd>
        </div>
      </dl>
    </div>
    <div class="study_">
      <el-tabs v-model="activeName">
        <el-tab-pane class="tab" name="second">
          <span slot="label">已上线</span>
          <ul class="study2" v-if="StudyList2.length>0">
            <studyList  v-for="item in  StudyList2" :key="item.courseid" :StudyList="item"></studyList>
          </ul>
          <el-empty :image-size="200" v-if="StudyList2.length==0"></el-empty>
          <Page :page="total" @changePage="handlePage"></Page>
        </el-tab-pane>
        <el-tab-pane label="即将上线">
          <span slot="label">即将上线</span>
          <el-empty :image-size="200"></el-empty>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import StudyList from '@/components/studyList.vue'
import Page from '@/components/pageList.vue'
export default {
  name: 'coursePage',
  data () {
    return {
      num: 'all', // 标签激活下标
      activeName: 'second', // tab栏
      pagesize: 15, // 条数
      page: 1, // 页码
      type: ['all', '免费', '限免', '会员'],
      tagNum: 'all' // tag的下标
    }
  },
  components: {
    StudyList,
    Page
  },
  computed: {
    StudyList () {
      return this.$store.state.StudyList2
    },
    total () { // 页数
      let num = Math.ceil(this.$store.state.total / this.pagesize)
      if (num < 1)num = 1
      return num
    },
    CourseId () {
      return this.$store.state.CourseId
    },
    StudyList2 () {
      return this.$store.state.StudyList2
    }
  },
  async mounted () {
    await this.$store.dispatch('getCourseId')
    await this.$store.dispatch('getStudyFn', {
      page: this.page,
      pagesize: this.pagesize,
      type: 'all',
      tag: 'all'
    })
  },
  methods: {
    changeTag (item) {
      console.log(item)
      if (typeof item === 'object') {
        this.num = item.name
      } else if (item === 'all1') {
        this.num = 'all'
      } else {
        this.tagNum = item
      }
      this.$store.dispatch('getStudyFn', {
        page: this.page,
        pagesize: this.pagesize,
        type: this.tagNum,
        tag: this.num
      })
    },
    // 处理改变页数的
    handlePage (page) {
      this.$store.dispatch('getStudyFn', {
        page,
        pagesize: this.pagesize,
        type: this.tagNum,
        tag: this.num
      })
    }
  }
}
</script>

<style lang="less" scoped>
.label{
  padding: 15px;
  border:1px solid #d6d6d6;
  border-radius: 8px;
  box-shadow: 0px 5px 20px #eee;
  dl{
    display: flex;
    margin-top:10px;
    dt{
      color:#333;
      padding: 4px 11px;
    }
    .item_{
      display: flex;
      flex-wrap: wrap;
      flex: 1;
    }
    dd{
      color:#666;
      padding: 5px 11px;
      border-radius: 15px;
      margin:5px 5px;
      font-size: 12px;
    }
    .active{
      background: #08bf91;
      color:white;
    }
  }
}
.study_{
  padding-top: 30px;
}
.study2{
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  li{
    margin-top: 20px;
    margin-left: 10px;
  }
}
</style>
<style>
.el-tabs__item:hover {
  color: #08bf91 !important;
}
.el-tabs__active-bar {
  color: #08bf91;
    background-color: #08bf91 !important;
}
.el-tabs__item.is-active{
  color:#08bf91 !important;
}
</style>
