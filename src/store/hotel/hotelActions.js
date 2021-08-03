import db from "@/api/db/hotel.json";

export const hotelActions = {
  /**
   * Load Hotel API info
   * @param commit
   * @returns {Promise<void>}
   * @constructor
   */
  async LOAD_HOTEL({ commit }) {
    if (db) {
      commit("setHotelInfo", db);
    }
  },

  /**
   * Set Booking room
   * @param commit
   * @param room
   * @returns {Promise<void>}
   * @constructor
   */
  setBookingRoom({ commit }, room) {
    if (room) {
      commit("setBookingRoom", room);
    }
  },
  /**
   * Set booking date and occupancy data
   * @param commit
   * @param info
   */
  setBookingInfo({ commit }, info) {
    if (info) {
      commit("setBookingInfo", info);
    }
  },
};
