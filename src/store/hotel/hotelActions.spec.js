import Vue from "vue";
import Vuex from "vuex";
import { hotelActions } from "./hotelActions";

describe("Hotel store actions", () => {
  Vue.use(Vuex);
  let store;
  let setDataMock;

  beforeEach(() => {
    setDataMock = jest.fn();
    store = new Vuex.Store({
      state: { data: {}, rooms: [] },
      actions: {
        LOAD_HOTEL: hotelActions.LOAD_HOTEL,
      },
    });
  });
  it("Tests using a mock mutation but real store", () => {
    store.hotUpdate({
      mutations: {
        setHotelInfo: setDataMock,
        refreshPageInfo: setDataMock,
      },
    });
    return store.dispatch("LOAD_HOTEL").then(() => {
      expect(setDataMock.mock.calls[0][1]).toBeTruthy();
      expect(setDataMock.mock.calls[0][1].rooms).toHaveLength(3);
    });
  });
});
