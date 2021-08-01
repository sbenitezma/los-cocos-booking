<template>
  <v-footer color="white" fixed padless height="50" data-cy="footer">
    <v-row>
      <v-col cols="12" md="8" lg="8" sm="12" xs="12" offset="2">
        <v-toolbar flat tile>
          <v-img
            class="pt-4 pb-2 ml-2 mr-2"
            contain
            max-width="25px"
            alt="LosCocosLogo"
            id="LosCocosLogoMobile"
            :src="require('@/assets/icons/footer/los-cocos-iso-footer.png')"
          >
          </v-img>
          <v-toolbar-items
            class="mb-2"
            v-for="item in footerMenu"
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
          <v-btn
            v-if="hotelData"
            class="ma-0 pa-0 mr-4 mb-2 footline-1"
            :href="`mailto:${hotelData.email}`"
            target="_blank"
            text
          >
            {{ hotelData.email }}
          </v-btn>
          <span v-if="hotelData" class="ma-0 pa-0 mb-2 mr-4 footline-2">
            Tlf: {{ hotelData.phone }}
          </span>
          <v-btn
            v-for="(icon, index) in socialMedia"
            :key="icon.name"
            :class="{ 'mr-0': index === 0 }"
            class="mr-2 mb-2 pr-0"
            icon
            small
            target="_blank"
            :to="icon.url"
          >
            <span :class="icon.name"></span>
          </v-btn>
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
};
</script>
