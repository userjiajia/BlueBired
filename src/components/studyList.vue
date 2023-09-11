<template>
    <li>
        <img :src="StudyList.courseimg" alt="">
        <p class="til text"> {{ StudyList.coursetitle }} </p>
        <div class="flex bot">{{StudyList.shownum}}
            <span
            :class="{free:StudyList.coursefree==='免费',
               vip:StudyList.coursefree==='会员',
               mian:StudyList.coursefree==='限免' }"
            >{{ StudyList.coursefree }}</span>
        </div>
    </li>
</template>

<script>
export default {
  props: ['StudyList'],
  mounted () {
  }
}
</script>

<style scoped lang="less">
    li{
        border:1px solid #fefefe;
        // width: 220px;
        width: 100%;
        border-radius: 4px;
        border:1px solid #eee;
        font-size: 14px;
        box-shadow: 0px 0px 15px #f7f6f6;
        .til,.bot{
          padding:3px 10px
        }
        img{
            width: 100%;
            height: auto;
            border-radius: 4px;
        }
        .bot{
            margin-top: 10px;
            color:#999;
            span{
                padding: 2px 10px;
                color: #fff;
                border-radius: 10px;
                font-size: 12px;
            }
            .free{
                background: #f66e6e;
            }
            .vip{
                background:orange;
            }
            .mian{
                background: rgb(104, 195, 231);
            }
        }
    }
    li:hover{
      box-shadow: 0px 10px 20px #dbdbdb;
    }
    @media screen and (min-width:768px) and (max-width:992px){
        li{
            width: 45%;
        }
    }
    /* 大 */
    @media screen and (min-width:992px) and (max-width:1200px){
        li{
            width: 40%;
        }
    }
    /* 超大 */
    @media screen and (min-width:1200px){
        li{
            width: 253px;
        }
    }

</style>
