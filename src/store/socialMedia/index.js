import { socialMediaGetters } from "./socialMediaGetters";

export const socialMedia = {
  state: () => ({
    socialMedia: [
      { name: "rrss", url: "http://hotelloscocos.com.mx/es/feed" },
      {
        name: "facebook",
        url: "https://www.facebook.com/hotelloscocoschetumal",
      },
      {
        name: "instagram",
        url: "https://www.facebook.com/hotelloscocoschetumal",
      },
      { name: "twitter", url: "https://twitter.com/hotelloscocos" },
    ],
  }),
  getters: socialMediaGetters,
};
