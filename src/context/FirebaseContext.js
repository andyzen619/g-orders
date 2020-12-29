/* eslint-disable react/prop-types */
import React, {createContext} from 'react';

import {firestore} from '../firebase';

export const FirebaseContext = createContext(null);

/**
 * Gets all menuItems from firestore.
 */
const getMenuItems = async () => {
  const snap = await firestore.collection('menu-items').get();
  const menuItems = snap.docs[0].data();
  return menuItems;
};

const FirebaseContextProvider = (props) => {
  return (
    <FirebaseContext.Provider value={{getMenuItems}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;

