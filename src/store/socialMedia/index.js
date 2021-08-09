import { socialMediaGetters } from "./socialMediaGetters";

export const socialMedia = {
  state: () => ({
    socialMedia: [
      {
        icon: "mdi-rss",
        name: "rrss",
        path: "http://hotelloscocos.com.mx/es/feed",
      },
      {
        icon: "mdi-facebook",
        name: "facebook",
        path: "https://www.facebook.com/hotelloscocoschetumal",
      },
      {
        icon: "mdi-instagram",
        name: "instagram",
        path: "https://www.facebook.com/hotelloscocoschetumal",
      },
      {
        icon: "mdi-twitter",
        name: "twitter",
        path: "https://twitter.com/hotelloscocos",
      },
    ],
  }),
  getters: socialMediaGetters,
};
