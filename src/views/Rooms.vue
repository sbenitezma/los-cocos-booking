<style lang="scss" scoped>
.booking-section {
  background: rgba(32, 120, 207, 0.3);
  margin-top: 35px;
  left: 0;
  width: 100%;
  height: 70px;
}
.rooms-rates {
  font-family: "Dosis", sans-serif;
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
    <v-row class="mt-12 ml-10 pl-12 rooms-rates no-gutters">
      <v-col cols="6" lg="6" md="6" sm="12" xs="12" offset="1">
        <h2>Rooms & Rates</h2>
        <p class="mt-2 mb-0 pb-0 body">Plan your perfect stay at our hotel</p>
        <v-img
          class="pt-4 pb-2 ml-0 pl-0 mr-2"
          contain
          max-width="350px"
          alt="BookingSteps"
          id="BookingSteps"
          :src="require('@/assets/images/booking/los-cocos-1.svg')"
        >
        </v-img>
      </v-col>
      <v-col cols="4" lg="4" md="4" sm="12" xs="12" class="ml-12">
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
      <v-col cols="6" lg="6" md="6" sm="12" xs="12" offset="1">
        <v-row no-gutters v-for="room in hotelRooms" v-bind:key="room">
          <v-col cols="12" lg="12" md="12">
            <v-hover v-slot:default="{ hover }">
              <v-card
                append
                :elevation="hover ? 1 : 0"
                class="v-card--small pa-4 pr-0"
                exact
                :max-height="215"
                :max-width="590"
                outlined
              >
                <v-row no-gutters>
                  <v-col cols="4">
                    <v-img
                      :alt="room.name"
                      :height="175"
                      :width="230"
                      :src="getRoomPhoto(room.thumbnail)"
                      :type="type"
                    />
                  </v-col>
                  <v-col cols="8" class="d-flex flex-column ma-0 pa-0">
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-card-title
                          class="mt-0 pt-2 title-1"
                          v-if="room.name"
                          :data-tooltip="room.name"
                        >
                          {{ room.name }} {{ room.typeOfRoom }}
                        </v-card-title>
                        <v-card-subtitle
                          v-if="room.description"
                          class="subheading pt-2"
                          :data-tooltip="room.description"
                        >
                          {{ room.description }}
                        </v-card-subtitle>
                        <v-card-text
                          v-if="room.floorSize"
                          :data-tooltip="room.floorSize"
                        >
                          <p class="subheading mt-5">
                            Size: {{ room.floorSize }}
                          </p>
                          <p class="subheading">
                            <v-img
                              :alt="room.name"
                              class="mt-5 mb-1 ml-1"
                              contain
                              :height="20"
                              :width="30"
                              :src="
                                require('@/assets/icons/hotel/double-bed.svg')
                              "
                              :type="type"
                            />
                            <span>Beds: {{ room.numberOfBeds }}</span>
                            <span class="ml-12">
                              People: {{ room.occupancy }}
                            </span>
                            <span class="float-right subheading-1">
                              €{{ room.price }}
                            </span>
                          </p>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5" lg="5" md="5" sm="12" xs="12">
        <v-card
          append
          class="v-card--small pa-4 pr-0"
          exact
          :max-height="215"
          :max-width="590"
          outlined
        >
          <v-row no-gutters>
            <v-col cols="8" class="d-flex flex-column ma-0 pa-0">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-card-title class="mt-0 pt-2 title-1">
                    Reservation Summary
                  </v-card-title>
                  <v-card-subtitle class="subheading pt-2">
                    Mini Dreamy Room
                  </v-card-subtitle>
                  <v-card-text>
                    <p class="subheading mt-5">Check In</p>
                    <p class="subheading">
                      <span>Check Out</span>
                    </p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Datepicker from "../components/Datepicker/Datepicker";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Rooms",
  components: { Datepicker },
  computed: {
    ...mapState(["hotel"]),
    ...mapGetters({
      hotelRooms: "getHotelRooms",
    }),
  },
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
  },
};
</script>
