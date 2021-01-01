import React, {useContext, useState} from 'react';
import Fuse from 'fuse.js';

import {NewOrderContext} from '../../context/NewOrderContext';
import {ORDER_ACTION_TYPES} from '../../constants';

const options = {
  keys: [
    'name',
  ],
};

const flattenMenuItems = (menuItems, pattern, greaterThanZero, order) => {
  if (!menuItems) return [];
  if (!order) return [];

  const combinations = Object.values(menuItems.combinations);
  const dinners = Object.values(menuItems.dinners);
  const dishes = [];

  Object.values(menuItems.dishes).forEach((dishCategory) => {
    Object.values(dishCategory).forEach((dish) => {
      dishes.push(dish);
    });
  });
  const flattenedMenuItems = [...combinations, ...dinners, ...dishes];

  const fuse = new Fuse(
      flattenedMenuItems.map((menuItem) => ({
        ...menuItem,
        numberOfItems: order[menuItem.name]?
          order[menuItem.name].numberOfItems :
          '0'})),
      options);
  const result = fuse.search(pattern || ' ');

  if (greaterThanZero) {
    return result.filter(({item}) => item.numberOfItems > 0 )
        .map(({item}) => item);
  }
  return result.map(({item}) => item);
};

const NewOrderV2 = () => {
  const {menuItems, order, orderDispatch} = useContext(NewOrderContext);
  const [search, setSearch] = useState('');
  const [greaterThanZero, setGreaterThanZero] = useState(false);

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex justify-evenly bg-gray-300 p-4'>
        <div>Search: </div>
        <div>
          <input onChange={(e) => setSearch(e.target.value)}/>
          <button
            className='p-1 bg-gray-500 text-white'
            onClick={() => setGreaterThanZero(!greaterThanZero)}
          >Order</button>
        </div>
      </div>
      <div className='overflow-y-auto h-full'>
        {flattenMenuItems(
            menuItems, search, greaterThanZero, order,
        ).map((menuItem, index) => (
          <div key={index} className='flex justify-between'>
            <div className='flex flex-col m-2'>
              <div>{menuItem.name}</div>
              <div>{menuItem.price}</div>
            </div>
            <div className='flex'>
              <div className='flex justify-between my-8 mx-2 w-8'>
                <div
                  onClick={
                    () => {
                      orderDispatch({
                        type: ORDER_ACTION_TYPES.ADD_ITEM,
                        item: menuItem,
                      });
                    }}
                >+</div>
                <div
                  onClick={
                    () => {
                      orderDispatch({
                        type: ORDER_ACTION_TYPES.REMOVE_ITEM,
                        toRemove: menuItem.name,
                      });
                    }
                  }
                >-</div>
              </div>
              <div className='my-8 mx-2'>
                {menuItem.numberOfItems}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex'>
        <div>SubTotal: </div>
        <div>{order.total}</div>
      </div>
      <div className='flex'>
        <div>Total: </div>
        <div>{Number(order.total) * 1.13}</div>
      </div>
    </div>
  );
};

export default NewOrderV2;
