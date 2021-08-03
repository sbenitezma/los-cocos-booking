<template>
  <v-col cols="5" lg="5" md="5" sm="12" xs="12">
    <v-card append class="v-card--small pa-4" exact outlined>
      <v-card-title class="mt-0 pt-2 mb-6 subheading-2">
        Reservation Summary
      </v-card-title>
      <v-card-subtitle class="title-1 pt-2 pb-4">
        {{ bookingInfo.roomName }} {{ bookingInfo.roomType }}
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
                      <span class="body">
                        From {{ bookingInfo.checkInTime }}
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="6" md="6" xs="12">
                    <div>
                      <span class="subheading-3">Check out</span>
                      <v-spacer />
                      <span class="body">
                        To {{ bookingInfo.checkOutTime }}
                      </span>
                      <v-spacer />
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" md="12" xs="12" class="pt-4">
                    <span class="subheading-3">Reservation Date</span>
                    <v-spacer />
                    <span class="body">
                      From {{ parseDate(bookingInfo.checkInDate) }} to
                      {{ parseDate(bookingInfo.checkOutDate) }}
                    </span>
                    <div class="pt-4">
                      <span class="subheading-3">People</span>
                      <v-spacer />
                      <span class="body">
                        Adults: {{ bookingInfo.adultsOccupancy }}
                      </span>
                      <v-spacer />
                      <span class="body">
                        Children: {{ bookingInfo.childrenOccupancy }}
                      </span>
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
              <span>€{{ bookingInfo.totalPrice }}</span>
            </div>
          </v-col>
          <v-col cols="12" lg="12" md="12" class="text-center">
            <v-btn
              :disabled="getDisabledBooking"
              block
              class="px-12"
              color="primary"
              elevation="2"
              tile
              large
              @click="finishBooking()"
            >
              <span class="btn-text">Save</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { inputFormatDate } from "@/helpers/dateHelpers";

export default {
  name: "BookingSummary",
  computed: {
    ...mapState(["hotel", "booking"]),
    ...mapGetters({
      hotelRoom: "getRoomById",
      bookingInfo: "getBookingInfo",
    }),
    getDisabledBooking() {
      const room = this.hotelRoom(this.bookingInfo?.roomId);
      if (room) {
        if (
          room.occupancy >=
            this.bookingInfo.adultsOccupancy +
              this.bookingInfo.childrenOccupancy &&
          this.bookingInfo.adultsOccupancy > 0 &&
          this.bookingInfo.childrenOccupancy > 0
        )
          return false;
      }
      return true;
    },
  },
  methods: {
    /**
     * Finish booking action
     * @returns {string|*}
     */
    finishBooking() {
      console.log("finish booking");
    },
    /**
     * Parse date into input format dd/mm/YYYY
     * @param value
     * @returns {*}
     */
    parseDate(value) {
      return inputFormatDate(value);
    },
  },
};
</script>
