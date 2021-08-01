import { appGetters } from "./appGetters";
import { appActions } from "./appActions";
import { appMutations } from "./appMutations";

export const app = {
  state: () => ({
    loading: {
      info: false,
    },
  }),
  actions: appActions,
  mutations: appMutations,
  getters: appGetters,
};
