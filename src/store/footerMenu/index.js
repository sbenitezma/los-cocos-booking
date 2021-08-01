import { footerGetters } from "./footerGetters";

export const footerMenu = {
  state: () => ({
    footerMenu: [
      { name: "Terms and Conditions", path: "/terms-and-conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "About us", path: "/about-us" },
      { name: "Partners", path: "/partners" },
    ],
  }),
  getters: footerGetters,
};
