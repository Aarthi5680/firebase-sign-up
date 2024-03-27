import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDprnCrW4FU0NE8ayqlR3ILqeHD7WgI828",
    authDomain: "web-123-445da.firebaseapp.com",
    projectId: "web-123-445da",
    storageBucket: "web-123-445da.appspot.com",
    messagingSenderId: "26067921498",
    appId: "1:26067921498:web:ed4bba35cc8fd98f20c663",
    databaseURL:'https://web-123-445da-default-rtdb.firebaseio.com',
  };

  export const app = initializeApp(firebaseConfig);