import Vue from "vue";
import Vuex from "vuex";
import { footerGetters } from "./footerGetters";

describe("Footer Menu Getters", () => {
  Vue.use(Vuex);

  const state = {
    footerMenu: [
      { name: "Terms and Conditions", path: "/terms-and-conditions" },
      { name: "Partners", path: "/partners" },
    ],
  };

  it("getFooterMenu", () => {
    const footerMenu = footerGetters.getFooterMenu(state);
    expect(footerMenu).toEqual(state.footerMenu);
  });
});
