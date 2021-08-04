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
    state.booking.price = room.price;
    if (state.booking.promoCode) {
      let discount = state.booking.promoCode / 100;
      state.booking.totalPrice =
        state.booking.price - state.booking.price * discount;
    } else {
      state.booking.totalPrice = room.price;
    }
  },
  /**
   * Set LocalStorage room data
   * @param state
   * @param localStorage
   */
  setBookingRoomLocalStorage(state, localStorage) {
    state.booking.roomId = localStorage.roomId;
    state.booking.roomName = localStorage.roomName;
    state.booking.roomType = localStorage.roomType;
    state.booking.promoCode = localStorage.promoCode;
    state.booking.price = localStorage.price;
    state.booking.totalPrice = localStorage.totalPrice;
  },
  /**
   * Set booking date and occupancy data
   * @param state
   * @param info
   */
  setBookingInfo(state, info) {
    state.booking.checkInDate = info.checkInDate;
    state.booking.checkOutDate = info.checkOutDate;
    state.booking.adultsOccupancy = info.adultsOccupancy;
    state.booking.childrenOccupancy = info.childrenOccupancy;
  },
  /**
   * Set PromoCode
   * @param state
   * @param promoCode
   */
  setPromoCode(state, promoCode) {
    state.booking.promoCode = promoCode;
  },
  /**
   * Set total price of booking
   * @param state
   * @param totalPrice
   */
  setBookingTotalPrice(state, totalPrice) {
    state.booking.totalPrice = totalPrice;
  },
};
