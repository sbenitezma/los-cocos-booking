<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col
          cols="12"
          md="8"
          lg="8"
          sm="12"
          xs="12"
          offset-md="2"
          offset-lg="2"
        >
          <Navbar />
          <v-container fluid class="pt-0 pb-12 mb-12">
            <v-row>
              <v-col cols="12" md="12" lg="12" sm="12" xs="12">
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
  mounted() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchHotelInfo();
  },
  methods: {
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
      if (localStorage.getItem("booking")) {
        await this.setBookingRoomInfo(
          JSON.parse(localStorage.getItem("booking"))
        );
      }
      await this.$store.dispatch("setLoading", {
        section: "info",
        value: false,
      });
    },
    /**
     * Set LocalStorage Data
     * @returns {Promise<void>}
     */
    async setBookingRoomInfo(booking) {
      await this.$store.dispatch("setBookingRoomLocalStorage", booking);
      await this.$store.dispatch("setBookingInfo", booking);
    },
  },
};
</script>
