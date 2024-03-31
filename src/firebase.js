
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {

  apiKey: process.env.KEY,

  authDomain: "slow-3f674.firebaseapp.com",

  projectId: "slow-3f674",

  storageBucket: "slow-3f674.appspot.com",

  messagingSenderId: "913502615716",

  appId: "1:913502615716:web:5ff3e8e6ac1d89797ece31"

};




const app = initializeApp(firebaseConfig);
const database = getAuth(app);
const registerWithEmailAndPass = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(database, email, password);
    const user = res.user;
  } catch (err) {
    console.error(err);
  }
};
const db = getDatabase(app);
export { database, db, registerWithEmailAndPass };
