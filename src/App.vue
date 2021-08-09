<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="12" md="8" xs="12" offset-md="2">
          <Navbar />
          <v-container data-cy="container" fluid class="pt-0 pb-12 mb-12">
            <v-row>
              <v-col cols="12" xs="12">
                <router-view :key="$route.path"></router-view>
              </v-col>
            </v-row>
          </v-container>
          <Footer />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    discount: false,
  }),
  mounted() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchHotelInfo();
    this.checkLocalStorage();
  },
  methods: {
    /**
     * Validate LocalStorage Data
     */
    checkLocalStorage() {
      let promoCode = this.$route.query.promo_code;
      if (localStorage.getItem("booking")) {
        let bookingData = JSON.parse(localStorage.getItem("booking"));
        if (promoCode) {
          bookingData.promoCode = promoCode;
        } else {
          promoCode = 0;
          bookingData.promoCode = promoCode;
        }
        if (bookingData) {
          let discount = bookingData.promoCode / 100;
          bookingData.totalPrice =
            bookingData.price - bookingData.price * discount;
        }
        this.setBookingRoomInfo(bookingData);
      } else {
        if (promoCode) {
          this.$store.dispatch("setPromoCode", promoCode);
        }
      }
    },
    /**
     * Set Hotel info from JSON
     * @returns {Promise<void>}
     */
    async fetchHotelInfo() {
      await this.$store.dispatch("setLoading", {
        section: "info",
        value: true,
      });
      await this.$store.dispatch("LOAD_HOTEL");
      await this.$store.dispatch("setLoading", {
        section: "info",
        value: false,
      });
    },
    /**
     * Set LocalStorage Data
     * @returns {Promise<void>}
     */
    setBookingRoomInfo(booking) {
      this.$store.dispatch("setBookingRoomLocalStorage", booking);
      this.$store.dispatch("setBookingInfo", booking);
    },
  },
};
</script>
