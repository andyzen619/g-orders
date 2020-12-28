/* eslint-disable react/prop-types */
import React, {createContext} from 'react';

import firebase from '../firebase';

export const FirebaseContext = createContext(null);

const FirebaseContextProvider = (props) => {
  return (
    <FirebaseContext.Provider value={firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;

