/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// stateless component
import React from 'react';

import {flattenMenuItems} from '../../../utils';
import {ORDER_ACTION_TYPES} from '../../../constants';

export default ({states}) => {
  const {dispatch, search, greaterThanZero, menuItems, order} = states;
  return (
    <div className="overflow-y-auto h-full">
      {flattenMenuItems(menuItems, search, greaterThanZero, order).map(
          (menuItem, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex flex-col m-2">
                <div>{menuItem.name}</div>
                <div>{menuItem.price}</div>
              </div>
              <div className="flex">
                <div className="flex justify-between my-8 mx-2 w-36">
                  <button
                    data-testid={
                      menuItem.name === '4 Combination Plate' &&
                    'fourComboAddButton'
                    }
                    className="bg-green-300 px-6 py-1 rounded-lg"
                    onClick={() =>
                      dispatch({
                        type: ORDER_ACTION_TYPES.ADD_ITEM,
                        item: menuItem,
                      })
                    }
                  >
                  +
                  </button>
                  <button
                    data-testid={
                      menuItem.name === '4 Combination Plate' &&
                    'fourComboRemoveButton'
                    }
                    className="bg-red-300 px-6 py-1 rounded-lg"
                    onClick={() =>
                      dispatch({
                        type: ORDER_ACTION_TYPES.REMOVE_ITEM,
                        itemToRemove: menuItem.name,
                      })
                    }
                  >
                  -
                  </button>
                </div>
                <div className="my-8 mx-2">{menuItem.numberOfItems}</div>
              </div>
            </div>
          ),
      )}
    </div>
  );
};
