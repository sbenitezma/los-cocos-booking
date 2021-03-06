import Vue from "vue";
import Vuex from "vuex";
import { socialMediaGetters } from "./socialMediaGetters";

describe("Social Media Getters", () => {
  Vue.use(Vuex);

  const state = {
    socialMedia: [
      {
        name: "facebook",
        path: "https://www.facebook.com/hotelloscocoschetumal",
      },
      { name: "twitter", path: "https://twitter.com/hotelloscocos" },
    ],
  };

  it("getSocialMedia", () => {
    const socialMediaLinks = socialMediaGetters.getSocialMedia(state);
    expect(socialMediaLinks).toEqual(state.socialMedia);
  });
});
