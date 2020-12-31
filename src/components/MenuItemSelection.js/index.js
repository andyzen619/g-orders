/* eslint-disable no-unused-vars */

import React, {useContext, useState, useEffect} from 'react';

import {NewOrderContext} from '../../context/NewOrderContext';
import MenuItemSelectionView from './MenuItemSelectionView';

const MenuItemSelection = () => {
  const {
    menuItems,
    currentMenuType,
    menuItemTypes,
    orderDispatch,
  } = useContext(NewOrderContext);

  const [currentMenuItems, setCurrentMenuItems] = useState([]);

  useEffect(() => {
    if (currentMenuType === 0) setCurrentMenuItems(menuItems.combinations);
    if (currentMenuType === 1) setCurrentMenuItems(menuItems.dinners);
    if ([2, 3, 4, 5, 6, 7, 8, 9, 10].includes(currentMenuType)) {
      setCurrentMenuItems(
          menuItems.
              dishes[`${menuItemTypes[currentMenuType]}`],
      );
    };
  }, [menuItems, currentMenuType]);


  return (
    <MenuItemSelectionView states={{orderDispatch, currentMenuItems}}/>
  );
};

export default MenuItemSelection;
