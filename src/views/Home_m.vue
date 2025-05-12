<template>
  <div class="home">
    <pageHeader_M ref="borrow"></pageHeader_M>
    <div class="content">
      <!-- 轮播 -->
      <div class="swiper">
        <swiper
          v-if="swiperImg.length > 1"
          :options="swiperOption"
          :not-next-tick="notNextTick"
          ref="mySwiper"
        >
          <swiper-slide v-for="(item, index) in swiperImg" :key="index">
            <div
              class="swiperImg"
              :style="{ backgroundImage: 'url(' + item.img + ')' }"
            ></div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 关于 -->
      <div class="about">
        <p class="title">关于焜曦教育</p>
        <p class="subTitle">ABOUT KUN XI JIAO YU</p>
        <p class="text">
          <span style="font-size: 14px;"> 焜曦集团成立于2012年，下设：</span>
          <br />
          焜曦（山东）教育科技有限公司
          <br />
          东企新程（山东）教育咨询有限公司
          <br />
          德州焜曦职业培训学校
          <br />
          青岛焜曦人力资源有限公司
          <br />
        </p>
        <div class="advantages-container">
          <!-- 优势1：全产业链实力 -->
          <div class="advantage-item">
            <span class="advantage-title">【全产业链实力】</span>
            <span class="advantage-content">
              集团构建工业机器人研发→流水线设计→生产→设备维保全链条体系，<br />
              服务23家生产型/应用型机器人企业，<br />
              采用国际先进精密设备及CAD设计软件，<br />
              执行高于行业标准的全流程品控。
            </span>
          </div>

          <!-- 优势2：人才培养体系 -->
          <div class="advantage-item">
            <span class="advantage-title">【创新教育标杆】</span>
            <span class="advantage-content">
              践行"诚信·求精·创新"教育理念，<br />
              独创"双元制"人才培养模式，<br />
              累计输送专业技术人才10万+，<br />
              毕业生就业竞争力行业领先。
            </span>
          </div>

          <!-- 优势3：教学资源保障 -->
          <div class="advantage-item">
            <span class="advantage-title">【精英教学团队】</span>
            <span class="advantage-content">
              拥有国家级教学名师领衔的师资队伍，<br />
              实施"专业技能+职业素养"双元培育，<br />
              毕业生企业好评率连续5年达98.7%，<br />
              校企共建20+实训示范基地。
            </span>
          </div>

          <!-- 优势4：就业保障体系 -->
          <div class="advantage-item">
            <span class="advantage-title">【就业保障典范】</span>
            <span class="advantage-content">
              独创项目制实战教学模式，<br />
              应届生提前录用率91.5%，<br />
              现有在校生规模4000+，<br />
              合作企业年度人才预定超2000岗。
            </span>
          </div>
        </div>
      </div>
      <!-- 介绍 -->
      <div class="intro">
        <div class="introBox" v-for="(item, index) in intro" :key="index">
          <img :src="item.img" alt="" />
          <p class="title">{{ item.title }}</p>
          <p class="text" v-html="item.text"></p>
        </div>
      </div>
      <!-- <div class="video-card">
        <video controls>
          <source src="../assets/yangqi.mp4" type="video/mp4" />
        </video>
        <div class="video-title">课余拉练风采</div>
      </div> -->
      <!-- 产业 -->
      <div class="estate">
        <div
          class="estateBox"
          v-for="(item, index) in estate"
          :key="index"
          :style="{ backgroundImage: 'url(' + item.img + ')' }"
          @click="goEstate(item.id)"
        >
          <div class="textBox">
            <p class="title_EN" v-html="item.title_EN"></p>
            <p class="title">{{ item.title }}</p>
          </div>
          <img src="../assets/1_home_M/icon_go.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <pageFooter_M></pageFooter_M> -->
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
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        bserver: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
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
          img: require("../assets/1_home_M/intro1.png"),
          title: "主营业务",
          text:
            "工业机器人<br>教育教学检测<br>学历教育、技能提升<br>人才资源及劳动派遣"
        },
        {
          img: require("../assets/1_home_M/intro2.png"),
          title: "开设专业",
          text: "工业机器人<br>无人机<br>新媒体<br>电子商务"
        },
        {
          img: require("../assets/1_home_M/intro3.png"),
          title: "培养类型",
          text: "学历教育<br>高级技工<br>短期培训<br>薪资提级"
        }
      ],
      estate: [
        {
          title: "焜曦简介",
          title_EN: "KUNXI<br>INTRO",
          img: require("../assets/1_home_M/estate2.png"),
          id: 2
        },
        {
          title: "合作院校",
          title_EN: "PARTNER<br>INSTITUTION",
          img: require("../assets/1_home_M/estate1.png"),
          id: 1
        },
        {
          title: "师资力量",
          title_EN: "CONTACT<br>US",
          img: require("../assets/1_home_M/shizililiang.jpeg"),
          id: 9
        },
        {
          title: "培养类型",
          title_EN: "CULTRUE<br>TYPE",
          img: require("../assets/1_home_M/estate3.png"),
          id: 3
        },
        {
          title: "学生管理体系",
          title_EN: "STUDENT<br>MANAGEMENT",
          img: require("../assets/1_home_M/学生管理体系.jpeg"),
          id: 10
        },
        {
          title: "工业机器人核心竞争力",
          title_EN: "CORE<br>COMPETENCE",
          img: require("../assets/1_home_M/核心竞争力.jpeg"),
          id: 11
        },
        {
          title: "工业机器人培养课程体系",
          title_EN: "COURSE<br>SYSTEM",
          img: require("../assets/1_home_M/培养课程.jpeg"),
          id: 12
        },
        {
          title: "学生风采",
          title_EN: "CONTACT<br>US",
          img: require("../assets/pic444.jpg"),
          id: 8
        },
        {
          title: "企业文化与价值观",
          title_EN: "CORPORATE<br>CULTRUE",
          img: require("../assets/1_home_M/estate4.png"),
          id: 4
        },
        {
          title: "联系我们",
          title_EN: "CONTACT<br>US",
          img: require("../assets/1_home_M/estate5.png"),
          id: 5
        }
      ]
    };
  },
  methods: {
    goEstate(id) {
      this.$router.push({
        name: "Estate_m",
        query: {
          id: id
        }
      });
    }
  }
};
</script>

