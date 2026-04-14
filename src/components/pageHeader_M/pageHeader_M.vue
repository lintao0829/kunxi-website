<template>
  <header>
    <div class="header">
      <img
        class="nav"
        src="@/assets/0_common_M/icon_nav_open.png"
        v-if="!isOpen"
        @click="openNavLists"
        alt=""
      />
      <img
        class="nav"
        src="@/assets/0_common_M/icon_nav_close.png"
        v-else
        @click="openNavLists"
        alt=""
      />
      <span style="color:#000099;font-size: 18px;font-weight: 800;">焜曦教育</span>
      <img src="@/assets/0_common/kunxiLogo.png" alt="logo" />
    </div>
    <div
      class="navlists"
      :class="[isOpened && isOpen ? 'navShow' : isOpened && !isOpen ? 'navHide' : '']"
    >
      <div
        class="navlist"
        v-for="(item, index) in navlist"
        :key="index"
        @click="navChoose(item.children, index)"
      >
        {{ item.title }}
        <img
          v-if="item.children.length"
          src="@/assets/0_common_M/icon_expand.png"
          alt=""
        />
      </div>
      <div class="navChildren" :class="{ navBack: navChild.length === 0 }">
        <div
          class="list"
          v-for="(item, index) in navChild"
          :key="index"
          @click="navChildChoose(index)"
        >
          {{ item.title }}
        </div>
        <div class="back" @click="navChooseBack">
          <img src="@/assets/0_common_M/icon_back_R.png" alt="" />
          <p>返回</p>
        </div>
      </div>
    </div>
    <div class="mask" v-if="isOpen" @click="navClose"></div>
    <div class="headerBody"></div>
  </header>
</template>

<script>
import { navListMobile } from "@/config/navConfig";

export default {
  name: "pageHeader_M",
  data() {
    return {
      navlist: navListMobile,
      isOpen: false,
      isOpened: false,
      navChild: [],
      navIndex: "",
      navChildIndex: ""
    };
  },
  methods: {
    openNavLists() {
      this.isOpen = !this.isOpen;
      this.isOpened = true;
    },
    navChooseBack() {
      this.navChild = [];
    },
    navChoose(item, index) {
      this.navChild = item;
      this.navIndex = index;
      if (item.length === 0) {
        this.isOpen = false;
        this.$router.push({
          name: this.navlist[index].name,
          query: { id: this.navlist[index].ids }
        });
      }
    },
    navChildChoose(index) {
      this.navChildIndex = index;
      this.isOpen = false;
      this.$router.push({
        name: this.navlist[this.navIndex].name2,
        query: { navIndex: index, id: this.navChild[this.navChildIndex].ids }
      });
      this.$emit("sendIndex", index);
      this.navChild = [];
    },
    navClose() {
      this.isOpen = false;
      this.navChild = [];
    }
  }
};
</script>

<style scoped>
.headerBody {
  width: 100%;
  height: 140px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
}
.header .nav {
  margin-left: 75px;
  width: 78px;
  height: 82px;
}
.header img {
  margin-right: 50px;
  width: 180px;
  height: 160px;
  display: block;
}
.navlists {
  overflow: hidden;
  position: fixed;
  top: -700px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0);
  z-index: 9999;
  width: 600px;
  height: 700px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.navShow {
  animation: navDown 0.5s linear;
  transform: translate(-50%, 850px);
}
.navHide {
  animation: navUp 0.5s linear;
  transform: translate(-50%, 0);
}
@keyframes navDown {
  0% { transform: translate(-50%, 0); }
  100% { transform: translate(-50%, 850px); }
}
@keyframes navUp {
  0% { transform: translate(-50%, 850px); }
  100% { transform: translate(-50%, 0); }
}
.navlists .navlist {
  width: 200px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  opacity: 0.7;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
}
.navlists .navlist img {
  width: 31px;
  height: 30px;
  display: block;
  margin-left: 20px;
}
.navlists .navChildren {
  position: absolute;
  top: 0;
  right: -600px;
  width: 600px;
  height: 700px;
  background: linear-gradient(0deg, #b48942 0%, #cfa765 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: navChildrenShow 0.5s linear;
  transform: translateX(-600px);
}
.navlists .navBack {
  animation: navChildrenHide 0.5s linear;
  transform: translateX(0);
}
@keyframes navChildrenShow {
  0% { transform: translateX(0); }
  100% { transform: translateX(-600px); }
}
@keyframes navChildrenHide {
  0% { transform: translateX(-600px); }
  100% { transform: translateX(0); }
}
.navlists .navChildren .list {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 35px;
}
.navlists .navChildren .back {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.navlists .navChildren .back img {
  width: 56px;
  height: 56px;
  display: block;
}
.navlists .navChildren .back p {
  margin-top: 10px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 100;
  animation: maskShow 1s;
}
@keyframes maskShow {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>