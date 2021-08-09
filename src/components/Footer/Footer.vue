<template>
  <v-footer
    class="hidden-sm-and-down"
    color="white"
    data-cy="footer"
    fixed
    height="50"
    padless
  >
    <v-row>
      <v-col cols="12" md="8" offset="2">
        <v-toolbar flat tile>
          <v-img
            v-if="getCocosLogo"
            alt="LosCocosLogo"
            class="pt-4 pb-2 ml-2 mr-2"
            contain
            data-cy="los-cocos-footer-logo"
            id="LosCocosLogoMobile"
            max-width="25px"
            :src="getCocosLogo()"
          >
          </v-img>
          <v-toolbar-items
            v-for="item in footerMenu"
            class="mb-2"
            :data-cy="`footer-nav-list-${item.name}`"
            :key="item.path"
          >
            <v-btn
              v-if="item.name"
              class="text-capitalize headline-1"
              text
              :to="item.path"
            >
              {{ item.name }}
            </v-btn>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              v-if="hotelData"
              class="ma-0 pa-0 mr-4 mb-2 footline-1"
              data-cy="footer-nav-hotel-email"
              :href="`mailto:${hotelData.email}`"
              target="_blank"
              text
            >
              {{ hotelData.email }}
            </v-btn>
            <span
              v-if="hotelData"
              class="ma-0 pa-0 mb-2 mr-4 mt-6 footline-2"
              data-cy="footer-nav-hotel-phone"
            >
              Tlf: {{ hotelData.phone }}
            </span>
            <v-btn
              v-for="(icon, index) in socialMedia"
              :key="icon.name"
              :class="{ 'mr-0': index === 0 }"
              class="mr-2 mb-2 pr-0"
              :data-cy="`social-nav-list-${icon.name}`"
              icon
              small
              target="_blank"
              :to="icon.path"
            >
              <span :class="icon.name"></span>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["hotel"]),
    ...mapGetters({
      hotelData: "getHotelData",
      footerMenu: "getFooterMenu",
      socialMedia: "getSocialMedia",
    }),
  },
  methods: {
    /**
     * Get footer logo
     */
    getCocosLogo() {
      let cocosLogo = require("@/assets/icons/footer/los-cocos-iso-footer.png");
      if (cocosLogo) {
        return cocosLogo;
      } else {
        return false;
      }
    },
  },
};
</script>
