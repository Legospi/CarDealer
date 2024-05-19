import React, { useReducer, useEffect } from "react";
import FirebaseContext from "./firebaseContext";
import firebaseReducer from "./firebaseReducer";
import firebase from "../../firebase";

const FirebaseState = (props) => {
  // Crea el estado inicial
  const initialState = {
    menu: []
  };

  // UserReducer con el dispatch
  const [state, dispatch] = useReducer(firebaseReducer, initialState);


  return (
    <FirebaseContext.Provider 
      value={{ state, dispatch }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
