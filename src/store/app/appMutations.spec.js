import Vue from "vue";
import Vuex from "vuex";
import { appMutations } from "./appMutations";

describe("App store mutations", () => {
  Vue.use(Vuex);

  it("Test setLoading", () => {
    const loading = {
      info: true,
    };
    const state = { loading };
    appMutations.setLoading(state, loading);
    expect(state.loading).toBeTruthy();
    expect(state.loading.info).toBe(loading.info);
  });

  it("Test refreshPageInfo", () => {
    const loading = {
      info: true,
    };
    const state = { loading };
    appMutations.refreshPageInfo(state);
    expect(state.loading).toBeTruthy();
    expect(state.loading.info).toBe(loading.info);
  });
});
