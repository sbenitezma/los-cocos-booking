import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import Datepicker from "./Datepicker.vue";

describe("Datepicker.vue", () => {
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

  it("Renders Datepicker component", () => {
    wrapper = shallowMount(Datepicker, {
      router,
      store,
      localVue,
      vuetify,
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper.findComponent(Datepicker).exists()).toBeTruthy();
  });
});
