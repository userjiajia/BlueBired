<template>
    <ul class="flex course">
     <li v-for="item in pathList" :key="item.courseid" class="flex courseList" ref="box">
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
export default {
  computed: {
    pathList () {
      return this.$store.state.courseList
    }
  }
}
</script>

  <style lang="less" scoped>
  .course{
      margin-top: 40px;
      flex-wrap: wrap;
      li{
          width: 100%;
          height: 100px;
          border:1px solid #eee;
          border-radius: 4px;
          margin-top: 15px;
          margin-left: 10px;
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
          box-shadow: 0px 5px 10px 8px #f0f0f0;
      }
      li:hover .detail{
          height: 64%;
      }
  }
      @media screen and (min-width:768px) and (max-width:992px){
          li{
              width: 100% !important;
          }
      }
      /* 大 */
      @media screen and (min-width:992px) and (max-width:1200px){
          li{
              width: 45% !important;
          }
      }
      /* 超大 */
      @media screen and (min-width:1200px){
          li{
              width: 45% !important;
          }
      }
  </style>
