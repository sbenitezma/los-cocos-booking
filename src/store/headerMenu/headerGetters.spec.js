import Vue from "vue";
import Vuex from "vuex";
import { headerGetters } from "./headerGetters";

describe("Header Menu Getters", () => {
  Vue.use(Vuex);

  const state = {
    menuItems: [
      {
        icon: "mdi-silverware-fork-knife",
        name: "Restaurant",
        path: "/restaurant",
      },
      {
        icon: "los-cocos-logo.svg",
        name: false,
        path: "/#",
      },
      { icon: "mdi-deskphone", name: "Contact", path: "/contact" },
    ],
  };

  it("getHeaderMenu", () => {
    const headerMenu = headerGetters.getHeaderMenu(state);
    expect(headerMenu).toEqual(state.menuItems);
  });
});
