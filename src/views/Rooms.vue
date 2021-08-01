<style lang="scss" scoped>
.booking-section {
  background: rgba(32, 120, 207, 0.3);
  margin-top: 35px;
  left: 0;
  width: 100%;
  height: 70px;
}
</style>
<template>
  <div class="booking-form">
    <v-toolbar class="justify-content" flat height="115" max-width="100%">
      <v-img
        color="black"
        class="mt-6"
        contain
        max-width="103%"
        alt="LosCocosLogo"
        id="LosCocosLogoMobile"
        :src="require('@/assets/images/header/los-cocos-room-header-2-x.png')"
      >
        <v-toolbar-items class="booking-section">
          <v-row>
            <v-col cols="2" md="2" offset="2" class="mt-4">
              <Datepicker />
            </v-col>
            <v-col cols="2" md="2" class="mt-4">
              <Datepicker />
            </v-col>
          </v-row>
        </v-toolbar-items>
      </v-img>
    </v-toolbar>
    <v-row class="mt-12 ml-6">
      <v-col cols="6" lg="6" md="6" offset="1">
        <h2>Rooms & Rates</h2>
        <p>Plan your perfect stay at our hotel</p>
        <v-img
          class="pt-4 pb-2 ml-2 mr-2"
          contain
          max-width="400px"
          alt="BookingSteps"
          id="BookingSteps"
          :src="require('@/assets/images/los-cocos-1.png')"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" lg="6" md="6">
        <v-card>
          <v-card-title>room1</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Datepicker from "../components/Datepicker/Datepicker";
export default {
  name: "Rooms",
  components: { Datepicker },
};
</script>
