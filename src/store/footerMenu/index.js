import { footerGetters } from "./footerGetters";

export const footerMenu = {
  state: () => ({
    footerMenu: [
      {
        icon: "mdi-file-eye",
        name: "Terms and Conditions",
        path: "/terms-and-conditions",
      },
      {
        icon: "mdi-shield-home",
        name: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        icon: "mdi-account-group-outline",
        name: "About us",
        path: "/about-us",
      },
      { icon: "mdi-handshake-outline", name: "Partners", path: "/partners" },
    ],
  }),
  getters: footerGetters,
};
