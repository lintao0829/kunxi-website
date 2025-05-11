<template>
  <div class="page-content page-content-1">
    <div class="school-list">
      <div class="school-card">
        <div class="school-name">山东铝业职业学院</div>
        <img class="school-image" src="../../assets/0_common_M/shandonglvye.png" alt="山东铝业职业学院" />
      </div>
      <div class="school-card">
        <div class="school-name">滨州职业学院</div>
        <img class="school-image" src="../../assets/0_common_M/binzhouzhiye.png" alt="滨州职业学院" />
      </div>
      <div class="school-card">
        <div class="school-name">山东力明科技职业学院</div>
        <img class="school-image" src="../../assets/0_common_M/shandongliming.png" alt="山东力明科技职业学院" />
      </div>
      <div class="school-card">
        <div class="school-name">济宁职业技术学院</div>
        <img class="school-image" src="../../assets/0_common_M/jiningzhiye.png" alt="济宁职业技术学院" />
      </div>
      <div class="school-card">
        <div class="school-name">烟台春山技工学校</div>
        <img class="school-image" src="../../assets/0_common_M/yantaichunshan.png" alt="烟台春山技工学校" />
      </div>
      <div class="school-card">
        <div class="school-name">青岛中工技工学校</div>
        <img class="school-image" src="../../assets/0_common_M/qingdaozhonggong.png" alt="青岛中工技工学校" />
      </div>
      <div class="school-card">
        <div class="school-name">德州近博技工学校</div>
        <img class="school-image" src="../../assets/0_common_M/dezhoujinbo.png" alt="德州近博技工学校" />
      </div>
      <div class="school-card">
        <div class="school-name">山东深泉技师学院</div>
        <img class="school-image" src="../../assets/0_common_M/shandongshenquan.jpg" alt="山东深泉技师学院" />
      </div>
      <div class="school-card">
        <div class="school-name">威海高级技工学校</div>
        <img class="school-image" src="../../assets/0_common_M/weihaigaoji.png" alt="威海高级技工学校" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CooperativeSchools'
}
</script>

<style lang="scss" scoped>
.page-content-1 {
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
</style> 