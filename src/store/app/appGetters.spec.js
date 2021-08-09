import Vue from "vue";
import Vuex from "vuex";
import { appGetters } from "./appGetters";

describe("App Getters", () => {
  Vue.use(Vuex);

  const state = {
    loading: {
      info: true,
    },
  };

  it("getLoading", () => {
    const loadingInfo = appGetters.getLoading(state);
    expect(loadingInfo).toEqual(state.loading);
  });
});
