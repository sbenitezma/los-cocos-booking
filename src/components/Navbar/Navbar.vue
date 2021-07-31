<template>
  <div>
    <ProgressCircular v-if="loading.info" :value="loading.info" />
    <v-toolbar v-else color="#FFFFFF" flat height="50" max-width="100%">
      <v-app-bar-nav-icon
        class="hidden-md-and-up mt-1"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-items
        class="hidden-md-and-down"
        v-for="menu in menuItems"
        :key="menu"
      >
        <v-img
          contain
          class="mr-5 ml-10"
          v-if="!menu.name"
          min-width="100px"
          alt="LosCocosLogo"
          id="LosCocosLogo"
          :src="getIcon('los-cocos-logo.svg')"
        >
        </v-img>
        <v-btn text v-else class="text-capitalize headline-1">{{
          menu.name
        }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute>
      <v-list nav dense>
        <v-list-item
          color="#FFFFFF"
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          link
        >
          <v-list-item-icon v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-img
            contain
            v-if="!item.name"
            min-width="50px"
            alt="LosCocosLogo"
            id="LosCocosLogoMobile"
            :src="getIcon('los-cocos-logo.svg')"
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
import { mapState } from "vuex";

import ProgressCircular from "@/components/ProgressCircular/ProgressCircular";

export default {
  name: "Navbar",
  components: {
    ProgressCircular,
  },
  computed: {
    ...mapState(["loading", "currentUser"]),
  },
  data: () => ({
    drawer: false,
    group: null,
    menuItems: [
      { icon: "mdi-home", name: "Home", path: "/" },
      { icon: "mdi-bed-king-outline", name: "Rooms", path: "/rooms" },
      {
        icon: "mdi-silverware-fork-knife",
        name: "Restaurant",
        path: "/restaurant",
      },
      {
        icon: "los-cocos-logo.svg",
        name: false,
        path: "/#",
      },
      { icon: "mdi-party-popper", name: "Weedings", path: "/weedings" },
      { icon: "mdi-account-group", name: "Membership", path: "/membership" },
      { icon: "mdi-deskphone", name: "Contact", path: "/contact" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    /**
     * Get Custom icon by name
     * @param name
     * @returns {string|*}
     */
    getIcon(name) {
      let appIcon = require(`@/assets/icons/${name}`);
      if (appIcon) {
        return appIcon;
      } else {
        return `https://source.unsplash.com/collection/3727392/300x300?sig=${100}`;
      }
    },
    /**
     * Emit custom action to parent component (active/favourite)
     */
    setAction() {
      this.$emit("clickAction");
    },
  },
};
</script>
