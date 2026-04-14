<template>
  <div class="about">
    <pageHeader></pageHeader>
    <pageNav :navIndex="navIndex" @send="getSelectIndex"></pageNav>
    <div class="content">
      <div class="LR_layout">
        <div class="left">
          <div class="leftBox">
            <p class="title_EN">SERVICE</p>
            <p class="title">焜曦教育<br />焜曦教育</p>
            <img src="../assets/0_common/leftBox.png" alt="" />
          </div>
        </div>
        <div class="right" v-if="selectIndex == 0">
          <div class="essay">
            <div class="title">关于我们</div>
            <div class="title_EN">ABOUT US</div>
            <div class="text">
              <p>kunxijy焜曦教育<br></p>
            </div>
          </div>
        </div>
        <div class="right" v-else-if="selectIndex == 1" v-cloak>
          <div class="essay essay_img" v-if="departmentStatus == -1" v-cloak>
            <div class="imgBox">
              <img src="../assets/2_about/1.png" alt="组织架构" />
              <div class="navBox">
                <img src="../assets/2_about/2.png" alt="9大运营中心" />
                <div
                  class="nav"
                  v-for="(item, index) in department"
                  :key="index"
                  @click="goDetail(index)"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="department" v-else v-cloak>
            <p class="back" @click="goDetail(-1)"><<<返回上一级</p>
            <img
              v-for="(item, index) in departmentImgs"
              :key="index"
              :src="item"
              v-show="departmentStatus == index"
              alt=""
            />
          </div>
        </div>
        <div class="right" v-if="selectIndex == 2">
          <div class="essay">
            <div class="text" style="padding-top:70px">
              <p>
                犹如艺术般的创造，对完美和极致孜孜以求，大稻启运集团，立志成为商业运营领域的钟表<br>
                匠。<br />
                <span>大</span>|是秉承钱塘江大潮的精神涵养，百舸争流，力争上游，奋勇为先；是在当下的杭州勇立<br />
                时代的大潮头；是对城市的大爱，以高度的社会责任感，去回馈城市的关照。<br />
                <span>稻</span>|播种，生长，到丰满的收获，走过的完整的生命，成熟饱满的稻穗低垂着头，饱含谦逊<br />
                和丰硕。在江南鱼米之乡，一个稻字就是富足和充实。稻是衣食住行，民之根本，让最本真<br />
                的日常生活变得美好，便近“道”矣。<br />
                <span>启</span>|是每一次启程都始终如一，以初心以百分百用心去付出。<br />
                <span>運</span>|是顺时顺势，遵循着自然的法则和生命的城市的流向，让美好可持续。<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageNav from "../components/pageNav";

const departmentImgs = [
  require("@/assets/2_about/department/0.png"),
  require("@/assets/2_about/department/1.png"),
  require("@/assets/2_about/department/2.png"),
  require("@/assets/2_about/department/3.png"),
  require("@/assets/2_about/department/4.png"),
  require("@/assets/2_about/department/5.png"),
  require("@/assets/2_about/department/6.png"),
  require("@/assets/2_about/department/7.png"),
  require("@/assets/2_about/department/8.png")
];

const department = [
  { index: 0, name: "百达翡丽中心-投资开发" },
  { index: 1, name: "宝玑中心-设计管理" },
  { index: 2, name: "朗格中心-工程管理" },
  { index: 3, name: "理查德米勒中心-营销客服" },
  { index: 4, name: "劳力士中心-财务管理" },
  { index: 5, name: "江诗丹顿中心-资产运服" },
  { index: 6, name: "积家中心-物业公司" },
  { index: 7, name: "爱彼中心-综合管理" },
  { index: 8, name: "芝柏中心-成本管理&招采合约" }
];

export default {
  name: "about",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      selectIndex: 0,
      department,
      departmentImgs,
      departmentStatus: -1
    };
  },
  components: { pageNav },
  methods: {
    getSelectIndex(index) {
      this.selectIndex = index;
    },
    goDetail(index) {
      this.departmentStatus = index;
    }
  }
};
</script>

<style lang="scss" scoped>
[v-cloak]{display:none!important}
.about {
  height: 100%;
}
.content {
  .LR_layout {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;

    .left {
      width: 40%;
      position: relative;
      .leftBox {
        position: absolute;
        top: 60px;
        right: 0;
        padding-bottom: 130px;
        p {
          font-weight: 600;
        }
        p.title_EN {
          margin-bottom: 20px;
          font-size: 70px;
          font-family: "新宋体";
          color: #9d9995;
        }
        p.title {
          margin-bottom: 35px;
          line-height: 50px;
          font-size: 34px;
          font-family: "宋体";
          color: #2e2620;
        }
      }
    }
    .right {
      width: 60%;
      min-height: 560px;
      overflow: hidden;
      .essay {
        margin: 60px 0 ;
        padding-left: 30px;
        min-height: 524px;
        border-left: 3px solid #b69d74;
        .title {
          font-size: 22px;
          font-weight: bold;
          font-family: '宋体';
          color: #808080;
          padding-top: 30px;
          margin-bottom: 5px;
        }
        .title_EN {
          font-size: 18px;
        }
        .text {
          width: 760px;
          padding-top: 30px;
          p {
            font-size: 18px;
            font-family: "宋体";
            color: #505050;
            line-height: 35px;
            span {
              font-family: "楷体";
              font-size: 28px;
              font-weight: bold;
            }
          }
        }
      }
      .essay_img {
        padding-left: 30px;
        .imgBox {
          display: flex;
          img {
            width: 580px;
            height: 489px;
          }
          .navBox {
            position: relative;
            .nav {
              position: absolute;
              top: 80px;
              left: 20px;
              cursor: pointer;
              width: 150px;
              height: 90px;
              opacity: 0;
            }
            .nav:nth-child(3) { left: 190px; }
            .nav:nth-child(4) { left: 360px; }
            .nav:nth-child(5) { top: 200px; }
            .nav:nth-child(6) { left: 190px; top: 200px; }
            .nav:nth-child(7) { left: 360px; top: 200px; }
            .nav:nth-child(8) { top: 320px; }
            .nav:nth-child(9) { left: 190px; top: 320px; }
            .nav:nth-child(10) { left: 360px; top: 320px; }
          }
        }
      }
      .department {
        margin: 60px 0;
        padding-left: 30px;
        border-left: 3px solid #b69d74;
        .back {
          cursor: pointer;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #666666;
        }
        img {
          width: 750px;
        }
      }
    }
  }
}
</style>