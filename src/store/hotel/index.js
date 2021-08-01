import { hotelGetters } from "./hotelGetters";
import { hotelActions } from "./hotelActions";
import { hotelMutations } from "./hotelMutations";

export const hotel = {
  state: () => ({
    data: {},
    rooms: [],
  }),
  actions: hotelActions,
  mutations: hotelMutations,
  getters: hotelGetters,
};
