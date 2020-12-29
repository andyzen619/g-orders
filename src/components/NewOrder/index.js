import React from 'react';

import MenuTypeSelection from '../MenuTypeSelection';
import MenuItemSelection from '../MenuItemSelection.js';
import CurrentOrderButton from '../CurrentOrderButton';

import NewOrderContextProvider from '../../context/NewOrderContext';

const NewOrder = () => {
  return (
    <NewOrderContextProvider>
      <div className={`
      flex flex-col w-screen h-screen 
    `}>
        <MenuTypeSelection/>
        <MenuItemSelection/>
        <CurrentOrderButton/>
      </div>
    </NewOrderContextProvider>
  );
};

export default NewOrder;
