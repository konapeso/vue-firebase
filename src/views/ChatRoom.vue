<template>
  <div class="chat-room">
    <header>
      <h1>{{ chat_name }}</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "chat-room",
  data() {
    return {
      chat_name: "Hello World!"
    };
  }
};
</script>

