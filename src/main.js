import firebase from "firebase";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";



const firebaseConfig = {
  apiKey: "AIzaSyA3zGHEQY9MBgwGw3CN5jYzRJofapffTPo",
  authDomain: "vf-sample.firebaseapp.com",
  databaseURL: "https://vf-sample.firebaseio.com",
  projectId: "vf-sample",
  storageBucket: "vf-sample.appspot.com",
  messagingSenderId: "1083235425086",
  appId: "1:1083235425086:web:31a68d504d746d61"
};


firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
