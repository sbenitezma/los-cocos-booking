import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import { hotel } from "@/store/hotel/index";
import { hotelGetters } from "@/store/hotel/hotelGetters";

import HotelRooms from "./HotelRooms.vue";

describe("HotelRooms.vue", () => {
  const localVue = createLocalVue();
  let router;
  let store;
  let vuetify;
  let wrapper;

  vuetify = new Vuetify();
  localVue.use(vuetify);
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        rooms: [
          {
            id: 1,
            name: "Tst",
            description: "Tst2",
            floorSize: "20m2",
            numberOfBeds: 1,
            occupancy: 2,
            price: 200,
            typeOfRoom: "Room",
            typeOfBed: "Queen-size",
            thumbnail: "room_1",
          },
          {
            id: 2,
            name: "Tst2",
            description: "Tst2",
            floorSize: "50m2",
            numberOfBeds: 1,
            occupancy: 2,
            price: 350,
            typeOfRoom: "Bungalow",
            typeOfBed: "Standard",
            thumbnail: "room_2",
          },
        ],
        booking: hotel.state().booking,
      },
      getters: {
        getHotelRooms: hotelGetters.getHotelRooms,
        getBookingInfo: hotelGetters.getBookingInfo,
      },
    });
  });

  // Destroy the component wrapper after each test
  afterEach(() => {
    wrapper.destroy();
  });

  it("Renders HotelRooms component", () => {
    wrapper = shallowMount(HotelRooms, {
      router,
      store,
      localVue,
      vuetify,
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper.findComponent(HotelRooms).exists()).toBeTruthy();
  });

  it("Gets Room Picture", () => {
    wrapper = shallowMount(HotelRooms, {
      router,
      store,
      localVue,
      vuetify,
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper.vm.getRoomPhoto(store.state.rooms[0])).toBeTruthy();
  });
});
