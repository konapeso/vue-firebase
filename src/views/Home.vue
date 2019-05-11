<template>
  <div class="home">
    <h1>chatroom overview</h1>
    <button>create new chatroom</button>

    <ul>
      <li v-for="(room,i) in rooms" :key="'room-id-'+i">
        <p>{{ room.name }}</p>
        <button>join chat</button>
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
          rooms.push(room.data());
        });

        this.rooms = rooms;
      });
  },
  data() {
    return {
      rooms: []
    };
  }
};
</script>


