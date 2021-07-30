export const getters = {
  /**
   * Get Hotel Info
   */
  getHotelInfo: (state) => {
    return state.hotel?.info;
  },
  /**
   * Get Hotel rooms info
   */
  getHotelRooms: (state) => {
    return state.hotel?.rooms;
  },
};
