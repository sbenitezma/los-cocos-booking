<style lang="scss" scoped>
.rooms-rates {
  font-family: "Dosis", sans-serif;
}
</style>
<template>
  <div class="booking-form">
    <BookingForm />
    <v-row class="mt-12 ml-10 pl-12 rooms-rates no-gutters">
      <v-col cols="12" md="6" xs="12" offset-md="1">
        <h2>Rooms & Rates</h2>
        <p class="mt-2 mb-0 pb-0 body">Plan your perfect stay at our hotel</p>
        <v-img
          class="pt-4 pb-2 ml-0 pl-0 mr-2 hide-mobile"
          contain
          max-width="350px"
          alt="BookingSteps"
          id="BookingSteps"
          :src="require('@/assets/images/booking/los-cocos-1.svg')"
        >
        </v-img>
      </v-col>
      <v-col cols="4" md="4" offset-md="1" class="hidden-sm-and-down">
        <v-img
          class="pt-12 mt-12 mx-12 pl-12 mb-0"
          max-width="200px"
          alt="HotelJar"
          id="HotelJar"
          :src="require('@/assets/images/los-cocos-img-bg.png')"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <HotelRooms />
      <BookingSummary />
    </v-row>
  </div>
</template>

<script>
import BookingForm from "../components/Booking/BookingForm";
import BookingSummary from "../components/Booking/BookingSummary";
import HotelRooms from "../components/HotelRooms/HotelRooms";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Rooms",
  components: { BookingForm, HotelRooms, BookingSummary },
  computed: {
    ...mapState(["hotel"]),
    ...mapGetters({
      hotelRooms: "getHotelRooms",
    }),
  },
};
</script>
