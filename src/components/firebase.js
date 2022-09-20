import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwK1GvIoYEP6oDxxU3WQmgUtxr5D7k7Ow",
  authDomain: "revision-aid-manager.firebaseapp.com",
  projectId: "revision-aid-manager",
  storageBucket: "revision-aid-manager.appspot.com",
  messagingSenderId: "35652685857",
  appId: "1:35652685857:web:ae61adf9a6cfe2aa0ad360",
  measurementId: "G-FQ8MZTR13H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;