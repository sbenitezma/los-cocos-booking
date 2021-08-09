<template>
  <v-col cols="12" md="6" xs="12" offset-sm="1" data-cy="hotel-rooms-list">
    <v-row
      v-for="room in hotelRooms"
      v-bind:key="room.name"
      :data-cy="`room-list-${room.name}`"
      no-gutters
    >
      <v-col cols="12" lg="12" md="12">
        <v-hover v-slot:default="{ hover }">
          <v-card
            append
            :elevation="hover || bookingInfo.roomName === room.name ? 3 : 0"
            :class="{
              'v-card--active': bookingInfo.roomName === room.name,
            }"
            class="v-card--small pt-4 pl-4 pr-0 pb-0 overflow-auto"
            data-cy="room-card"
            exact
            :max-height="250"
            :width="590"
            outlined
            @click="selectRoom(room)"
          >
            <v-row no-gutters>
              <v-col cols="12" sm="4" xs="12">
                <v-img
                  :aspect-ratio="4 / 3"
                  :alt="room.name"
                  data-cy="room-photo"
                  :height="200"
                  :width="230"
                  :src="getRoomPhoto(room.thumbnail)"
                />
              </v-col>
              <v-col cols="8" xs="8" class="d-flex flex-column ma-0 pa-0">
                <v-row no-gutters>
                  <v-col cols="12" xs="12">
                    <v-card-title
                      class="mt-0 pt-4 title-1"
                      data-cy="room-name-type"
                      v-if="room.name"
                      :data-tooltip="room.name"
                    >
                      {{ room.name }} {{ room.typeOfRoom }}
                    </v-card-title>
                    <v-card-subtitle
                      v-if="room.description"
                      class="pt-2 subheading"
                      data-cy="room-description"
                      :data-tooltip="room.description"
                    >
                      {{ room.description }}
                    </v-card-subtitle>
                    <v-card-text
                      v-if="room.floorSize"
                      data-cy="room-floor-size"
                      :data-tooltip="room.floorSize"
                    >
                      <p class="subheading mt-md-4 mt-sm-2">
                        Size: {{ room.floorSize }}
                      </p>
                      <p class="subheading">
                        <v-img
                          v-if="getRoomIcon()"
                          :alt="room.name"
                          class="mt-md-4 mt-sm-2 mb-1 ml-1"
                          contain
                          data-cy="double-room-icon"
                          :height="20"
                          :width="30"
                          :src="getRoomIcon()"
                        />
                        <v-icon v-else>mdi-bed-king-outline</v-icon>
                        <span data-cy="room-beds-number"
                          >Beds: {{ room.numberOfBeds }}</span
                        >
                        <span
                          class="ml-md-12 ml-sm-12"
                          data-cy="room-occupancy"
                        >
                          People: {{ room.occupancy }}
                        </span>
                        <span
                          class="float-right subheading-1"
                          data-cy="room-price"
                        >
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
import { mapGetters } from "vuex";
export default {
  name: "HotelRooms",
  computed: {
    ...mapGetters({
      hotelRooms: "getHotelRooms",
      bookingInfo: "getBookingInfo",
    }),
  },
  methods: {
    /**
     * Get double bed icon
     */
    getRoomIcon() {
      let roomIcon = require("@/assets/icons/hotel/double-bed.svg");
      if (roomIcon) {
        return roomIcon;
      } else {
        return false;
      }
    },
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
