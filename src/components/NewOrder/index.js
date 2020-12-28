import React, {useState, useEffect, useContext} from 'react';

import MenuTypeSelection from '../MenuTypeSelection';
import MenuItemSelection from '../MenuItemSelection.js';

import FirebaseContext from '../../context/FirebaseContext';
import NewOrderContext from '../../context/NewOrderContext';

const NewOrder = () => {
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
      <div className={`
      flex flex-col w-screen h-screen 
    `}>
        <MenuTypeSelection/>
        <MenuItemSelection/>
        <div
          className={`
        flex justify-center bg-gray-600 
        p-2 rounded-t-full mx-auto
        text-white font-extrabold w-11/12 
      `}
        >
        Current Order
        </div>
      </div>
    </NewOrderContext.Provider>
  );
};

export default NewOrder;
