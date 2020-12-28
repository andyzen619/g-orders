
import React, {useContext, useState, useEffect} from 'react';

import newOrderContext from '../../context/NewOrderContext';

const MenuItemSelection = () => {
  const {
    menuItems,
    currentMenuType,
    menuItemTypes,
  } = useContext(newOrderContext);

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
    <div className={`
        flex flex-col flex-1 h-64 overflow-y-auto
      `}>
      <div className='grid grid-cols-2'>
        {currentMenuItems && Object.entries(currentMenuItems)
            .map(([key, value]) =>
              // eslint-disable-next-line max-len
              <div key={key} className='flex justify-center m-4 p-4 bg-blue-300'>
                {`${value.name}`}
              </div>)}
      </div>
    </div>
  );
};

export default MenuItemSelection;
