/* eslint-disable react/prop-types */
import React from 'react';

import {ORDER_ACTION_TYPES} from '../../constants';

const MenuItemSelectionView = ({states}) => {
  const {
    currentMenuItems,
    orderDispatch,
  } = states;

  return (
    <div className={`
        flex flex-col flex-1 h-64 overflow-y-auto
      `}>
      <div className='grid grid-cols-2'>
        {currentMenuItems && Object.entries(currentMenuItems)
            .map(([key, value]) =>
              <div
                key={key}
                className='flex justify-center m-4 p-4 bg-blue-300'
                onClick={() => {
                  orderDispatch({
                    type: ORDER_ACTION_TYPES.ADD_ITEM,
                    item: value,
                  });
                }}
              >
                {`${value.name}`}
              </div>)
        }
      </div>
    </div>
  );
};

export default MenuItemSelectionView;
