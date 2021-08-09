export const appActions = {
  /**
   * Set Loading state
   * @param commit
   * @param loadingState
   * @returns {Promise<void>}
   * @constructor
   */
  setLoading({ commit }, loadingState) {
    if (loadingState) {
      commit("setLoading", loadingState);
    }
  },
};
