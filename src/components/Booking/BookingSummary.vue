<template>
  <v-col cols="5" lg="5" md="5" sm="12" xs="12">
    <v-card append class="v-card--small pa-4" exact outlined>
      <v-card-title class="mt-0 pt-2 mb-6 subheading-2">
        Reservation Summary
      </v-card-title>
      <v-card-subtitle class="title-1 pt-2 pb-4">
        Mini Dreamy Room
      </v-card-subtitle>
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="8" class="d-flex flex-column ma-0 pa-0">
            <v-row no-gutters>
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="6" md="6" xs="12">
                    <div>
                      <span class="subheading-3">Check in</span>
                      <v-spacer />
                      <span class="body">From</span>
                    </div>
                    <div class="pt-4">
                      <span class="subheading-3">Reservation Date</span>
                      <v-spacer />
                      <span class="body">From llalalala</span>
                    </div>
                    <div class="pt-4">
                      <span class="subheading-3">People</span>
                      <v-spacer />
                      <span class="body">Adults</span>
                    </div>
                  </v-col>
                  <v-col cols="6" md="6" xs="12">
                    <div>
                      <span class="subheading-3">Check out</span>
                      <v-spacer />
                      <span class="body">From</span>
                      <v-spacer />
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider class="mx-2" />
      <v-card-actions>
        <v-row no-gutters>
          <v-col cols="10" lg="10" md="10" sm="12">
            <div class="mt-0 pt-4 mb-6 subheading-2">
              <span>Total</span>
            </div>
          </v-col>
          <v-col cols="2" lg="2" md="2" sm="12">
            <div class="mt-0 pt-4 mb-6 subheading-2 float-right">
              <span>Total</span>
            </div>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "BookingSummary",
  computed: {
    ...mapState(["hotel", "booking"]),
    ...mapGetters({
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
    selectRoom(room) {
      console.log(room);
    },
  },
};
</script>
