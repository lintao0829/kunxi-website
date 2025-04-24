<template>
  <!-- 合作院校 -->
  <div class="estate">
    <pageHeader_M></pageHeader_M>
    <van-loading size="24px" color="gray" vertical v-if="!isShowContent"
      >加载中...</van-loading
    >

    <div
      v-if="this.$route.query.id === 1 && isShowContent"
      class="page-content page-content-1"
    >
      <div class="page-header">
        <h1>合作院校</h1>
        <div class="header-decoration"></div>
      </div>
      <div class="school-list">
        <div class="school-card">
          <div class="school-name">山东铝业职业学院</div>
          <img
            class="school-image"
            src="../assets/0_common_M/shandonglvye.png"
            alt="山东铝业职业学院"
          />
        </div>
        <div class="school-card">
          <div class="school-name">滨州职业学院</div>
          <img
            class="school-image"
            src="../assets/0_common_M/binzhouzhiye.png"
            alt="滨州职业学院"
          />
        </div>
        <div class="school-card">
          <div class="school-name">山东力明科技职业学院</div>
          <img
            class="school-image"
            src="../assets/0_common_M/shandongliming.png"
            alt="山东力明科技职业学院"
          />
        </div>
        <div class="school-card">
          <div class="school-name">济宁职业技术学院</div>
          <img
            class="school-image"
            src="../assets/0_common_M/jiningzhiye.png"
            alt="济宁职业技术学院"
          />
        </div>
        <div class="school-card">
          <div class="school-name">烟台春山技工学校</div>
          <img
            class="school-image"
            src="../assets/0_common_M/yantaichunshan.png"
            alt="烟台春山技工学校"
          />
        </div>
        <div class="school-card">
          <div class="school-name">青岛中工技工学校</div>
          <img
            class="school-image"
            src="../assets/0_common_M/qingdaozhonggong.png"
            alt="青岛中工技工学校"
          />
        </div>
        <div class="school-card">
          <div class="school-name">德州近博技工学校</div>
          <img
            class="school-image"
            src="../assets/0_common_M/dezhoujinbo.png"
            alt="德州近博技工学校"
          />
        </div>
        <div class="school-card">
          <div class="school-name">山东深泉技师学院</div>
          <img
            class="school-image"
            src="../assets/0_common_M/shandongshenquan.jpg"
            alt="山东深泉技师学院"
          />
        </div>
        <div class="school-card">
          <div class="school-name">威海高级技工学校</div>
          <img
            class="school-image"
            src="../assets/0_common_M/weihaigaoji.png"
            alt="威海高级技工学校"
          />
        </div>
      </div>
    </div>
    <div
      v-if="this.$route.query.id === 2 && isShowContent"
      class="page-content page-content-2"
    >
      <!-- 视频部分 -->
      <div style="padding:10px">
        <span
          style="display: block;margin-top: 10px; color: #616161;opacity: 0.8;font-weight: 700;padding-top: 6px;"
        >
          焜曦教育集团自<span
            style="color:red;font-size: 16px;font-weight: 800;"
            >2012</span
          >年起，十几年来，一直专注于<span
            style="color:red;font-size: 16px;font-weight: 800;"
            >工业机器人技术人才的培养</span
          >，通过深入有效的校企合作，打通<span
            style="color:rgb(1,176,240);font-size: 16px;font-weight: 800;"
            >产业链、创新链、教育链、人才链</span
          >，在<span
            style="color:rgb(0,176,80);font-size: 16px;font-weight: 800;"
            >济南、青岛、淄博、德州、威海、泰安、济宁、烟台、潍坊、石家庄、西安</span
          >等地设立培训基地.</span
        >
        <br />
        <span
          style="display: block; color: #616161;opacity: 0.8;font-weight: 700;padding-top: 6px;"
        >
          焜曦教育拥有经验丰富的<span
            style="color:red;font-size: 16px;font-weight: 800;"
            >双师型教授</span
          >手把手教课，开发<span
            style="color:red;font-size: 16px;font-weight: 800;"
            >独立的课程体系</span
          >，采用<span style="color:red;font-size: 16px;font-weight: 800;"
            >理论、仿真、实操</span
          >相结合的项目式教学模式,坚定不移的融入地方办学，深化产教融合、强化校企协同创新，已与<span
            style="color:rgb(0,176,80);font-size: 16px;font-weight: 800;"
            >200余家企业单位</span
          >和<span style="color:rgb(0,176,80);font-size: 16px;font-weight: 800;"
            >30家大、中专院校</span
          >建立合作，建成校内<span
            style="color:rgb(0,176,80);font-size: 16px;font-weight: 800;"
            >实训基地50余个</span
          >，培养专业技能人才<span
            style="color:red;font-size: 16px;font-weight: 800;"
            >数十余万</span
          >人，人才培养供不应求，就业率达<span
            style="color:red;font-size: 18px;font-weight: 800;"
            >100%</span
          >。
        </span>
        <br />
        <div class="video-container">
          <video width="100%" controls>
            <source src="../assets/Timelapse_Crown.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <span
          style="display: block;margin: 10px 0 30px; color: #616161;opacity: 0.8;font-weight: 700;padding-top:6px"
        >
          走出了一条具有自身特色的<span
            style="color:rgb(0,176,80);font-size: 16px;font-weight: 800;"
            >技能型、高水平、促就业</span
          >的发展道路，经过多年的发展，焜曦集团已成为集人工智能机器人<span
            style="color:red;font-size: 16px;font-weight: 800;"
            >研发、设计、生产、培训以及学历教育</span
          >于一体的综合性单位。
        </span>
        <br />
      </div>
    </div>
    <div
      v-if="this.$route.query.id === 3 && isShowContent"
      class="page-content page-content-3"
    >
      <img width="100%" src="../assets/edu.jpg" alt="" />
    </div>
    <div
      v-if="this.$route.query.id === 4 && isShowContent"
      class="page-content page-content-4"
    >
      <div class="mission-container">
        <div class="mission-header">
          <h1>企业使命与愿景</h1>
          <div class="header-decoration"></div>
        </div>

        <div class="mission-grid">
          <div class="mission-card">
            <div class="mission-icon">
              <i class="fas fa-bullseye"></i>
            </div>
            <h2>使命</h2>
            <div class="mission-content">
              <h3>核心理念</h3>
              <p>培养兼具知识与技能的时代栋梁</p>
            </div>
          </div>

          <div class="mission-card">
            <div class="mission-icon">
              <i class="fas fa-star"></i>
            </div>
            <h2>价值观</h2>
            <div class="mission-content">
              <ul>
                <li>
                  <span class="highlight">育人至上</span>
                  <p>始终将学生发展放在首位，因材施教</p>
                </li>
                <li>
                  <span class="highlight">专业精进</span>
                  <p>持续更新教学内容，提供高质量教育服务</p>
                </li>
                <li>
                  <span class="highlight">诚信协作</span>
                  <p>秉承诚实守信原则，在各个环节保持真诚</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="mission-card">
            <div class="mission-icon">
              <i class="fas fa-eye"></i>
            </div>
            <h2>愿景</h2>
            <div class="mission-content">
              <p>
                成为教育领域的标杆，以卓越的教育质量和创新的教育模式，培养出优秀人才
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="this.$route.query.id === 5 && isShowContent"
      class="page-content page-content-5"
    >
      <contactUs></contactUs>
    </div>
    <!-- 校长介绍人工智能 -->
    <div
      v-if="this.$route.query.id === 6 && isShowContent"
      class="page-content page-content-6"
    >
      <!-- 视频部分 -->
      <div class="video-section">
        <video width="100%" controls>
          <source src="../assets/校长介绍人工智能.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3>教学模式</h3>
      <span
        style="display: block;margin: 0px 0 10px; color: #616161;opacity: 0.8;font-weight: 700;padding-top:6px"
      >
        教学上采用<span style="color:red;font-size: 16px;font-weight: 800;"
          >"理论、仿真、实训"三位一体"</span
        >教学方式，学生能 学到真正的技术，掌握真正的技能。
      </span>
      <!-- 学校进行阶段性学习和测考，考试合格，进入下一个阶段的学习，考试不合格，继续本阶段学习，直到考试合格，包教包会。
 -->
      <span
        style="display: block;margin: 0px 0 10px; color: #616161;opacity: 0.8;font-weight: 700;padding-top:6px"
      >
        学校进行<span style="color:red;font-size: 16px;font-weight: 800;"
          >阶段性学习和测考</span
        >，考试合格，进入下一个阶段的学习，考试不合格，继续本阶段学习，直到考试合格，<span
          style="color:red;font-size: 16px;font-weight: 800;"
          >包教包会</span
        >。
      </span>
      <!--  学习专业知识，掌握专业技能为主体，并开设了素质课、人文 素养教育、心理咨询、国学、礼仪、岗前培训、岗前面试以及体能训练等课程，使学生德、智、体全面发展。
 -->
      <span
        style="display: block;margin: 0px 0 10px; color: #616161;opacity: 0.8;font-weight: 700;padding-top:6px"
      >
        学习专业知识，掌握专业技能为主体，并开设了<span
          style="color:red;font-size: 16px;font-weight: 800;"
          >素质课、人文
          素养教育、心理咨询、国学、礼仪、岗前培训、岗前面试以及体能训练</span
        >等课程，使学生德、智、体全面发展。
      </span>
      <h3>管理模式</h3>
      <!-- 教官与学生同吃同住，保证学生的安全和身心健康 -->
      <span
        style="display: block;margin: 0px 0 10px; color: #616161;opacity: 0.8;font-weight: 700;padding-top:6px"
      >
        教官与学生<span
          style="color:rgb(1, 176, 240);font-size: 16px;font-weight: 800;"
          >同吃同住</span
        >，保证学生的安全和身心健康。
      </span>
      <!-- 学校坚持军事化和人性化管理相结合，家校联合，培养德才兼备的复合型人才。 -->
      <span
        style="display: block;margin: 0px 0 10px; color: #616161;opacity: 0.8;font-weight: 700;padding-top:6px"
      >
        学校坚持<span
          style="color:rgb(1, 176, 240);font-size: 16px;font-weight: 800;"
          >军事化和人性化管理</span
        >相结合，家校联合，培养德才兼备的复合型人才。
      </span>
      <!-- 学校实施制度化和温情化相结合的管理模式，以学生为本的理念，学校开展各项活动，丰富校园生活。
 -->
      <span
        style="display: block;margin: 0px 0 10px; color: #616161;opacity: 0.8;font-weight: 700;padding-top:6px"
      >
        学校实施<span
          style="color:rgb(1, 176, 240);font-size: 16px;font-weight: 800;"
          >制度化和温情化</span
        >相结合的管理模式，以学生为本的理念，学校开展各项活动，丰富校园生活。
      </span>
    </div>
    <!-- 教师风采 -->
    <div
      v-if="this.$route.query.id === 7 && isShowContent"
      class="page-content page-content-7"
    >
      <img width="100%" src="../assets/pic3.jpg" alt="" />
      <img width="100%" src="../assets/pic4.jpg" alt="" />
      <img width="100%" src="../assets/pic5.jpg" alt="" />
      <img width="100%" src="../assets/pic6.jpg" alt="" />
    </div>
    <!-- 学生风采 8 -->
    <div
      v-if="this.$route.query.id === 8 && isShowContent"
      class="page-content page-content-8"
    >
      <div class="student-container">
        <div class="student-header">
          <h1>学生风采</h1>
          <div class="header-decoration"></div>
        </div>

        <div class="tab-container">
          <div class="tab-buttons">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="setActiveTab(index + 1)"
              :class="{ active: activeTab === index + 1 }"
            >
              {{ tab }}
            </button>
          </div>

          <div class="tab-content">
            <div v-if="activeTab === 1" class="video-grid">
              <div class="video-card">
                <video controls>
                  <source src="../assets/学生风采4.mp4" type="video/mp4" />
                </video>
                <div class="video-title">听听学生真心话</div>
              </div>
              <div class="video-card">
                <video controls>
                  <source src="../assets/学生风采5.mp4" type="video/mp4" />
                </video>
                <div class="video-title">听听学生真心话</div>
              </div>
            </div>

            <div v-if="activeTab === 2" class="video-grid">
              <div class="video-card">
                <video controls>
                  <source src="../assets/学生风采1.mp4" type="video/mp4" />
                </video>
                <div class="video-title">学习风采</div>
              </div>
            </div>

            <div v-if="activeTab === 3" class="video-grid">
              <div class="video-card">
                <video controls>
                  <source src="../assets/学生风采3.mp4" type="video/mp4" />
                </video>
                <div class="video-title">课余拉练风采</div>
              </div>
            </div>

            <div v-if="activeTab === 4" class="video-grid">
              <div class="video-card">
                <video controls>
                  <source src="../assets/学生风采2.mp4" type="video/mp4" />
                </video>
                <div class="video-title">课余校内风采</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import contactUs from "./contactUs.vue";
