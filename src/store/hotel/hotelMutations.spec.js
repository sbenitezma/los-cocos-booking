import Vue from "vue";
import Vuex from "vuex";
import { hotelMutations } from "./hotelMutations";

describe("Hotel store mutations", () => {
  Vue.use(Vuex);

  it("Test setHotelInfo", () => {
    const hotel = {
      data: {
        id: "Test01",
        name: "Los Cocos Testing",
        phone: "656565656",
        email: "test@test.com",
      },
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
    };
    const state = {};
    hotelMutations.setHotelInfo(state, hotel);
    expect(state.data).toBeTruthy();
    expect(state.data).toBe(hotel.data);
  });
});
