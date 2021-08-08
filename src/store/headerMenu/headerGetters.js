import { footerMenu } from "../footerMenu/index";
import { socialMedia } from "../socialMedia/index";

export const headerGetters = {
  /**
   * Get Navigation Menu Info
   */
  getHeaderMenu: (state) => {
    return state.menuItems;
  },
  /**
   * Get Mobile navigation info
   * @param state
   * @returns {*}
   */
  getMobileMenu: (state) => {
    return state.menuItems.concat(
      footerMenu.state().footerMenu,
      socialMedia.state().socialMedia
    );
  },
};
