<template>
  <div class="page-content page-content-4">
    <div class="mission-vision-container">
      <div class="mission-card">
        <div class="card-header">
          <i class="iconfont icon-target"></i>
          <h3>使命</h3>
          <div class="decorative-line"></div>
        </div>
        <div class="card-content">
          <p>培养具有创新精神和实践能力的高素质技术技能人才，服务国家战略和区域经济发展。</p>
        </div>
      </div>

      <div class="mission-card">
        <div class="card-header">
          <i class="iconfont icon-eye"></i>
          <h3>愿景</h3>
          <div class="decorative-line"></div>
        </div>
        <div class="card-content">
          <p>成为国内领先的工业机器人技术人才培养基地，打造产教融合的典范。</p>
        </div>
      </div>

      <div class="mission-card">
        <div class="card-header">
          <i class="iconfont icon-star"></i>
          <h3>价值观</h3>
          <div class="decorative-line"></div>
        </div>
        <div class="card-content">
          <ul class="value-list">
            <li>创新驱动发展</li>
            <li>质量至上</li>
            <li>合作共赢</li>
            <li>持续学习</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MissionVision'
}
</script>

<style lang="scss" scoped>
.page-content-4 {
  .mission-vision-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .mission-card {
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

      p {
        margin: 0;
        color: #333;
        line-height: 1.6;
      }

      .value-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          color: #333;

          &:last-child {
            border-bottom: none;
          }

          &:before {
            content: '•';
            color: #2196f3;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style> 