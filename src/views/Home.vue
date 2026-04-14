<template>
  <div class="home">
    <pageHeader ref="borrow" :isScroll="isScroll"></pageHeader>
    <div class="swiperBox">
      <swiper
        v-if="swiperImg.length > 1"
        :options="swiperOption"
        :not-next-tick="notNextTick"
        ref="mySwiper"
      >
        <swiper-slide v-for="(item, index) in swiperImg" :key="index">
          <div
            class="swiper_img"
            :style="{ backgroundImage: 'url(' + item.img + ')' }"
          ></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>

    <div class="info">
      <div class="splitline"></div>
      <div class="infoBox">
        <div class="profile">
          <span class="title">焜曦教育</span>
          <p>
            焜曦教育集团自2012年起，十几年来，一直专注于工业机器人技术人才的培养，通过深入有效的校企合作，打通产业链、创新链、教育链、人才链，在济南、青岛、淄博、德州、威海、泰安、济宁、烟台、潍坊、石家庄、西安等地设立培训基地.
          </p>
        </div>
        <div class="splitline_y"></div>
        <div class="headline">
          <p class="title">主营业务</p>
          <p class="content">
            ·工业机器人的研发、设计、安装调试、维修和维护<br />
            ·人才培养——学历教育、技能提升<br />
            ·人力资源及劳务派遣等
          </p>
        </div>
        <div class="splitline_y"></div>
        <div class="newsBox">
          <div class="type">
            <div
              class="typename"
              :class="{ typename_chose: news_type == 0 || news_type == -1 }"
              @click="typeChose(0)"
            >
              <p>集团优势</p>
              <div class="underline">
                集团从工业机器人的研发、流水线设计、生产到工业机器人设备的维修、维护等具备了全体系的建设实力，目前合作或服务的生产型及应用型机器人企业23家，从设计到生产都遵循严格的流程和标准，采用国内外先进精密机械、加工设备及计算机辅助设计软件。
              </div>
            </div>
          </div>
          <div class="newsBox_con" v-if="news_type == -1">
            <div class="newsList">
              <div
                class="news"
                v-for="(item, index) in news"
                :key="index"
                @click="goNews(item)"
              >
                <p>
                  <span>{{ item.create_time }}</span
                  >{{ item.title }}
                </p>
              </div>
            </div>
          </div>
          <div class="newsBox_con" v-else>
            <div
              class="newsList"
              :class="[news_type == '0' ? 'scrollMove_down' : 'scrollMove_up']"
            >
              <div
                class="news"
                v-for="(item, index) in news"
                :key="index"
                @click="goNews(item)"
              >
                <p>
                  <span>{{ item.create_time }}</span
                  >{{ item.title }}
                </p>
              </div>
            </div>
            <div
              class="newsList"
              :class="[news_type == '0' ? 'scrollMove_down' : 'scrollMove_up']"
            >
              <div
                class="news"
                v-for="(item, index) in tendency"
                :key="index"
                @click="goNews(item)"
              >
                <p>
                  <span>{{ item.create_time }}</span
                  >{{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro">
      <div class="introBox" v-for="(item, index) in intro" :key="index">
        <img :src="item.img" alt="" />
        <p class="introTitle">{{ item.title }}</p>
        <p class="introText">{{ item.text }}</p>
      </div>
    </div>
    <div class="estate">
      <div class="estateImg"></div>
      <div class="estateImg"></div>
      <div class="estateImg"></div>
      <div class="estateImg"></div>
      <div class="estateImg"></div>
    </div>
    <div class="allSchool">
      <img src="../assets/allschool.jpg" width="100%" alt="" />
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        effect: "fade",
        autoplay: 7000,
        speed: 3000,
        loop: true,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        observe: true,
        observeParents: true
      },
      swiperImg: [
        { img: require("../assets/pic333.jpg") },
        { img: require("../assets/pic222.jpg") },
        { img: require("../assets/pic111.jpg") },
        { img: require("../assets/pic555.jpg") },
        { img: require("../assets/pic666.jpg") },
        { img: require("../assets/pic999.jpg") }
      ],
      intro: [
        {
          img: require("../assets/1_home/intro1.png"),
          title: "企业定位",
          text: "以卓越的教育质量和创新的教育模式，培养出技能型、高水平的优秀人才。"
        },
        {
          img: require("../assets/1_home/intro2.png"),
          title: "企业文化",
          text: "培养兼具知识与技能的时代栋梁。"
        },
        {
          img: require("../assets/1_home/intro3.png"),
          title: "企业信仰",
          text: "育人至上、专业精进、诚信协作"
        }
      ],
      news: [],
      tendency: [],
      news_type: -1
    };
  },
  props: ["isScroll"],
  methods: {
    goNews(item) {
      var pageitem = {
        name: "News",
        url: "/news",
        index: 5,
        item
      };
      this.$refs.borrow.goPage_News(pageitem);
    },
    typeChose(index) {
      this.news_type = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .swiperBox {
    margin-top: 100px;
    .swiper_img {
      width: 100%;
      height: 790px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      background-image: url("../assets/0_common/slider_L.png");
      left: 120px;
    }
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      background-image: url("../assets/0_common/slider_R.png");
      right: 120px;
    }
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
      width: 100%;
      left: 25%;
      bottom: 80px;
    }
    ::v-deep .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      border: 2px solid #ffffff;
      border-radius: 50%;
      margin: 0 6px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      background-color: #ffffff;
      width: 50px;
      height: 16px;
      border-radius: 8px;
    }
  }
  .info {
    .splitline {
      height: 20px;
      background: #b69d74;
    }
    .infoBox {
      height: 230px;
      padding-top: 53px;
      background-image: url(../assets/1_home/info_back.png);
      background-position: center;
      background-repeat: repeat;
      background-size: 113%;
      display: flex;
      justify-content: center;
      .splitline_y {
        width: 4px;
        height: 163px;
        background: #ededed;
        margin: 0 28px;
      }
      .profile {
        width: 419px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #666666;
        line-height: 31px;
      }
      .headline {
        cursor: pointer;
        .title {
          width: 354px;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #000000;
          opacity: 0.85;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .content {
          width: 381px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #666666;
          line-height: 31px;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        }
      }
      .newsBox {
        .type {
          display: flex;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #262626;
          cursor: pointer;
          .typename {
            margin-right: 25px;
            p {
              margin-bottom: 5px;
            }
            .underline {
              width: 300px;
              height: 4px;
              font-size: 16px;
              background: #b69d74;
              margin-bottom: 22px;
            }
          }
          .typename_chose {
            color: rgba($color: #262626, $alpha: 0.7);
          }
        }
        .newsBox_con {
          width: 360px;
          height: 120px;
          overflow: hidden;
          p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            span {
              display: inline-block;
              margin-right: 15px;
            }
          }
          .newsList {
            width: 100%;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #666666;
            line-height: 31px;
            .news {
              cursor: pointer;
            }
            .news:hover {
              color: #b69d74;
            }
          }
          .scrollMove_up {
            animation: scrollMove_up 2s linear;
            transform: translateY(-125px);
          }
          .scrollMove_down {
            animation: scrollMove_down 2s linear;
            transform: translateY(0);
          }
          @keyframes scrollMove_up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-125px); }
          }
          @keyframes scrollMove_down {
            0% { transform: translateY(-125px); }
            100% { transform: translateY(0); }
          }
        }
      }
    }
  }
  .intro {
    height: 150px;
    background: #b69d74;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .introBox {
      width: 274px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        width: 60px;
        height: 60px;
        display: block;
        margin-bottom: 10px;
      }
      p.introTitle {
        font-size: 20px;
        font-family: "宋体";
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 5px;
      }
      p.introText {
        font-size: 14px;
        font-family: "宋体";
        font-weight: bold;
        color: #ffffff;
        opacity: 0.9;
      }
    }
  }
  .estate {
    display: flex;
    align-items: center;
    justify-content: center;
    .estateImg {
      cursor: pointer;
      display: block;
      height: 340px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: 1s;
    }
    .estateImg:nth-child(1) {
      width: 27%;
      background-image: url("../assets/pic111.jpg");
    }
    .estateImg:nth-child(1):hover {
      width: 35%;
    }
    .estateImg:nth-child(2) {
      width: 18%;
      background-image: url("../assets/1_home/estate2.jpg");
    }
    .estateImg:nth-child(2):hover {
      width: 25%;
    }
    .estateImg:nth-child(3) {
      width: 21%;
      background-image: url("../assets/pic333.jpeg");
    }
    .estateImg:nth-child(4) {
      width: 11%;
      background-image: url("../assets/1_home/45666.png");
      background-position: 55% 0%;
    }
    .estateImg:nth-child(4):hover {
      width: 26%;
    }
    .estateImg:nth-child(5) {
      width: 23%;
      background-image: url("../assets/1_home/12345.jpg");
    }
    .estateImg:nth-child(5):hover {
      width: 34%;
    }
  }
}
.allSchool {
  padding: 30px 60px;
  background-color: #b69d74;
  img {
    width: 100%;
    height: 650px;
  }
  img:hover {
    transform: translateY(-5px);
    transition: 1s;
  }
}
</style>