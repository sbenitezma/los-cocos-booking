import Vue from "vue";
import Vuex from "vuex";
import { hotelMutations } from "./hotelMutations";

describe("Hotel store mutations", () => {
  Vue.use(Vuex);

  it("Test setHotelInfo Mutation", () => {
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

  it("Test setBookingRoom Mutation", () => {
    const room = {
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
    };
    const state = {
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
    };
    hotelMutations.setBookingRoom(state, room);
    expect(state.booking).toBeTruthy();
    expect(state.booking.roomName).toBe(room.name);
    expect(state.booking.roomId).toBe(room.id);
    expect(state.booking.roomType).toBe(room.typeOfRoom);
  });

  it("Test setBookingRoomLocalStorage Mutation", () => {
    const room = {
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
    };
    const state = {
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
    };
    hotelMutations.setBookingRoom(state, room);
    expect(state.booking).toBeTruthy();
    expect(state.booking.roomName).toBe(room.name);
    expect(state.booking.roomId).toBe(room.id);
    expect(state.booking.roomType).toBe(room.typeOfRoom);
  });

  it("Test setBookingInfo Mutation", () => {
    const booking = {
      roomId: 1,
      roomName: "test",
      roomType: "test",
      checkInDate: "",
      checkInTime: "15.00h",
      checkOutDate: "",
      checkOutTime: "12.00h",
      adultsOccupancy: 0,
      childrenOccupancy: 0,
      totalPrice: 0,
    };
    const state = {
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
    };
    hotelMutations.setBookingRoom(state, booking);
    expect(state.booking).toBeTruthy();
    expect(state.booking.roomName).toBe(booking.name);
    expect(state.booking.roomId).toBe(booking.id);
    expect(state.booking.roomType).toBe(booking.typeOfRoom);
  });
});
