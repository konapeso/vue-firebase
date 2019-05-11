<template>
  <div class="home">
    <h1>chatroom overview</h1>
    <label for>new chat room name</label>

    <input type="text" v-model="new_room_name">
    <button @click="createRoom">create new chatroom</button>

    <ul>
      <li v-for="(room,i) in rooms" :key="'room-id-'+i">
        <p>{{ room.name }}</p>
        <button @click="goToChatRoom(room)">join chat</button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "home",

  created() {
    firebase
      .firestore()
      .collection("rooms")
      .get()
      .then(ss => {
        const rooms = [];

        ss.docs.forEach(room => {
          rooms.push({ ...room.data(), id: room.id });
        });

        this.rooms = rooms;
      });
  },
  data() {
    return {
      rooms: [],
      new_room_name: ""
    };
  },

  methods: {
    goToChatRoom(room) {
      this.$router.push({ name: "chat-room", params: { id: room.id } });
    },
    createRoom() {
      if (!this.new_room_name) alert("type your name");

      firebase
        .firestore()
        .collection("rooms")
        .add({
          name: this.new_room_name
        })
        .then(ss => {
          this.$router.push({ name: "chat-room", params: { id: ss.id } });
        });
    }
  }
};
</script>


