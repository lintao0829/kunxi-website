<template>
  <div class="page-content page-content-8">
    <div class="student-container">
      <div class="student-header">
        <h1>学生风采</h1>
        <div class="header-decoration"></div>
      </div>
      <div class="tab-container">
        <div class="tab-buttons">
          <button v-for="(tab, index) in tabs" :key="index" @click="setActiveTab(index + 1)" :class="{ active: activeTab === index + 1 }">
            {{ tab }}
          </button>
        </div>
        <div class="tab-content">
          <div v-if="activeTab === 1" class="video-grid">
            <div class="video-card">
              <video controls>
                <source src="../../assets/学生风采4.mp4" type="video/mp4" />
              </video>
              <div class="video-title">听听学生真心话</div>
            </div>
            <div class="video-card">
              <video controls>
                <source src="../../assets/学生风采5.mp4" type="video/mp4" />
              </video>
              <div class="video-title">听听学生真心话</div>
            </div>
          </div>
          <div v-if="activeTab === 2" class="video-grid">
            <div class="video-card">
              <video controls>
                <source src="../../assets/学生风采1.mp4" type="video/mp4" />
              </video>
              <div class="video-title">学习风采</div>
            </div>
          </div>
          <div v-if="activeTab === 3" class="video-grid">
            <div class="video-card">
              <video controls>
                <source src="../../assets/学生风采3.mp4" type="video/mp4" />
              </video>
              <div class="video-title">课余拉练风采</div>
            </div>
          </div>
          <div v-if="activeTab === 4" class="video-grid">
            <div class="video-card">
              <video controls>
                <source src="../../assets/学生风采2.mp4" type="video/mp4" />
              </video>
              <div class="video-title">课余校内风采</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentShowcase',
  data() {
    return {
      activeTab: 1,
      tabs: ['听听学生真心话', '学习风采', '课余拉练风采', '课余校内风采']
    }
  },
  methods: {
    setActiveTab(tabIndex) {
      this.activeTab = tabIndex
    }
  }
}
</script>

<style lang="scss" scoped>
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
  .page-content-8 {
    .tab-buttons {
      flex-direction: column;
      align-items: center;
      button {
        width: 100%;
        max-width: 300px;
      }
    }
    .video-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style> 