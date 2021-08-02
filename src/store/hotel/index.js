import { hotelGetters } from "./hotelGetters";
import { hotelActions } from "./hotelActions";
import { hotelMutations } from "./hotelMutations";

export const hotel = {
  state: () => ({
    data: {},
    rooms: [],
    booking: {
      roomId: "",
      roomName: "",
      roomType: "",
      checkInDate: "",
      checkInTime: "15.00h",
      checkOutDate: "",
      checkOutTime: "12.00h",
      adultsOccupancy: 0,
      childrenOccupancy: 0,
      totalPrice: 0,
    },
  }),
  actions: hotelActions,
  mutations: hotelMutations,
  getters: hotelGetters,
};
