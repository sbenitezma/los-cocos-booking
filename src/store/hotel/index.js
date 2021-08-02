import { hotelGetters } from "./hotelGetters";
import { hotelActions } from "./hotelActions";
import { hotelMutations } from "./hotelMutations";

export const hotel = {
  state: () => ({
    data: {},
    rooms: [],
    booking: {
      roomName: "Mini Dreamy",
      roomType: "Room",
      checkInDate: "",
      checkInTime: "15.00h",
      checkOutDate: "",
      checkOutTime: "12.00h",
      occupancy: "",
      totalPrice: "",
    },
  }),
  actions: hotelActions,
  mutations: hotelMutations,
  getters: hotelGetters,
};
