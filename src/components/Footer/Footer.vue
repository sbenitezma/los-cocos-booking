<template>
  <v-footer color="#EEEEEE" fixed padless height="50">
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
        <v-card flat tile>
          <v-img
            class="pt-4 pb-2 ml-4"
            contain
            max-width="30px"
            alt="LosCocosLogo"
            id="LosCocosLogoMobile"
            :src="require('@/assets/icons/footer/los-cocos-iso-footer.png')"
          >
          </v-img>
          <v-card-title>
            <strong class="subheading"
              >Get connected with us on social networks!</strong
            >

            <v-spacer></v-spacer>
            <span>{{ hotel.data.email }}</span>
            <span>{{ hotel.data.phone }}</span>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <!--      <v-card-text class="py-2 white&#45;&#45;text text-center">-->
          <!--        <strong>Vuetify</strong>-->
          <!--      </v-card-text>-->
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["hotel"]),
  },
  data: () => ({
    footerMenu: [
      { name: "Terms and Conditions", path: "/terms-and-conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "About us", path: "/about-us" },
      { name: "Partners", path: "/partners" },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
