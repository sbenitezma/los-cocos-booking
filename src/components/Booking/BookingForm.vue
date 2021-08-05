<style lang="scss" scoped>
.booking-section {
  background: rgba(32, 120, 207, 0.3);
  margin-top: 35px;
  left: 0;
  width: 100%;
  height: 80px;
}
.mobile-booking-section {
  background: rgba(32, 120, 207, 0.3);
  padding: 20px 0 0 20px;
  margin-top: 0;
  width: 100%;
  height: 230px;
}
.v-select {
  max-width: 130px;
}
</style>
<template>
  <div>
    <v-row no-gutters class="hidden-sm-and-up mobile-booking-section">
      <v-col cols="6" xs="6">
        <Datepicker
          data-cy="form-checkInDate"
          type="checkInDate"
          :value="checkInDate"
          @updateValue="updateValue"
        />
        <v-select
          class="body-2"
          data-cy="form-occupancyAdults"
          dense
          :height="45"
          :items="occupancyAdults"
          item-text="type"
          item-value="value"
          label="Select"
          outlined
          persistent-hint
          return-object
          single-line
          solo
          v-model="selectAdults"
        ></v-select>
      </v-col>
      <v-col cols="6" xs="6">
        <Datepicker
          data-cy="form-checkOutDate"
          :minDate="checkInDate"
          type="checkOutDate"
          :value="checkOutDate"
          @updateValue="updateValue"
        />
        <v-select
          class="body-2"
          data-cy="form-occupancyChildren"
          dense
          :height="45"
          :items="occupancyChildren"
          item-text="type"
          item-value="value"
          label="Select"
          outlined
          persistent-hint
          return-object
          single-line
          solo
          v-model="selectChildren"
        ></v-select>
      </v-col>
      <v-col cols="12" xs="7" offset="2" class="justify-center">
        <v-btn
          class="px-6 ml-12"
          color="primary"
          data-cy="form-booking-submit"
          elevation="2"
          tile
          large
          @click="setBooking()"
        >
          <span class="btn-text">Modify</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-toolbar
      class="justify-space-around hidden-xs-only"
      flat
      height="115"
      max-width="100%"
    >
      <v-img
        alt="LosCocosHeadForm"
        class="mt-6"
        contain
        id="LosCocosHeadForm"
        max-width="100%"
        :src="getHeaderImage()"
      >
        <v-toolbar-items
          class="booking-section justify-center mt-8"
          data-cy="booking-form"
        >
          <v-toolbar-title class="mt-4">
            <Datepicker
              class="px-5"
              data-cy="form-checkInDate"
              type="checkInDate"
              :value="checkInDate"
              @updateValue="updateValue"
            />
          </v-toolbar-title>
          <v-toolbar-title class="pl-2 mt-4">
            <Datepicker
              data-cy="form-checkOutDate"
              :minDate="checkInDate"
              type="checkOutDate"
              :value="checkOutDate"
              @updateValue="updateValue"
            />
          </v-toolbar-title>
          <v-toolbar-title class="pl-2 mt-4">
            <v-select
              class="body-2"
              data-cy="form-occupancyAdults"
              dense
              :height="45"
              :items="occupancyAdults"
              item-text="type"
              item-value="value"
              label="Select"
              outlined
              persistent-hint
              return-object
              single-line
              solo
              v-model="selectAdults"
            ></v-select>
          </v-toolbar-title>
          <v-toolbar-title class="px-2 mt-4">
            <v-select
              class="body-2"
              data-cy="form-occupancyChildren"
              dense
              :height="45"
              :items="occupancyChildren"
              item-text="type"
              item-value="value"
              label="Select"
              outlined
              persistent-hint
              return-object
              single-line
              solo
              v-model="selectChildren"
            ></v-select>
          </v-toolbar-title>
          <v-toolbar-title class="px-2 mt-4">
            <v-btn
              class="px-12"
              color="primary"
              data-cy="form-booking-submit"
              elevation="2"
              tile
              large
              @click="setBooking()"
            >
              <span class="btn-text">Modify</span>
            </v-btn>
          </v-toolbar-title>
        </v-toolbar-items>
      </v-img>
    </v-toolbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { formatDate } from "../../helpers/dateHelpers";

import Datepicker from "@/components/Datepicker/Datepicker";

export default {
  name: "BookingForm",
  components: { Datepicker },
  computed: {
    ...mapGetters({
      bookingInfo: "getBookingInfo",
    }),
  },
  data: () => ({
    checkInDate: "",
    checkOutDate: "",
    selectAdults: {},
    selectChildren: {},
    occupancyAdults: [
      { type: "Adults: 1", value: 1 },
      { type: "Adults: 2", value: 2 },
      { type: "Adults: 3", value: 3 },
      { type: "Adults: 4", value: 4 },
    ],
    occupancyChildren: [
      { type: "Children: 0", value: 0 },
      { type: "Children: 1", value: 1 },
      { type: "Children: 2", value: 2 },
      { type: "Children: 3", value: 3 },
    ],
  }),
  created() {
    this.selectAdults = this.occupancyAdults[0];
    this.selectChildren = this.occupancyChildren[0];
    let booking = JSON.parse(localStorage.getItem("booking"));
    if (booking) {
      this.updateValue({
        type: "checkInDate",
        value: booking.checkInDate,
      });
      this.updateValue({
        type: "checkOutDate",
        value: booking.checkOutDate,
      });
      this.updateValue({
        type: "selectAdults",
        value: booking.adultsOccupancy,
      });
      this.updateValue({
        type: "selectChildren",
        value: booking.childrenOccupancy,
      });
    } else {
      const today = new Date();
      let tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.updateValue({ type: "checkInDate", value: this.formatDate(today) });
      this.updateValue({
        type: "checkOutDate",
        value: this.formatDate(tomorrow),
      });
    }
  },
  methods: {
    /**
     * Get Booking form Header Image
     * @returns {string|*}
     */
    getHeaderImage() {
      const headerImage = require(`@/assets/images/header/los-cocos-room-header-2-x.png`);
      if (headerImage) {
        return headerImage;
      } else {
        return "https://source.unsplash.com/collection/3727392/1665x140?sig=200";
      }
    },
    /**
     * Set Booking information
     */
    setBooking() {
      this.$store.dispatch("setLoading", {
        section: "info",
        value: true,
      });
      this.$store.dispatch("setBookingInfo", {
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate,
        adultsOccupancy: this.selectAdults.value
          ? this.selectAdults.value
          : this.selectAdults,
        childrenOccupancy:
          this.selectChildren.value >= 0
            ? this.selectChildren.value
            : this.selectChildren,
      });
      this.$store.dispatch("setLoading", {
        section: "info",
        value: false,
      });
    },
    /**
     * Update date values
     * @param value
     */
    updateValue(value) {
      this[value?.type] = value?.value;
      if (value.type === "checkInDate" && this.checkOutDate.value !== "") {
        let checkIn = new Date(value.value);
        let checkOut = new Date(this.checkOutDate);
        // Validate if checkout is greater than checkIn to change it to checkout
        if (checkOut < checkIn) {
          this.checkOutDate = this.formatDate(new Date(this.checkInDate));
        }
      }
    },
    /**
     * Initial format date for Datepicker component
     */
    formatDate(value) {
      return formatDate(value);
    },
  },
};
</script>
