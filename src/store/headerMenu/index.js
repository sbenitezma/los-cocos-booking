import { headerGetters } from "./headerGetters";

export const navMenu = {
  state: () => ({
    menuItems: [
      { icon: "mdi-home", name: "Home", path: "/" },
      { icon: "mdi-bed-king-outline", name: "Rooms", path: "/rooms" },
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
      { icon: "mdi-party-popper", name: "Weedings", path: "/weedings" },
      { icon: "mdi-account-group", name: "Membership", path: "/membership" },
      { icon: "mdi-deskphone", name: "Contact", path: "/contact" },
    ],
  }),
  getters: headerGetters,
};
