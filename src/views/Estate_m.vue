<template>
  <div class="estate">
    <pageHeader_M></pageHeader_M>
    <div class="loading-container" v-if="!isShowContent">
      <div class="loading-content">
        <div class="loading-spinner">
          <div class="spinner-circle"></div>
          <div class="spinner-circle"></div>
          <div class="spinner-circle"></div>
        </div>
        <div class="loading-text">
          <span>加</span>
          <span>载</span>
          <span>中</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
    <!-- 合作学校 -->
    <CooperativeSchools v-if="$route.query.id == 1 && isShowContent" />
    <!-- 焜曦简介 -->
    <CompanyIntro v-if="$route.query.id == 2 && isShowContent" />
    <!-- 教育类型 -->
    <EducationTypes v-if="$route.query.id == 3 && isShowContent" />
    <!-- 使命与愿景 -->
    <MissionVision v-if="$route.query.id == 4 && isShowContent" />
    <!-- 联系我们 -->
    <contactUs v-if="$route.query.id == 5 && isShowContent" />
    <!-- 校长简介 -->
    <PrincipalIntro v-if="$route.query.id == 6 && isShowContent" />
    <!-- 教师风采 -->
    <TeacherGallery v-if="$route.query.id == 7 && isShowContent" />
    <!-- 学生风采 -->
    <StudentShowcase v-if="$route.query.id == 8 && isShowContent" />
    <!-- 师资力量 -->
    <TeacherStrength v-if="$route.query.id == 9 && isShowContent" />
  </div>
</template>

<script>
import CooperativeSchools from "./components/CooperativeSchools.vue";
import CompanyIntro from "./components/CompanyIntro.vue";
import EducationTypes from "./components/EducationTypes.vue";
import MissionVision from "./components/MissionVision.vue";
import contactUs from "./contactUs.vue";
import PrincipalIntro from "./components/PrincipalIntro.vue";
import TeacherGallery from "./components/TeacherGallery.vue";
import StudentShowcase from "./components/StudentShowcase.vue";
import TeacherStrength from "./components/TeacherStrength.vue";

export default {
  name: "estate_m",
  components: {
    CooperativeSchools,
    CompanyIntro,
    EducationTypes,
    MissionVision,
    contactUs,
    PrincipalIntro,
    TeacherGallery,
    StudentShowcase,
    TeacherStrength
  },
  data() {
    return {
      isShowContent: false
    };
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
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);

  .loading-content {
    text-align: center;
  }

  .loading-spinner {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .spinner-circle {
      width: 12px;
      height: 12px;
      margin: 0 6px;
      background: #1890ff;
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out both;

      &:nth-child(1) {
        animation-delay: -0.32s;
      }

      &:nth-child(2) {
        animation-delay: -0.16s;
      }
    }
  }

  .loading-text {
    font-size: 18px;
    color: #1890ff;
    font-weight: 500;

    span {
      display: inline-block;
      animation: fadeInOut 1.4s infinite ease-in-out both;

      &:nth-child(1) { animation-delay: 0s; }
      &:nth-child(2) { animation-delay: 0.2s; }
      &:nth-child(3) { animation-delay: 0.4s; }
      &:nth-child(4) { animation-delay: 0.6s; }
      &:nth-child(5) { animation-delay: 0.8s; }
      &:nth-child(6) { animation-delay: 1s; }
    }
  }
}

@keyframes bounce {
  0%, 80%, 100% { 
    transform: scale(0);
  } 
  40% { 
    transform: scale(1.0);
  }
}

@keyframes fadeInOut {
  0%, 100% { 
    opacity: 0.2;
    transform: translateY(0);
  }
  50% { 
    opacity: 1;
    transform: translateY(-5px);
  }
}
</style>