<style scoped>
/* 轮播 */
.swiperVideo {
  width: 100%;
  height: 800px;
}
.swiperVideo video {
  width: auto;
  height: 800px;
}
.swiperVideo video source {
  width: auto;
  height: 800px;
}
.swiperImg {
  width: 100%;
  height: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  width: 100%;
  bottom: 44px;
}
.swiper-pagination >>> .swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  display: inline-block;

  opacity: 1;
  border: 5px solid #ffffff;
  border-radius: 50%;
  background: transparent;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  opacity: 1;
  background: #ffffff;
  width: 50px;
  height: 16px;
  border-radius: 8px;
}
/* 关于 */
.about {
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.about p.title {
  margin-bottom: 10px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #b69d74;
}
.about p.subTitle {
  margin-bottom: 10px;
  font-size: 26px;
  font-family: Roboto;
  font-weight: bold;
  color: #616161;
  opacity: 0.3;
}
.about p.text {
  letter-spacing: 5px;
  text-align: center;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  line-height: 40px;
  opacity: 0.8;
}
/* 介绍 */
.intro {
  width: 100%;
  height: 235px;
  background: #f7f7f7;

  display: flex;
  align-items: center;
  justify-content: space-around;
}
.intro .introBox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
}
.intro .introBox img {
  width: 60px;
  height: 60px;
  display: block;
  margin-bottom: 8px;
}
.intro .introBox p.title {
  margin-bottom: 10px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #3d3d3d;
}
.intro .introBox p.text {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  line-height: 26px;
  opacity: 0.9;
  text-align: center;
}
/* 产业 */
.estate {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 38px 0 38px;
}
.estate .estateBox {
  width: 80%;
  height: 230px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 12px 0 12px;
}
.estate .estateBox .textBox {
  position: absolute;
  left: 81px;
  top: 50px;
}
.estate .estateBox .textBox .title_EN {
  margin-bottom: 8px;
  font-size: 28px;
  font-family: Helvetica;
  font-weight: 400;
  color: #fefefe;
}
.estate .estateBox .textBox .title {
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #fefefe;
}
.estate .estateBox img {
  width: 53px;
  height: 28px;
  position: absolute;
  right: 48px;
  bottom: 24px;
}
.advantages-container {
  margin: 0 auto;
  margin: 30px 10px;
  background: #f8f9fa;
  border-radius: 12px;
  width: 100%;
}

.advantage-item {
  text-align: center;
  margin-bottom: 25px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.advantage-item:hover {
  transform: translateX(10px);
}

.advantage-title {
  display: block;
  font-size: 24px;
  color: #303133;
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.advantage-content {
  display: block;
  font-size: 20px;
  color: #606266;
  line-height: 1.8;
  padding-left: 10px;
  border-left: 2px solid #ebeef5;
}

.advantage-content br {
  display: block;
  content: "";
  margin: 8px 0;
}
.video-card {
  height: 400px;
}
</style>
