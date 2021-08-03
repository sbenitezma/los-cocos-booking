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
  /**
   * Get Hotel Room by Id
   * @param state
   * @returns {function(*): *}
   */
  getRoomById: (state) => (idRoom) => {
    if (idRoom) {
      return state.rooms.find((room) => room.id === idRoom);
    }
    return false;
  },
  /**
   * Get booking info
   * @param state
   * @returns {{checkOutDate: string, checkOutTime: string, totalPrice: number, checkInTime: string, adultsOccupancy: number, checkInDate: string, roomId: string, roomName: string, roomType: string, childrenOccupancy: number}}
   */
  getBookingInfo: (state) => {
    return state.booking;
  },
};
