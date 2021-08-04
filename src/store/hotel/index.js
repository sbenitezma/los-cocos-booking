import { hotelGetters } from "./hotelGetters";
import { hotelActions } from "./hotelActions";
import { hotelMutations } from "./hotelMutations";

export const hotel = {
  state: () => ({
    data: {},
    rooms: [],
    booking: {
      adultsOccupancy: 0,
      checkInDate: "",
      checkInTime: "15.00h",
      checkOutDate: "",
      checkOutTime: "12.00h",
      childrenOccupancy: 0,
      promoCode: 0,
      roomId: "",
      roomName: "",
      roomType: "",
      price: 0,
      totalPrice: 0,
    },
  }),
  actions: hotelActions,
  mutations: hotelMutations,
  getters: hotelGetters,
};
