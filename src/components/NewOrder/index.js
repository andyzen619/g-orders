import React, {useState} from 'react';

import MenuTypeSelection from '../MenuTypeSelection';
import MenuItemSelection from '../MenuItemSelection.js';

import NewOrderContext from '../../context/NewOrderContext';

const mockMenuItemTypes = [
  {name: 'Rice'},
  {name: 'Appetizers'},
  {name: 'Canadian'},
  {name: 'Cantonese'},
  {name: 'Chow Mein'},
  {name: 'Egg Foo Young'},
  {name: 'Soups'},
  {name: 'Sweet and Sour'},
  {name: 'Vegetables and Almonds'},
];

const NewOrder = () => {
  const [currentMenuType, setCurrentMenuType] = useState(0);

  return (
    <NewOrderContext.Provider value={{
      mockMenuItemTypes,
      currentMenuType,
      setCurrentMenuType,
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
