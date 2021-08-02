<template>
  <v-col cols="6" lg="6" md="6" sm="12" xs="12" offset="1">
    <v-row no-gutters v-for="room in hotelRooms" v-bind:key="room.name">
      <v-col cols="12" lg="12" md="12">
        <v-hover v-slot:default="{ hover }">
          <v-card
            append
            :elevation="hover || bookingInfo.roomName === room.name ? 3 : 0"
            class="v-card--small pa-4 pr-0"
            exact
            :max-height="230"
            :max-width="590"
            outlined
            @click="selectRoom(room)"
          >
            <v-row no-gutters>
              <v-col cols="4">
                <v-img
                  :alt="room.name"
                  :height="190"
                  :width="230"
                  :src="getRoomPhoto(room.thumbnail)"
                />
              </v-col>
              <v-col cols="8" class="d-flex flex-column ma-0 pa-0">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-card-title
                      class="mt-0 pt-4 title-1"
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
                      <p class="subheading mt-5">Size: {{ room.floorSize }}</p>
                      <p class="subheading">
                        <v-img
                          :alt="room.name"
                          class="mt-5 mb-1 ml-1"
                          contain
                          :height="20"
                          :width="30"
                          :src="require('@/assets/icons/hotel/double-bed.svg')"
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
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "HotelRooms",
  computed: {
    ...mapState(["hotel", "booking"]),
    ...mapGetters({
      hotelRooms: "getHotelRooms",
      bookingInfo: "getBookingInfo",
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
    /**
     * Select room to book
     * @param room
     */
    selectRoom(room) {
      this.$store.dispatch("setLoading", {
        section: "info",
        value: true,
      });
      this.$store.dispatch("setBookingRoom", room);
      this.$store.dispatch("setLoading", {
        section: "info",
        value: false,
      });
    },
  },
};
</script>
