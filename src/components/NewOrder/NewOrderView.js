import React from 'react';

import MenuTypeSelection from '../MenuTypeSelection';
import MenuItemSelection from '../MenuItemSelection.js';
import CurrentOrderButton from '../CurrentOrderButton';

const NewOrderView = () => {
  return (
    <div className={`
      flex flex-col w-screen h-screen 
    `}>
      <MenuTypeSelection/>
      <MenuItemSelection/>
      <CurrentOrderButton/>
    </div>
  );
};

export default NewOrderView;
