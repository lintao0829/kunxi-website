<template>
  <div class="teacher-strength">
    <h2>焜曦教育师资力量</h2>
    <div class="intro-section">
      <div class="intro-card">
        <div class="card-content">
          焜曦教育在工业机器人专业的师资配备上独具匠心，构建了一支实力强劲、经验丰富的"双师型"教学团队。教师均毕业于自动化、机械工程、电气自动化等相关专业，如毕业于山东工业大学自动化专业的曹培宏，以及毕业于山东交通学院电气自动化专业的鹿保卫等。他们在工业机器人、PLC可编程控制器、电工电子技术等领域拥有扎实的理论基础。团队中不少教师拥有多年企业工作经验，曾任职于科沃斯、固高科技等知名企业，如卢彦龙担任过机器人编程与设计相关工作，刘茂山曾是固高科技研发师。教师们采用理论、仿真、实训"三位一体"教学方式，让学生先通过理论学习掌握基础知识，再借助仿真模拟熟悉操作流程，最后在实训中进行真机实操。除专业授课教师外，还有职业规划专业人士，为学生提供职业规划指导，帮助学生了解工业机器人行业的职业发展路径、岗位需求，引导学生根据自身兴趣与特长进行职业规划。
        </div>
      </div>
    </div>

    <div class="teacher-grid">
      <div
        class="teacher-card"
        v-for="(teacher, index) in teachers"
        :key="index"
      >
        <div class="teacher-image">
          <img :src="teacher.image" :alt="teacher.name" />
        </div>
        <div class="teacher-info">
          <p class="title">{{ teacher.title }}</p>
          <div class="description">
            <div class="info-section">
              <span class="label">毕业院校：</span>
              <span class="content">{{ teacher.education }}</span>
            </div>
            <div class="info-section">
              <span class="label">主讲课程：</span>
              <span class="content">{{ teacher.courses }}</span>
            </div>
            <div class="info-section message">
              <span class="label">教师寄语：</span>
              <span class="content">{{ teacher.message }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherStrength",
  data() {
    return {
      teachers: [
        {
          name: "张教授",
          title: "双高双师型教授，高级工程师，高级技师",
          education: "山东大学 82级自动化专业",
          courses: "电工电子，CAD 制图、机械制图",
          message:
            "每个孩子都有他自己的学习方式，帮他找到自己的学习模式，助他成为最好的自己。能否培养和推动学习，是直接影响学生个体学习效率的内在动力。",
          image: require("@/assets/teacher1.jpg")
        },
        {
          name: "教师2",
          title: "高级工程师，获奖导师",
          education:
            "山东交通学院电气自动化专业，研究生学历，获得 CAA 自动化与人工智能创新团队奖，作品获得中国智能车未来挑战赛亚军。",
          courses: "PLC编程。",
          message: "工程之路，要以匠心筑梦，以毅力为桥，跨越困难，成就辉煌。",
          image: require("@/assets/teacher2.jpg")
        },
        {
          name: "教师3",
          title: "高级工程师，教授",
          education: "研究生学历，青岛农业大学(本科院校)特聘教授",
          courses: "机器人操作、安装、调试、维修、维护、编程、设计。",
          message:
            "亲爱的工程师们，你们是筑梦者，以卓越的才智和精益求精的精神，将会为国家建设和社会发展做出卓越贡献。",
          image: require("@/assets/teacher3.jpg")
        },
        {
          name: "教师4",
          title: "高级工程师，高级技师",
          education: "青岛大学电气专业 89级毕业",
          courses: "电气设备管理，电气工程设计，自动化控制编程，设备调试等",
          message: "用匠心筑梦，靠技能发光。",
          image: require("@/assets/teacher4.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.teacher-strength {
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  min-height: 100vh;

  h2 {
    text-align: center;
    font-size: 24px;
    color: #1890ff;
    position: relative;
    padding-bottom: 15px;
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #1890ff, #36cfc9);
      border-radius: 3px;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100px;
    }
  }

  .intro-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    .intro-card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      border-left: 4px solid #1890ff;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      }

      .card-content {
        color: #666;
        font-size: 14px;
        line-height: 1.8;
        text-align: justify;
        letter-spacing: 0.5px;
      }
    }
  }

  .teacher-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    padding: 20px;
  }

  .teacher-card {
    padding-top: 10px;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .teacher-image {
      width: 100%;
      height: 360px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .teacher-info {
      padding: 24px;

      .title {
        color: #1890ff;
        font-size: 18px;
        margin-bottom: 16px;
        font-weight: 600;
        text-align: center;
        position: relative;
        padding-bottom: 12px;

        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #1890ff, #36cfc9);
          border-radius: 2px;
        }
      }

      .description {
        .info-section {
          margin-bottom: 12px;
          padding: 8px 12px;
          background: #f8f9fa;
          border-radius: 6px;
          transition: background-color 0.3s ease;

          &:hover {
            background: #e6f7ff;
          }

          .label {
            color: #1890ff;
            font-weight: 600;
            font-size: 14px;
            margin-right: 8px;
          }

          .content {
            color: #666;
            font-size: 14px;
            line-height: 1.6;
          }

          &.message {
            background: #fff7e6;
            border-left: 3px solid #ffa940;

            &:hover {
              background: #fff1d6;
            }

            .label {
              color: #d46b08;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .teacher-strength {
    padding: 15px;

    .teacher-grid {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 10px;
    }

    .teacher-card {
      .teacher-info {
        padding: 16px;

        .title {
          font-size: 16px;
          margin-bottom: 12px;
          padding-bottom: 8px;
        }

        .description {
          .info-section {
            padding: 6px 10px;
            margin-bottom: 10px;

            .label {
              font-size: 13px;
            }

            .content {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>
