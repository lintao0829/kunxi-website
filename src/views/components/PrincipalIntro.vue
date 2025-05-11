<template>
  <div class="page-content page-content-6">
    <div class="video-section">
      <video width="100%" controls>
        <source src="../../assets/校长介绍人工智能.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <h3>教学模式</h3>
    <span class="desc">教学上采用<span class="highlight">“理论、仿真、实训”三位一体</span>教学方式，学生能学到真正的技术，掌握真正的技能。</span>
    <span class="desc">学校进行<span class="highlight">阶段性学习和测考</span>，考试合格，进入下一个阶段的学习，考试不合格，继续本阶段学习，直到考试合格，<span class="highlight">包教包会</span>。</span>
    <span class="desc">学习专业知识，掌握专业技能为主体，并开设了<span class="highlight">素质课、人文素养教育、心理咨询、国学、礼仪、岗前培训、岗前面试以及体能训练</span>等课程，使学生德、智、体全面发展。</span>
    <h3>管理模式</h3>
    <span class="desc">教官与学生<span class="highlight blue">同吃同住</span>，保证学生的安全和身心健康。</span>
    <span class="desc">学校坚持<span class="highlight blue">军事化和人性化管理</span>相结合，家校联合，培养德才兼备的复合型人才。</span>
    <span class="desc">学校实施<span class="highlight blue">制度化和温情化</span>相结合的管理模式，以学生为本的理念，学校开展各项活动，丰富校园生活。</span>
  </div>
</template>

<script>
export default {
  name: 'PrincipalIntro'
}
</script>

<style lang="scss" scoped>
.page-content-6 {
  .video-section {
    margin: 30px 0;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  h3 {
    margin-top: 30px;
    color: #1976d2;
    font-size: 22px;
    font-weight: 600;
  }
  .desc {
    display: block;
    margin: 10px 0;
    color: #616161;
    opacity: 0.8;
    font-weight: 700;
    line-height: 1.6;
  }
  .highlight {
    color: red;
    font-size: 16px;
    font-weight: 800;
    &.blue {
      color: rgb(1, 176, 240);
    }
  }
}
</style> 