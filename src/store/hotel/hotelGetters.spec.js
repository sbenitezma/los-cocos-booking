import Vue from "vue";
import Vuex from "vuex";
import { hotelGetters } from "./hotelGetters";

describe("Hotel Getters", () => {
  Vue.use(Vuex);

  const state = {
    hotel: {
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
    },
  };

  it("getHotelData", () => {
    const hotelInfo = hotelGetters.getHotelData(state);
    expect(hotelInfo).toEqual(state.data);
  });

  it("getHotelRooms", () => {
    const hotelRooms = hotelGetters.getHotelRooms(state);
    expect(hotelRooms).toEqual(state.rooms);
  });
});
