/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import {FirebaseContext} from './FirebaseContext';
import orderReducer from '../reducers/OrderReducer';

export const NewOrderContext = createContext(null);

const NewOrderContextProvider = (props) => {
  const {getMenuItems} = useContext(FirebaseContext);

  const [currentMenuType, setCurrentMenuType] = useState(0);
  const [menuItems, setMenuItems] = useState({});
  const [menuItemTypes, setMenuItemsTypes] = useState([]);
  const [order, orderDispatch] = useReducer(orderReducer, {total: '0.00', time: '', size: '', phoneNumber: ''});

  useEffect(() => {
    const initialize = async () => {
      // get menu items
      const menuItems = await getMenuItems();
      setMenuItems(menuItems);

      // get menu item types
      const {dishes} = menuItems;
      const dishKeys = Object.keys(dishes).map((key) => (key));
      setMenuItemsTypes(['combinations', 'dinners', ...dishKeys]);
    };

    initialize();
  }, []);
  return (
    <NewOrderContext.Provider value={{
      menuItemTypes,
      currentMenuType,
      setCurrentMenuType,
      order,
      orderDispatch,
      menuItems,
    }}>
      {props.children}
    </NewOrderContext.Provider>
  );
};

export default NewOrderContextProvider;

