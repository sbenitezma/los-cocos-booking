import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import { socialMedia } from "@/store/socialMedia/index";
import { socialMediaGetters } from "@/store/socialMedia/socialMediaGetters";
import { footerMenu } from "@/store/footerMenu/index";
import { footerGetters } from "@/store/footerMenu/footerGetters";
import { hotel } from "@/store/hotel/index";
import { hotelGetters } from "@/store/hotel/hotelGetters";

import Footer from "./Footer.vue";

describe("Footer.vue", () => {
  const localVue = createLocalVue();
  let router;
  let store;
  let vuetify;
  let wrapper;

  vuetify = new Vuetify();
  localVue.use(vuetify);
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        hotel: hotel,
        footerMenu: footerMenu.state().footerMenu,
        socialMedia: socialMedia.state().socialMedia,
      },
      getters: {
        getHotelData: hotelGetters.getHotelData,
        getFooterMenu: footerGetters.getFooterMenu,
        getSocialMedia: socialMediaGetters.getSocialMedia,
      },
    });
  });

  // Destroy the component wrapper after each test
  afterEach(() => {
    wrapper.destroy();
  });

  it("Renders Footer component", () => {
    wrapper = shallowMount(Footer, {
      router,
      store,
      localVue,
      vuetify,
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper.findComponent(Footer).exists()).toBeTruthy();
  });
});
