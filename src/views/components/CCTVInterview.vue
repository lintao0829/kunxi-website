<template>
  <div class="cctv-interview">
    <div class="media-gallery">
      <img
        v-for="i in 6"
        :key="i"
        :src="require(`@/assets/1_home_M/cctv${i}.jpg`)"
        class="gallery-item"
        alt="央视栏目截图"
      />
    </div>

    <div class="content-wrapper">
      <h3 class="section-title">《开拓者》企业家访谈栏目</h3>

      <div class="content-block">
        <p class="highlight-text">
          《开拓者》是一档国内企业家高端访谈节目，具有较高的档次和水准。
        </p>
      </div>

      <div class="detail-section">
        <div class="detail-item">
          <h4><span class="icon">▌</span>节目特色</h4>
          <p>
            聚焦细分领域中具有开拓与创新精神的企业家，通过访谈深入挖掘并传播他们的创业故事、创新经验，关注品牌成长及行业发展趋势，剖析行业经济热点等。
          </p>
        </div>

        <div class="detail-item">
          <h4><span class="icon">▌</span>制作水平</h4>
          <p>
            从专业实景演播厅录制到企业实拍场景融入，结合资深团队的后期处理，制作流程严格把控。
          </p>
        </div>

        <div class="detail-item">
          <h4><span class="icon">▌</span>传播方式</h4>
          <p>
            采用融媒体传播矩阵，在CCTV电视频道与腾讯视频、优酷视频等网络平台同步展播，实现全媒体覆盖。
          </p>
        </div>
      </div>

      <div class="dean-interview">
        <p class="highlight-date">2025年5月15日</p>
        <p>
          芦院长受邀央视采访，接受知名主持人朱迅的深度访谈。此次访谈聚焦芦院长创业历程，深度剖析其投身工业机器人专业人才培养领域的初心与坚守。
        </p>

        <div class="emphasis-quote">
          <p>
            访谈中，芦院长回顾创业伊始，面对行业的未知与挑战，他凭借敏锐的市场洞察力和果敢的决策力，毅然投身其中。多年来，他带领团队披荆斩棘，攻克一个又一个技术难题，突破重重发展瓶颈，为工业机器人行业的发展树立了标杆。
          </p>
        </div>

        <p>
          芦院长的创业故事，不仅是个人的奋斗史诗，更是工业机器人行业发展的生动缩影。他的经历充分彰显了创业者的坚韧不拔与创新精神，为我们提供了宝贵的学习典范，向优秀企业家致敬！
        </p>

        <p>
          此次芦院长登上央视舞台，接受权威媒体访谈，是我院发展历程中的重要里程碑，彰显了我院在工业机器人专业人才领域卓越影响力与深厚的底蕴。未来，我院将继续在芦院长的引领下，秉持初心，砥砺前行，为工业机器人的发展贡献更多力量！敬请节目播出，精彩呈现！
        </p>
      </div>

      <div class="symposium-section">
        <p>
          <span class="gold-text">芦院长受邀CCTV接受朱迅专访后</span
          >，在淄博校区教职工座谈会上称此次荣登央视，是对焜曦教育教学成果的高度认可，工业机器人专业人才的培养责任重大，关乎行业人才储备与产业未来。
        </p>

        <div class="development-plan">
          <h4><span class="icon">▌</span>未来发展规划</h4>
          <ul class="plan-list">
            <li>全力提升教学质量</li>
            <li>深化产教融合</li>
            <li>为社会输送更多更优秀的高技能工业机器人专业人才</li>
          </ul>
        </div>

        <p class="vision-text">
          展望未来，我们信心满怀，将在工业机器人专业培养领域乘风破浪，优化资源、拓展合作，为行业发展贡献我们的力量！
        </p>
      </div>

      <div class="conclusion">
        <p>
          本节目通过展示优秀企业家的经历和理念，致敬企业家精神，推动中国品牌建设，助力经济发展。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* 基础变量 */
