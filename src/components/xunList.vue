<template>
  <ul class="center xunList">
    <li class="flex" v-for="(item,i) in xunList" :key="item.id">
      <img :src="item.img" alt="">
      <div class="left">
        <h3><span class="tag">{{item.isonline}}</span>{{item.title}}</h3>
        <p>{{ item.description }} </p>
        <p class="tui">推荐先学：<a href="#">{{firstStudy[i]}}</a></p>
        <p><a href="#">{{tagList[i]}}</a></p>
        <div class="bottom flex">
          <div>
            <span class="price"> <i class="fu">￥</i>{{ item.price }}</span>
            <p class="vip">会员最低5折</p>
          </div>
          <button>查看详情</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    xunList: {
      type: Array
    }
  },
  computed: {
    firstStudy () {
      return this.xunList.map(item => {
        let str = item.firststudy.replaceAll('[', '')
        str = str.replaceAll(']', '')
        return str.split('"').join('')
      })
    },
    tagList () {
      return this.xunList.map(item => {
        let str = item.taglist.replaceAll('[', '')
        str = str.replaceAll(']', '')
        return str.split('"').join('').split(',').join(' ')
      })
    }
  }

}
</script>

<style scoped lang="less">
.xunList{
  padding-bottom: 60px;
}
li{
  background: white;
  margin-top: 20px;
  border-radius: 8px;
  height: 240px;
  box-shadow: 0px 0px 10px #eee;
  img{
    width: 37%;
    height: 240px;
    border-radius: 8px;
  }
  .left{
    color:#999;
    padding: 0px 30px;
    position: relative;
    height: 100%;
    h3{
      font-weight: 400;
      font-size: 16px;
      margin: 30px 0px 15px 0px;
      .tag{
        background: #11aa8c;
        color:white;
        padding: 3px 5px;
      }
    }
    .tui{
      margin: 50px 0px 10px 0px;
    }
    p{
      font-size: 12px;
      letter-spacing: 1px;
      a{
        letter-spacing: 1px;
        font-size: 12px;
        color:#337ab7;
      }
    }
    .bottom{
      justify-content: end;
      text-align: center;
      position: absolute;
      width: 90%;
      bottom: 20px;
      div{
        margin-right:20px;
        .fu{
          font-size: 20px;
          font-style: normal;
        }
        .price{
          color:#e70000;
          font-size: 35px;
          font-weight: 700;
        }
        }
      .vip{
        color:#ff9717;
      }
      button{
        width: 100px;
        height: 35px;
        background-color: #ff9717;
        color: #fff;
        border:none;
        border-radius: 4px;
      }
    }
  }
}
</style>
