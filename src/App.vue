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
          <v-container fluid class="pa-0">
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
  },
};
</script>
