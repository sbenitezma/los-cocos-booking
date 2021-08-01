import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import Footer from "./Footer.vue";

describe("Footer.vue", () => {
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
    state = {
      hotel: {
        data: {
          email: "test@test.com",
          phone: "656565656",
        },
      },
    };
    store = new Vuex.Store({
      state,
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
