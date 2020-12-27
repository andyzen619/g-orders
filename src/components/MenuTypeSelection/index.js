import React, {useContext} from 'react';

import MenuTypeSelectionView from './MenuTypeSelectionView';

import NewOrderContext from '../../context/NewOrderContext';


const MenuTypeSelection = () => {
  const {mockMenuItemTypes,
    currentMenuType,
    setCurrentMenuType,
  } = useContext(NewOrderContext);

  const onMenuTypeChange = (k) => {
    setCurrentMenuType(k);
  };

  return (
    <MenuTypeSelectionView
      menuItemTypes={mockMenuItemTypes}
      currentMenuType={currentMenuType}
      onMenuTypeChange={onMenuTypeChange}
    />
  );
};
export default MenuTypeSelection;
