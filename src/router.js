import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ChatRoom from "./views/ChatRoom.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chat-room/:id",
      name: "chat-room",
      component: ChatRoom
    }
  ]
});