export default {
  name: "estate_m",
  components: {
    contactUs
  },
  data() {
    return {
      activeTab: 1,
      isShowContent: false,
      isLoading: false,
      tabs: ["听听学生真心话", "学习风采", "课余拉练风采", "课余校内风采"]
    };
  },
  watch: {
    "$route.query.id"(newId, oldId) {
      // 每当 id 改变时，更新 currentId
      console.log(`ID changed from ${oldId} to ${newId}`);
    }
  },
  methods: {
    setActiveTab(tabIndex) {
      this.activeTab = tabIndex; // 切换视频
    }
  },
  mounted() {
    if (this.$route.query.id) {
      setTimeout(() => {
        this.isShowContent = true;
      }, 600);
    }
  }
};
</script>

<style lang="scss" scoped>
/* 合作院校页面 */
.page-content-1 {
  h1 {
    text-align: center;
    color: #1976d2;
  }
  .school-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .school-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .school-name {
      padding: 15px;
      background: linear-gradient(90deg, #2196f3, #1976d2);
      color: white;
      font-weight: 600;
      text-align: center;
    }

    .school-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
}

/* 公司介绍页面 */
.page-content-2 {
  .intro-section {
    margin-bottom: 30px;
  }

  .video-container {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    margin: 30px 0;
  }
}

/* 使命愿景页面样式 */
.page-content-4 {
  /* 全局设置 */
  .page-content {
    font-family: "Arial", sans-serif;
    background-color: #f8f9fa;
    padding: 60px 20px;
  }

  .page-content-4 {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin: 40px auto;
    max-width: 1200px;
    padding: 40px;
  }

  .mission-container {
    text-align: center;
    padding: 0 20px;
  }

  .mission-header h1 {
    font-size: 36px;
    color: #333;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .header-decoration {
    width: 80px;
    height: 4px;
    background-color: #ff6f61;
    margin: 0 auto;
    margin-top: 10px;
  }

  /* 宫格布局 */
  .mission-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;
  }

  .mission-card {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }

  .mission-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  .mission-icon {
    background-color: #ff6f61;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin-bottom: 20px;
  }

  .mission-card h2 {
    font-size: 24px;
    color: #333;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .mission-content {
    color: #666;
    font-size: 16px;
    line-height: 1.6;
  }

  /* 价值观列表 */
  .mission-content ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }

  .mission-content li {
    margin-bottom: 20px;
  }

  .highlight {
    color: #ff6f61;
    font-weight: bold;
  }

  .mission-content h3 {
    font-size: 20px;
    color: #333;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .mission-content p {
    font-size: 16px;
    color: #777;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .mission-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
}

