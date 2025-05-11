<template>
  <div class="page-content page-content-3">
    <div class="education-container">
      <div class="education-card">
        <div class="card-header">
          <i class="iconfont icon-robot"></i>
          <h3>工业机器人应用与维护</h3>
          <div class="decorative-line"></div>
        </div>
        <div class="card-content">
          <div class="info-row">
            <span class="label">学制：</span>
            <span class="value">3年</span>
          </div>
          <div class="info-row">
            <span class="label">招生对象：</span>
            <span class="value">应往届初中毕业生</span>
          </div>
          <div class="info-row">
            <span class="label">培养目标：</span>
            <span class="value">培养从事工业机器人设备安装、编程、调试的高级技能人才</span>
          </div>
        </div>
      </div>

      <div class="education-card">
        <div class="card-header">
          <i class="iconfont icon-robot"></i>
          <h3>工业机器人应用与维护</h3>
          <div class="decorative-line"></div>
        </div>
        <div class="card-content">
          <div class="info-row">
            <span class="label">学制：</span>
            <span class="value">3年</span>
          </div>
          <div class="info-row">
            <span class="label">招生对象：</span>
            <span class="value">应往届初中毕业生</span>
          </div>
          <div class="info-row">
            <span class="label">培养目标：</span>
            <span class="value">培养从事工业机器人设备安装、编程、调试的高级技能人才</span>
          </div>
        </div>
      </div>

      <div class="education-card">
        <div class="card-header">
          <i class="iconfont icon-robot"></i>
          <h3>工业机器人应用与维护</h3>
          <div class="decorative-line"></div>
        </div>
        <div class="card-content">
          <div class="info-row">
            <span class="label">学制：</span>
            <span class="value">3年</span>
          </div>
          <div class="info-row">
            <span class="label">招生对象：</span>
            <span class="value">应往届初中毕业生</span>
          </div>
          <div class="info-row">
            <span class="label">培养目标：</span>
            <span class="value">培养从事工业机器人设备安装、编程、调试的高级技能人才</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationTypes'
}
</script>

<style lang="scss" scoped>
.page-content-3 {
  .education-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .education-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .card-header {
      padding: 20px;
      background: linear-gradient(90deg, #2196f3, #1976d2);
      color: white;
      text-align: center;

      i {
        font-size: 24px;
        margin-bottom: 10px;
      }

      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
      }

      .decorative-line {
        width: 50px;
        height: 3px;
        background: rgba(255, 255, 255, 0.5);
        margin: 10px auto 0;
      }
    }

    .card-content {
      padding: 20px;

      .info-row {
        display: flex;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;

        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .label {
          color: #666;
          width: 80px;
          flex-shrink: 0;
        }

        .value {
          color: #333;
          flex: 1;
        }
      }
    }
  }
}
</style> 