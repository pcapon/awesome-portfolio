import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/global.scss";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
Vue.prototype.$AOS = AOS;

new Vue({
  created() {
    AOS.init({
      mirror: true
    });
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
