/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';

import {FirebaseContext} from './FirebaseContext';

export const NewOrderContext = createContext(null);

const NewOrderContextProvider = (props) => {
  const {getMenuItems} = useContext(FirebaseContext);

  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    const initialize = async () => {
      // get menu items
      const menuItems = await getMenuItems();
      setMenuItems(menuItems);
    };

    initialize();
  }, []);
  return (
    <NewOrderContext.Provider value={{
      menuItems,
      setMenuItems,
    }}>
      {props.children}
    </NewOrderContext.Provider>
  );
};

export default NewOrderContextProvider;

