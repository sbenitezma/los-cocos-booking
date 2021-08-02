<style lang="scss" scoped>
.booking-section {
  background: rgba(32, 120, 207, 0.3);
  margin-top: 35px;
  left: 0;
  width: 100%;
  height: 80px;
}
.btn-text {
  text-transform: capitalize;
}
</style>
<template>
  <v-toolbar class="justify-content" flat height="115" max-width="100%">
    <v-img
      class="mt-6"
      contain
      max-width="103%"
      alt="LosCocosLogo"
      id="LosCocosLogoMobile"
      :src="require('@/assets/images/header/los-cocos-room-header-2-x.png')"
    >
      <v-toolbar-items class="booking-section">
        <v-row>
          <v-col cols="2" md="2" offset="2" class="mt-4 px-0 pl-4 mr-8">
            <Datepicker />
          </v-col>
          <v-col cols="2" md="2" class="mt-4 px-0 ml-n12 mr-n4">
            <Datepicker />
          </v-col>
          <v-col cols="2" md="2" class="mt-4 px-0 ml-n12 mr-2">
            <v-select
              :height="45"
              :items="occupancyAdults"
              class="shrink mx-8"
              dense
              item-text="text"
              item-value="val"
              label="Select"
              outlined
              persistent-hint
              return-object
              single-line
              solo
              v-model="selectAdults"
            ></v-select>
          </v-col>
          <v-col cols="2" md="2" class="mt-4 ml-n12 mr-n4">
            <v-select
              :height="45"
              :items="occupancyChildren"
              class="shrink mx-6"
              dense
              item-text="text"
              item-value="val"
              label="Select"
              outlined
              persistent-hint
              return-object
              single-line
              solo
              v-model="selectChildren"
            ></v-select>
          </v-col>
          <v-col cols="2" md="2" class="mt-4">
            <v-btn
              class="px-12"
              color="primary"
              elevation="2"
              tile
              large
              @click="setBooking()"
            >
              <span class="btn-text">Modify</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar-items>
    </v-img>
  </v-toolbar>
</template>
<script>
import Datepicker from "../Datepicker/Datepicker";

import { mapGetters, mapState } from "vuex";
export default {
  name: "BookingForm",
  components: { Datepicker },
  computed: {
    ...mapState(["hotel", "booking"]),
    ...mapGetters({
      bookingInfo: "getBookingInfo",
    }),
  },
  data: () => ({
    selectAdults: { text: "Adults: 1", val: 1 },
    selectChildren: { text: "Children: 1", val: 1 },
    occupancyAdults: [
      { text: "Adults: 1", val: 1 },
      { text: "Adults: 2", val: 2 },
      { text: "Adults: 3", val: 3 },
      { text: "Adults: 4", val: 4 },
    ],
    occupancyChildren: [
      { text: "Children: 1", val: 1 },
      { text: "Children: 2", val: 2 },
      { text: "Children: 3", val: 3 },
    ],
  }),
  methods: {
    /**
     * Get Custom icon by name
     * @param name
     * @returns {string|*}
     */
    getRoomPhoto(name) {
      let appIcon = require(`@/assets/images/hotel/${name}.png`);
      if (appIcon) {
        return appIcon;
      } else {
        return `https://source.unsplash.com/collection/3727392/25x25?sig=${100}`;
      }
    },
    selectRoom(room) {
      console.log(room);
    },
    setBooking() {
      console.log("booking");
    },
  },
};
</script>
