export const hotelMutations = {
  /**
   * Set hotel.json currentUser
   * @param state
   * @param hotel
   */
  setHotelInfo(state, hotel) {
    state.data = hotel.data;
    state.rooms = hotel.rooms;
  },
};
