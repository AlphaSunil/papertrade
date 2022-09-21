import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "papertrade-cd90e.firebaseapp.com",
  projectId: "papertrade-cd90e",
  storageBucket: "papertrade-cd90e.appspot.com",
  messagingSenderId: "834299329307",
  appId: "1:834299329307:web:69c3d2cc34af2384c1f1be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
