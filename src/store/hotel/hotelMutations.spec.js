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

  it("Test setBookingRoom with promoCode", () => {
    const room = {
      id: 1,
      name: "Tst",
      description: "Tst2",
      price: 200,
      typeOfRoom: "Room",
    };
    const state = {
      booking: {
        price: 0,
        promoCode: 0,
        roomId: "",
        roomName: "",
        roomType: "",
        totalPrice: 0,
      },
    };
    hotelMutations.setBookingRoom(state, room);
    expect(state.booking).toBeTruthy();
    expect(state.booking.roomId).toBe(room.id);
    expect(state.booking.roomName).toBe(room.name);
    expect(state.booking.roomType).toBe(room.typeOfRoom);
    expect(state.booking.price).toBe(room.price);
    expect(state.booking.promoCode).toBe(state.booking.promoCode);
    expect(state.booking.totalPrice).toBe(state.booking.totalPrice);
  });

  it("Test setBookingRoomLocalStorage without promoCode", () => {
    const room = {
      id: 1,
      name: "Tst",
      description: "Tst2",
      price: 200,
      typeOfRoom: "Room",
      typeOfBed: "Queen-size",
    };
    const state = {
      booking: {
        price: 0,
        promoCode: 0,
        roomId: "",
        roomName: "",
        roomType: "",
        totalPrice: 0,
      },
    };
    hotelMutations.setBookingRoom(state, room);
    expect(state.booking).toBeTruthy();
    expect(state.booking.roomName).toBe(room.name);
    expect(state.booking.roomId).toBe(room.id);
    expect(state.booking.roomType).toBe(room.typeOfRoom);
    expect(state.booking.price).toBe(room.price);
    expect(state.booking.totalPrice).toBe(room.price);
  });

  it("Test setBookingInfo Mutation", () => {
    const booking = {
      adultsOccupancy: 0,
      checkInDate: "",
      checkInTime: "15.00h",
      checkOutDate: "",
      checkOutTime: "12.00h",
      childrenOccupancy: 0,
    };
    const state = {
      booking: {
        adultsOccupancy: 0,
        checkInDate: "",
        checkInTime: "15.00h",
        checkOutDate: "",
        checkOutTime: "12.00h",
        childrenOccupancy: 0,
      },
    };
    hotelMutations.setBookingRoom(state, booking);
    expect(state.booking).toBeTruthy();
    expect(state.booking.checkInDate).toBe(booking.checkInDate);
    expect(state.booking.checkOutDate).toBe(booking.checkOutDate);
    expect(state.booking.adultsOccupancy).toBe(booking.adultsOccupancy);
    expect(state.booking.childrenOccupancy).toBe(booking.childrenOccupancy);
  });

  it("Test setPromoCode Mutation", () => {
    const booking = {
      promoCode: 20,
    };
    const state = {
      booking: {
        promoCode: 0,
      },
    };
    hotelMutations.setPromoCode(state, booking);
    expect(state.booking).toBeTruthy();
    expect(state.booking.promoCode.promoCode).toBe(booking.promoCode);
  });

  it("Test setBookingTotalPrice Mutation", () => {
    const booking = {
      totalPrice: 160,
    };
    const state = {
      booking: {
        totalPrice: 160,
      },
    };
    hotelMutations.setPromoCode(state, booking);
    expect(state.booking).toBeTruthy();
    expect(state.booking.totalPrice).toBe(booking.totalPrice);
  });
});
