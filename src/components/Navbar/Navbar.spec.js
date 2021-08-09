import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import { app } from "@/store/app/index";
import { appGetters } from "@/store/app/appGetters";
import { headerGetters } from "@/store/headerMenu/headerGetters";

import Navbar from "./Navbar.vue";

describe("Navbar.vue", () => {
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
        loading: app.state().loading,
      },
      getters: {
        getLoading: appGetters.getLoading,
        getHeaderMenu: headerGetters.getHeaderMenu,
      },
    });
  });

  // Destroy the component wrapper after each test
  afterEach(() => {
    wrapper.destroy();
  });

  it("Renders Navbar component", () => {
    wrapper = shallowMount(Navbar, {
      router,
      store,
      localVue,
      vuetify,
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper.findComponent(Navbar).exists()).toBeTruthy();
  });
});
