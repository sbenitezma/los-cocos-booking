import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Rooms from "@/views/Rooms.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/rooms",
    component: Home,
  },
  {
    path: "/rooms/:promo_code?",
    name: "Rooms",
    component: Rooms,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
