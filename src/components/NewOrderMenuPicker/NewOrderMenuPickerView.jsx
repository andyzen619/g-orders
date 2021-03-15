/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// stateless component
import React from 'react';

import {flattenMenuItems} from '../../utils';
import {ORDER_ACTION_TYPES} from '../../constants';

export default ({states, getMenuItems}) => {
  const {dispatch, search, greaterThanZero, order} = states;
  const {error, data: menuItems} = getMenuItems;
  if (error) console.log(error);

  return (
    <div className="overflow-y-auto h-full w-full">
      {flattenMenuItems(menuItems, search, greaterThanZero, order).map(
          (menuItem, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex flex-col m-2">
                <div>{menuItem.name}</div>
                <div>{menuItem.price}</div>
              </div>
              <div className="flex h-full">
                <div className="flex justify-between my-8 mx-2 w-2/3">
                  <button
                    className="bg-green-300 px-3 py-1 rounded-lg mx-2"
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
                    className="bg-red-300 px-3 py-1 rounded-lg mx-2"
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
