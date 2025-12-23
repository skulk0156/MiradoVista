import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC3O95EJow30_DOq8ZJ0QV53kEnI2u4GKg",
  authDomain: "realtimevisitors-f43bd.firebaseapp.com",
  databaseURL: "https://realtimevisitors-f43bd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtimevisitors-f43bd",
  storageBucket: "realtimevisitors-f43bd.firebasestorage.app",
  messagingSenderId: "290426680446",
  appId: "1:290426680446:web:07127fbbde0fffd172d42f",
  measurementId: "G-DZR971S1PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };