import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9KS_C4ZzmWqoRgnYxKlBO0xyOe2avJfE",
  authDomain: "boctruct-otp.firebaseapp.com",
  projectId: "boctruct-otp",
  storageBucket: "boctruct-otp.appspot.com",
  messagingSenderId: "877262092082",
  appId: "1:877262092082:web:250982c366ccc4d949c92b"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export default app;
