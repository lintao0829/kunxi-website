<template>
  <div class="page-content page-content-4">
    <div class="mission-vision-container">
      <div class="mission-card">
        <div class="card-header">
          <i class="iconfont icon-target"></i>
          <h3>使命</h3>
        </div>
        <div class="card-content">
          <p>培养具有创新精神和实践能力的高素质技术技能人才，服务国家战略和区域经济发展。</p>
        </div>
      </div>

      <div class="mission-card">
        <div class="card-header">
          <i class="iconfont icon-eye"></i>
          <h3>愿景</h3>
        </div>
        <div class="card-content">
          <p>成为国内领先的工业机器人技术人才培养基地，打造产教融合的典范。</p>
        </div>
      </div>

      <div class="mission-card">
        <div class="card-header">
          <i class="iconfont icon-star"></i>
          <h3>价值观</h3>
        </div>
        <div class="card-content">
          <ul class="value-list">
            <li>
              <span>创新驱动发展</span>
            </li>
            <li>
              <span>质量至上</span>
            </li>
            <li>
              <span>合作共赢</span>
            </li>
            <li>
              <span>持续学习</span>
            </li>
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
  padding: 40px 20px;
  background: #fafafa;
  min-height: 100vh;

  .mission-vision-container {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .mission-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    }

    .card-header {
      padding: 24px;
      background: #2196f3;
      color: white;
      text-align: center;

      i {
        font-size: 28px;
        margin-bottom: 12px;
        display: block;
        opacity: 0.9;
      }

      h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 1px;
      }
    }

    .card-content {
      padding: 24px;

      p {
        margin: 0;
        color: #333;
        font-size: 15px;
        line-height: 1.8;
        text-align: justify;
      }

      .value-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          color: #333;
          transition: all 0.3s ease;

          &:last-child {
            border-bottom: none;
          }

          &:hover {
            color: #2196f3;
          }

          span {
            font-size: 15px;
            font-weight: 400;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .page-content-4 {
    padding: 20px 15px;

    .mission-vision-container {
      gap: 20px;
    }

    .mission-card {
      .card-header {
        padding: 20px;

        i {
          font-size: 24px;
          margin-bottom: 10px;
        }

        h3 {
          font-size: 18px;
        }
      }

      .card-content {
        padding: 20px;

        p {
          font-size: 14px;
        }

        .value-list {
          li {
            padding: 10px 0;

            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style> 