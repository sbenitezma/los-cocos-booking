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
  /**
   * Set booking room
   * @param state
   * @param room
   */
  setBookingRoom(state, room) {
    state.booking.roomId = room.id;
    state.booking.roomName = room.name;
    state.booking.roomType = room.typeOfRoom;
    state.booking.totalPrice = room.price;
  },
};
