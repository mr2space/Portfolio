import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgulbM19HPQbWxTRMy6RpYVnuoW6Cj0YY",
    authDomain: "chat-a4efc.firebaseapp.com",
    projectId: "chat-a4efc",
    storageBucket: "chat-a4efc.appspot.com",
    messagingSenderId: "726801938745",
    appId: "1:726801938745:web:e32750641d0747658750e8"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const feedbackForm = async (name, email, feedback)=>{
    try {
        const docRef = await addDoc(collection(db, "user_feedback"), {
          name,
          email,
          message:feedback
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
      } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}

export default feedbackForm;
