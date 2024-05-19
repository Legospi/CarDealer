
import { createContext } from "react";
import firebase from "firebase/app";
import "firebase/firestore"; // Si usas Firestore
import "firebase/auth"; // Si usas Autenticación

const FirebaseContext = createContext();

export default FirebaseContext;
