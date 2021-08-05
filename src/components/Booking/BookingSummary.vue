<template>
  <v-col cols="5" lg="5" md="5" sm="12" xs="12">
    <v-card
      append
      class="v-card--small pa-4"
      data-cy="booking-summary"
      exact
      outlined
    >
      <v-card-title
        class="mt-0 pt-2 mb-6 subheading-2"
        data-cy="booking-summary-title"
      >
        Reservation Summary
      </v-card-title>
      <v-card-subtitle class="title-1 pt-2 pb-4" data-cy="booking-room">
        <span data-cy="booking-room-name"> {{ bookingInfo.roomName }} </span>
        <span data-cy="booking-room-type"> {{ bookingInfo.roomType }} </span>
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
                      <span class="body" data-cy="booking-summary-checkInTime">
                        From {{ bookingInfo.checkInTime }}
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="6" md="6" xs="12">
                    <div>
                      <span class="subheading-3">Check out</span>
                      <v-spacer />
                      <span class="body" data-cy="booking-summary-checkOutTime">
                        To {{ bookingInfo.checkOutTime }}
                      </span>
                      <v-spacer />
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col
                    cols="12"
                    md="12"
                    xs="12"
                    class="pt-4"
                    data-cy="booking-reservation-date"
                  >
                    <span class="subheading-3">Reservation Date</span>
                    <v-spacer />
                    <span class="body">
                      From
                      <span data-cy="booking-checkInDate">
                        {{ parseDate(bookingInfo.checkInDate) }}
                      </span>
                      to
                      <span data-cy="booking-checkOutDate">
                        {{ parseDate(bookingInfo.checkOutDate) }}</span
                      >
                    </span>
                    <div class="pt-4" data-cy="booking-occupancy">
                      <span class="subheading-3">People</span>
                      <v-spacer />
                      <span class="body" data-cy="booking-adultsOccupancy">
                        Adults: {{ bookingInfo.adultsOccupancy }}
                      </span>
                      <v-spacer />
                      <span class="body" data-cy="booking-childrenOccupancy">
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
          <v-col cols="12" lg="12" md="12" sm="12" class="pa-0 ma-0">
            <v-row no-gutters>
              <v-col cols="10" lg="10" md="10" sm="12">
                <div class="mt-0 pt-4 subheading-4" data-cy="booking-subtotal">
                  <span>Subtotal</span>
                </div>
              </v-col>
              <v-col cols="2" lg="2" md="2" sm="12">
                <div
                  class="mt-0 pt-4 subheading-4 float-right"
                  data-cy="booking-price"
                >
                  <span>€{{ bookingInfo.price }}</span>
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="10" lg="10" md="10" sm="12">
                <div class="mt-0 pt-4 subheading-3" data-cy="booking-discount">
                  <span>Discount</span>
                </div>
              </v-col>
              <v-col cols="2" lg="2" md="2" sm="12">
                <div
                  class="mt-0 pt-4 subheading float-right"
                  data-cy="booking-promoCode"
                >
                  <span>{{ bookingInfo.promoCode }}%</span>
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="10" lg="10" md="10" sm="12">
                <div
                  class="mt-0 pt-4 mb-6 subheading-2"
                  data-cy="booking-total"
                >
                  <span>Total</span>
                </div>
              </v-col>
              <v-col cols="2" lg="2" md="2" sm="12">
                <div
                  class="mt-0 pt-4 mb-6 subheading-2 float-right"
                  data-cy="booking-totalPrice"
                >
                  <span>€{{ bookingInfo.totalPrice }}</span>
                </div>
              </v-col>
              <v-col cols="12" lg="12" md="12" class="text-center">
                <v-btn
                  :disabled="getDisabledBooking"
                  block
                  class="px-12"
                  color="primary"
                  data-cy="booking-save"
                  elevation="2"
                  large
                  tile
                  @click="finishBooking()"
                >
                  <span class="btn-text">Save</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
import { mapGetters } from "vuex";
import { inputFormatDate } from "@/helpers/dateHelpers";

export default {
  name: "BookingSummary",
  computed: {
    ...mapGetters({
      hotelRoom: "getRoomById",
      bookingInfo: "getBookingInfo",
    }),
    /**
     * Get Button disabled according restrictions
     */
    getDisabledBooking() {
      const room = this.hotelRoom(this.bookingInfo.roomId);
      if (room) {
        if (
          room.occupancy >=
            this.bookingInfo.adultsOccupancy +
              this.bookingInfo.childrenOccupancy &&
          this.bookingInfo.adultsOccupancy > 0 &&
          this.bookingInfo.childrenOccupancy >= 0
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
      this.$store.dispatch("setBookingTotalPrice", this.getTotalPrice);
      localStorage.setItem("booking", JSON.stringify(this.bookingInfo));
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
