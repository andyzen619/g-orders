/* eslint-disable react/prop-types */
import React, {createContext} from 'react';

import {firestore, auth} from '../firebase';

export const FirebaseContext = createContext(null);

const mockCombinations = {
  4: {
    description: 'Beef mixed vegetables, chicken fried rice, egg roll',
    name: '4 Combination Plate',
    price: '$8.95',
  },
};

const {
  REACT_APP_EMAIL,
  REACT_APP_PASSWORD,
  NODE_ENV,
} = process.env;

/**
 * Gets all menuItems from firestore.
 */
const getMenuItems = async () => {
  // for testing
  if (NODE_ENV === 'test') {
    return {combinations: mockCombinations, dishes: {}, dinners: {}};
  }

  const snap = await firestore.collection('menu-items').get();
  const menuItems = snap.docs[0].data();
  return menuItems;
};

const setOrder = async (order) => {
  try {
    await auth.signInWithEmailAndPassword(REACT_APP_EMAIL, REACT_APP_PASSWORD);
    const {id} = order;
    await firestore.collection('orders').doc(id).set(order);
  } catch (error) {
    console.error(error);
  }
};

const removeOrder = async (id) => {
  try {
    await auth.signInWithEmailAndPassword(REACT_APP_EMAIL, REACT_APP_PASSWORD);

    await firestore.collection('orders').doc(id).delete();
  } catch (error) {
    console.error(error);
  }
};

const getOrders = async () => {
  try {
    await auth.signInWithEmailAndPassword(REACT_APP_EMAIL, REACT_APP_PASSWORD);
    const snap = await firestore.collection('orders').get();
    const orders = snap.docs.map((doc) => doc.data());
    return orders;
  } catch (error) {
    console.error(error);
  }
};

const FirebaseContextProvider = (props) => {
  return (
    <FirebaseContext.Provider value={{
      getMenuItems, setOrder, getOrders, removeOrder,
    }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;