$primary-color: #1890ff;
$secondary-color: #096dd9;
$text-color: #333;
$light-bg: #f5f7fa;
$border-radius: 12px;
$spacing-unit: 20px;

.cctv-interview {
  padding: $spacing-unit;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  min-height: 100vh;
}

/* 图片画廊 */
.media-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $spacing-unit;
  margin-bottom: $spacing-unit * 1.5;
  
  .gallery-item {
    width: 100%;
    height: 220px;
    border-radius: $border-radius;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
}

/* 标题样式 */
.section-title {
  color: $primary-color;
  font-size: 24px;
  margin: $spacing-unit 0;
  text-align: center;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid #f0f0f0;
}

/* 内容卡片通用样式 */
.content-card {
  padding: $spacing-unit;
  margin: $spacing-unit 0;
  background: white;
  border-radius: $border-radius;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border-left: 4px solid $primary-color;

  &:hover {
    transform: translateY(-3px);
  }
}

.highlight-text {
  color: $text-color;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: $spacing-unit;
  text-align: center;
}

/* 详情项 */
.detail-item {
  @extend .content-card;
  
  h4 {
    color: $primary-color;
    font-size: 18px;
    margin-bottom: $spacing-unit/2;
    display: flex;
    align-items: center;
    font-weight: 600;

    .icon {
      margin-right: 8px;
    }
  }

  p {
    color: #666;
    font-size: 15px;
    line-height: 1.8;
    text-align: justify;
  }
}

/* 院长访谈部分 */
.dean-interview {
  @extend .content-card;
  
  .highlight-date {
    color: $primary-color;
    font-weight: 600;
    margin: $spacing-unit 0;
    text-align: center;
    font-size: 18px;
  }

  p {
    color: $text-color;
    margin-bottom: $spacing-unit;
    line-height: 1.8;
    text-align: justify;
  }
}

/* 引用样式 */
.emphasis-quote {
  @extend .content-card;
  border-left: 4px solid $primary-color;
  background: $light-bg;
  margin: $spacing-unit 0;
  
  p {
    color: #555;
    font-style: italic;
  }
}

/* 座谈会部分 */
.symposium-section {
  @extend .content-card;
  
  .gold-text {
    color: $primary-color;
    font-weight: 600;
  }
}

/* 发展规划 */
.development-plan {
  margin: $spacing-unit 0;
  
  h4 {
    color: $primary-color;
    font-size: 18px;
    margin-bottom: $spacing-unit/2;
    display: flex;
    align-items: center;
    font-weight: 600;

    .icon {
      color: $primary-color;
      margin-right: 8px;
    }
  }
}

.plan-list {
  padding-left: $spacing-unit;
  
  li {
    color: #666;
    font-size: 15px;
    line-height: 1.8;
    margin: 12px 0;
    position: relative;

    &::before {
      content: "•";
      color: $primary-color;
      margin-right: 8px;
      font-weight: bold;
    }
  }
}

/* 愿景文本 */
.vision-text {
  color: $primary-color;
  font-weight: 600;
  padding: $spacing-unit;
  background: rgba($primary-color, 0.08);
  border-radius: $border-radius;
  text-align: center;
  margin: $spacing-unit 0;
}

/* 结论部分 */
.conclusion {
  @extend .content-card;
  background: rgba($primary-color, 0.08);
  text-align: center;
  
  p {
    color: #666;
    font-size: 15px;
    line-height: 1.8;
  }
}

@media screen and (max-width: 768px) {
  .cctv-interview {
    padding: 15px;

    .media-gallery {
      gap: 15px;
      margin-bottom: 20px;

      .gallery-item {
        height: 160px;
      }
    }

    .section-title {
      font-size: 20px;
      margin: 15px 0;
    }

    .content-card {
      padding: 20px;
      margin: 15px 0;
    }

    .detail-item,
    .dean-interview,
    .emphasis-quote,
    .symposium-section,
    .conclusion {
      h4, .highlight-date {
        font-size: 16px;
      }

      p, li {
        font-size: 14px;
      }
    }
  }
}
</style>
