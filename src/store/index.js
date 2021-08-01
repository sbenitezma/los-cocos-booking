import Vue from "vue";
import Vuex from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

Vue.use(Vuex);

export const state = {
  hotel: {
    data: {},
    rooms: [],
  },
  loading: {
    booking: true,
    info: true,
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
