/* eslint-disable react/prop-types */
import React, {createContext, useState} from 'react';

import {FirebaseContext} from '../context/FirebaseContext';

const NewOrderContext = createContext(null);

const NewOrderContextProvider = (props) => {
  const {getMenuItems} = useContext(FirebaseContext);

  const [currentMenuType, setCurrentMenuType] = useState(0);
  const [order, setOrder] = useState({});
  const [menuItems, setMenuItems] = useState({});
  const [menuItemTypes, setMenuItemsTypes] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      const menuItems = await getMenuItems();
      setMenuItems(menuItems);

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
      setOrder,
      menuItems,
    }}>
      {props.children}
    </NewOrderContext.Provider>
  );
};

export default NewOrderContextProvider;

