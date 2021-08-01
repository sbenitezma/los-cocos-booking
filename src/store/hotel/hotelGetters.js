export const hotelGetters = {
  /**
   * Get Hotel Data
   */
  getHotelData: (state) => {
    return state.data;
  },
  /**
   * Get Hotel rooms info
   */
  getHotelRooms: (state) => {
    return state.rooms;
  },
};
