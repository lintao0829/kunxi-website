<template>
  <div class="pageHeader">
    <div
      v-if="page_now != 1"
      class="header_height"
      style="height: 100px; visibility: hidden"
    ></div>
    <header :class="{ header_home: page_now == 1 && isScroll == false }">
      <img
        v-if="page_now == 1 && isScroll == false"
        src="@/assets/0_common/kunxiLogo.png"
        alt="logo"
      />
      <img
        v-else
        src="@/assets/0_common/kunxiLogo.png"
        @click="goPage('Home', '/', '1')"
        alt="logo"
      />
      <span style="color:#000099;font-size: 18px;font-weight: 800;">焜曦教育</span>
      <div class="navlist">
        <div
          class="nav"
          v-for="(item, index) in navlist"
          :key="index"
          @click="goPage(item.name, item.url, index + 1)"
        >
          <p>{{ item.title }}</p>
          <div
            class="dash"
            :class="{ dash_chose: page_now == index + 1 }"
          ></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { navListPC } from "@/config/navConfig";

export default {
  name: "pageHeader",
  data() {
    return {
      navlist: navListPC,
      page_now: 1
    };
  },
  props: ["isScroll"],
  mounted() {
    const path = "/" + window.location.href.split("/").pop();
    for (const item of this.navlist) {
      if (item.url === path) {
        this.page_now = item.index;
        return;
      }
    }
  },
  methods: {
    goPage(name, url, index) {
      this.page_now = index;
      this.$router.push({ name, params: { navIndex: index } });
    },
    goPage_News(item) {
      this.$router.push({ name: item.name, params: { newsDetail: item.item } });
    },
    goPage_Estate(item) {
      this.$router.push({
        name: item.name,
        params: { navIndex: item.index, selectIndex: item.selectIndex }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100px;
  background: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 180px;
    height: 160px;
    margin-left: 100px;
    cursor: pointer;
  }

  .navlist {
    margin-right: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav {
      height: 100px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-decoration: none;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #616161;
      margin: 0 20px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      .dash {
        width: 100%;
        height: 5px;
        background: #b69d74;
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
      }

      .dash_chose {
        visibility: visible;
      }
    }

    .nav:hover {
      .dash {
        visibility: visible;
      }
    }
  }
}

.header_home {
  background: transparent;

  .navlist {
    .nav {
      color: #ffffff;

      .dash {
        background: #ffffff;
      }
    }
  }
}
</style>