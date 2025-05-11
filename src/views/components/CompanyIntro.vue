<template>
  <div class="page-content page-content-2">
    <div class="intro-section">
      <span class="intro-text">
        焜曦教育集团自<span class="highlight">2012</span>年起，十几年来，一直专注于<span class="highlight">工业机器人技术人才的培养</span>，通过深入有效的校企合作，打通<span class="highlight blue">产业链、创新链、教育链、人才链</span>，在<span class="highlight green">济南、青岛、淄博、德州、威海、泰安、济宁、烟台、潍坊、石家庄、西安</span>等地设立培训基地。
      </span>
      <span class="intro-text">
        焜曦教育拥有经验丰富的<span class="highlight">双师型教授</span>手把手教课，开发<span class="highlight">独立的课程体系</span>，采用<span class="highlight">理论、仿真、实操</span>相结合的项目式教学模式,坚定不移的融入地方办学，深化产教融合、强化校企协同创新，已与<span class="highlight green">200余家企业单位</span>和<span class="highlight green">30家大、中专院校</span>建立合作，建成校内<span class="highlight green">实训基地50余个</span>，培养专业技能人才<span class="highlight">数十余万</span>人，人才培养供不应求，就业率达<span class="highlight large">100%</span>。
      </span>
      <div class="video-container">
        <video width="100%" controls>
          <source src="../../assets/Timelapse_Crown.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <span class="intro-text">
        走出了一条具有自身特色的<span class="highlight green">技能型、高水平、促就业</span>的发展道路，经过多年的发展，焜曦集团已成为集人工智能机器人<span class="highlight">研发、设计、生产、培训以及学历教育</span>于一体的综合性单位。
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyIntro'
}
</script>

<style lang="scss" scoped>
.page-content-2 {
  .intro-section {
    padding: 20px;
  }

  .intro-text {
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

    &.green {
      color: rgb(0, 176, 80);
    }

    &.large {
      font-size: 18px;
    }
  }

  .video-container {
    margin: 30px 0;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
}
</style> 