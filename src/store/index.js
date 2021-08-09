import Vue from "vue";
import Vuex from "vuex";
import { app } from "./app/index";
import { navMenu } from "./headerMenu/index";
import { hotel } from "./hotel/index";
import { footerMenu } from "./footerMenu/index";
import { socialMedia } from "./socialMedia/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    hotel: hotel,
    app: app,
    navMenu: navMenu,
    footerMenu: footerMenu,
    socialMedia: socialMedia,
  },
});
