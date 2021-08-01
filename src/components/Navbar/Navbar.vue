<template>
  <div>
    <ProgressCircular v-if="loading.info" :value="loading.info" />
    <v-toolbar
      v-else
      :class="{
        'justify-content': $vuetify.breakpoint.mdAndUp,
      }"
      data-cy="navbar"
      flat
      height="50"
      max-width="100%"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up mt-1"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-items
        v-for="(menu, index) in menuItems"
        class="hidden-md-and-down"
        :key="menu.name"
      >
        <v-img
          v-if="!menu.name"
          alt="LosCocosLogo"
          class="mr-10 ml-12 mt-1"
          contain
          id="LosCocosLogo"
          min-width="100px"
          :src="getLogo('los-cocos-logo.svg')"
        >
        </v-img>
        <v-btn
          v-else
          :class="[
            index === 0
              ? 'ml-12 pl-12'
              : index === menuItems.length - 1
              ? 'mr-12 pr-12'
              : '',
          ]"
          class="text-capitalize headline-1"
          text
          :to="menu.path"
          >{{ menu.name }}</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute>
      <v-list nav dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          link
        >
          <v-list-item-icon v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-img
            v-if="!item.name"
            alt="LosCocosLogo"
            contain
            id="LosCocosLogoMobile"
            min-width="50px"
            :src="getLogo('los-cocos-logo.svg')"
          >
          </v-img>
          <v-list-item-title v-if="item.name">{{
            item.name
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import ProgressCircular from "@/components/ProgressCircular/ProgressCircular";

export default {
  name: "Navbar",
  components: {
    ProgressCircular,
  },
  computed: {
    ...mapGetters({
      loading: "getLoading",
      menuItems: "getHeaderMenu",
    }),
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    /**
     * Get Custom icon by name
     * @param name
     * @returns {string|*}
     */
    getLogo(name) {
      let appIcon = require(`@/assets/images/logo/${name}`);
      if (appIcon) {
        return appIcon;
      } else {
        return `https://source.unsplash.com/collection/3727392/25x25?sig=${100}`;
      }
    },
  },
};
</script>