/* 校长介绍页面 */
.page-content-6 {
  .video-section {
    margin: 30px 0;
  }

  .teaching-mode {
    margin: 30px 0;
  }
}

/* 教师风采页面 */
.page-content-7 {
  .teacher-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .teacher-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
}

/* 学生风采页面样式 */
.page-content-8 {
  .student-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .student-header {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: 32px;
      color: #2c3e50;
      margin-bottom: 15px;
      background: linear-gradient(90deg, #2196f3, #1976d2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .header-decoration {
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #ffc107, #ff9800);
      margin: 0 auto;
      border-radius: 2px;
    }
  }

  .tab-container {
    .tab-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 30px;
      flex-wrap: wrap;

      button {
        padding: 12px 25px;
        border: none;
        border-radius: 25px;
        background: #f0f0f0;
        color: #666;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
          background: #2196f3;
          color: white;
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
      }
    }

    .tab-content {
      .video-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
      }

      .video-card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        video {
          width: 100%;
          display: block;
        }

        .video-title {
          padding: 15px;
          background: #f8f9fa;
          color: #333;
          font-weight: 500;
          text-align: center;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .page-content-4,
  .page-content-8 {
    .education-grid,
    .mission-grid,
    .video-grid {
      grid-template-columns: 1fr;
    }

    .tab-buttons {
      flex-direction: column;
      align-items: center;

      button {
        width: 100%;
        max-width: 300px;
      }
    }
  }
}
</style>
