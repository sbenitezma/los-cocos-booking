import Vue from "vue";
import Vuex from "vuex";
import { hotelGetters } from "./hotelGetters";

describe("Hotel Getters", () => {
  Vue.use(Vuex);

  const state = {
    hotel: {
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

  it("Test getHotelData getter method", () => {
    const hotelInfo = hotelGetters.getHotelData(state);
    expect(hotelInfo).toEqual(state.data);
  });

  it("Test getHotelRooms getter method", () => {
    const hotelRooms = hotelGetters.getHotelRooms(state);
    expect(hotelRooms).toEqual(state.rooms);
  });

  it("Test getRoomById getter method", () => {
    const hotelRoom = hotelGetters.getRoomById(state.hotel)(1);
    expect(hotelRoom).toEqual(state.hotel.rooms[0]);
  });

  it("Test getBookingInfo getter method", () => {
    const bookingInfo = hotelGetters.getBookingInfo(state.hotel);
    expect(bookingInfo).toEqual(state.hotel.booking);
  });
});
