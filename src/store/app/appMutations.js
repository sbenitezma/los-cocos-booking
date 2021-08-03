export const appMutations = {
  /**
   * Set page loading
   * @param state
   * @param payload
   */
  setLoading(state, payload) {
    state.loading[payload.section] = payload.value;
  },
};
