import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWYiukEQcsSMvdpAsQ4GuZvdWqJuST2bI",
  authDomain: "atgg-f3e5c.firebaseapp.com",
  projectId: "atgg-f3e5c",
  storageBucket: "atgg-f3e5c.appspot.com",
  messagingSenderId: "698872047452",
  appId: "1:698872047452:web:667db7a911df01d0eb8399",
  measurementId: "G-6EXW660546",
};

const auth = getAuth(initializeApp(firebaseConfig));

export default auth;
