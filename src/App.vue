<template>
  <div id="app">
    <div v-if="isLoading" class="loading">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p>加载中...</p>
      </div>
    </div>
    <router-view v-show="!isLoading" />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isLoading: true
    };
  },
  props: {},
  components: {},
  created() {
    this.handleRouteChange();
  },
  mounted() {
    this.detectDeviceAndNavigate();
    this.$router.afterEach(() => {
      this.isLoading = false;
      window.scrollTo(0, 0);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    next();
  },
  methods: {
    detectDeviceAndNavigate() {
      if (this._isMobile()) {
        this.$router.replace("/home_m");
      } else {
        this.$router.replace("/");
      }
    },
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    handleRouteChange() {
      this.$router.beforeEach((to, from, next) => {
        this.isLoading = true;
        next();
      });
    }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  min-height: 100vh;
  overflow-y: auto;
  position: relative;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.loading-content {
  text-align: center;
}
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #b69d74;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.loading-content p {
  color: #666;
  font-size: 14px;
}
</style>