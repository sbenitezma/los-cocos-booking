import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import BookingForm from "./BookingForm.vue";

describe("BookingForm.vue", () => {
  const localVue = createLocalVue();
  let state;
  let router;
  let store;
  let vuetify;
  let wrapper;

  vuetify = new Vuetify();
  localVue.use(vuetify);
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    state = {};
    store = new Vuex.Store({
      state,
    });
  });

  // Destroy the component wrapper after each test
  afterEach(() => {
    wrapper.destroy();
  });

  it("Renders BookingForm component", () => {
    wrapper = shallowMount(BookingForm, {
      router,
      store,
      localVue,
      vuetify,
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper.findComponent(BookingForm).exists()).toBeTruthy();
  });
});
