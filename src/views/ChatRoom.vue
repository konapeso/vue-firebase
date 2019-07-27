<template>
  <div class="chat-room">
    <header>
      <h1>{{ chat_name }}</h1>
    </header>

    <ul>
      <li v-for="(comment,i) in comments" :key="'comment-id-'+i">
        <p>{{ comment.message }}</p>
      </li>
    </ul>

    <form @submit="sendMessage">
      <input type="text" v-model="chat_value">
      <button type="submit">send</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "chat-room",

  created() {
    const roomRef = firebase
      .firestore()
      .collection("rooms")
      .doc(this.$route.params.id);

    roomRef.collection("comments").onSnapshot(ss => {
      const comments = [];

      ss.docs.forEach(comment => {
        comments.push(comment.data());
      });
      this.comments = comments;
    });
  },

  data() {
    return {
      chat_name: "Hello World!",
      chat_value: "",
      comments: []
    };
  },
  methods: {
    sendMessage(event) {
      event.preventDefault();

      const roomRef = firebase
        .firestore()
        .collection("rooms")
        .doc(this.$route.params.id);

      roomRef
        .collection("comments")
        .add({
          message: this.chat_value
        })
        .then(() => {
          this.chat_value = "";
        });
    }
  }
};
</script>

