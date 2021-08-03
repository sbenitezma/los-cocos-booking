import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import { hotel } from "@/store/hotel/index";
import { hotelGetters } from "@/store/hotel/hotelGetters";

import BookingSummary from "./BookingSummary.vue";

describe("BookingSummary.vue", () => {
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
        booking: hotel.state().booking,
      },
      getters: {
        getRoomById: hotelGetters.getRoomById,
        getBookingInfo: hotelGetters.getBookingInfo,
      },
    });
  });

  // Destroy the component wrapper after each test
  afterEach(() => {
    wrapper.destroy();
  });

  it("Renders BookingSummary component", () => {
    wrapper = shallowMount(BookingSummary, {
      router,
      store,
      localVue,
      vuetify,
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper.findComponent(BookingSummary).exists()).toBeTruthy();
  });
});
