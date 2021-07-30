export const mutations = {
  /**
   * Set page loading
   * @param state
   * @param payload
   */
  setLoading(state, payload) {
    state.loading[payload.section] = payload.value;
  },
  /**
   * Set hotel.json currentUser
   * @param state
   * @param hotel
   */
  setHotelInfo(state, hotel) {
    state.hotel = hotel;
    state.loading.info = false;
  },
};
