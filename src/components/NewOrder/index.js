import React from 'react';

import MenuTypeSelection from '../MenuTypeSelection';
import MenuItemSelection from '../MenuItemSelection.js';

import NewOrderContextProvider from '../../context/NewOrderContext';

const NewOrder = () => {
  return (
    <NewOrderContextProvider>
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
    </NewOrderContextProvider>
  );
};

export default NewOrder;
