import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "lib-flexible/flexible";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.get["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.transformRequest = [function(data) {
  let ret = "";
  for (let it in data) {
    ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
  }
  return ret;
}];

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import { VueJsonp } from "vue-jsonp";
Vue.use(VueJsonp);

import { Button, Cell, CellGroup, Image as VanImage, Icon } from "vant";
import "vant/lib/index.css";
Vue.use(Button).use(Cell).use(CellGroup).use(VanImage).use(Icon);

import pageHeader from "./components/pageHeader";
import pageHeader_M from "./components/pageHeader_M";
import pageFooter from "./components/pageFooter";
import pageFooter_M from "./components/pageFooter_M";
Vue.use(pageHeader);
Vue.use(pageHeader_M);
Vue.use(pageFooter);
Vue.use(pageFooter_M);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");