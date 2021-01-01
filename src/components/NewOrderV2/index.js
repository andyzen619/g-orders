/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
import React, {useContext, useState, useEffect, useReducer} from 'react';
import Fuse from 'fuse.js';
import {useParams} from 'react-router-dom';

import {NewOrderContext} from '../../context/NewOrderContext';
// import {calculateOrder, calculateSize} from '../../utils';
import orderReducer from '../../reducers/OrderReducer';
import {ORDER_ACTION_TYPES} from '../../constants';

const options = {
  keys: [
    'name',
  ],
};

/**
 * Flattens menu items and in an array.
 * @param {*} menuItems
 * @param {*} pattern
 * @param {*} greaterThanZero
 * @param {*} order
 */
export const flattenMenuItems = (menuItems, pattern, greaterThanZero, order) => {
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
  const {menuItems} = useContext(NewOrderContext);
  const [search, setSearch] = useState('');
  const [greaterThanZero, setGreaterThanZero] = useState(false);
  // const [order, setOrder] = useState({total: '0.00', time: '', size: '', phoneNumber: ''});
  const [order, orderDispatch] = useReducer(orderReducer, {total: '0.00', time: '', size: '', phoneNumber: ''});

  const {id} = useParams();

  useEffect(() => {
    if (!id) orderDispatch({type: ORDER_ACTION_TYPES.CLEAR_ORDER});
  }, []);

  // const clearOrder = () => {};
  // const addItem = () => {};
  // const removeItem = () => {};

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex justify-evenly bg-gray-500 p-4'>
        <div className='text-white text-lg font-bold'>Search: </div>
        <div className='mx-2'>
          <input onChange={(e) => setSearch(e.target.value)}/>
          <button
            className='p-1 bg-white mt-4 rounded-md text-2xl text-gray-500'
            onClick={() => setGreaterThanZero(!greaterThanZero)}
          >Current Order</button>
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
              <div className='flex justify-between my-8 mx-2 w-36'>
                <div
                  className='bg-green-300 px-6 py-1 rounded-lg'
                  onClick={
                    () => {
                      console.log('adding item');
                      orderDispatch({
                        type: ORDER_ACTION_TYPES.ADD_ITEM,
                        item: menuItem,
                      });
                    }}
                >+</div>
                <div
                  className='bg-red-300 px-6 py-1 rounded-lg'
                  onClick={
                    () => {
                      console.log('removing item');
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
      <div className='flex justify-between bg-gray-500 text-white font-bold text-lg'>
        <div className='flex flex-col'>
          <div className='flex p-2'>
            <div>SubTotal: </div>
            <div>{order.total}</div>
          </div>
          <div className='flex p-2 text-4xl font-bold'>
            <div>Total: </div>
            <div>{(Number(order.total) * 1.13).toFixed(2)}</div>
          </div>
        </div>
        <button
          onClick={() => {

          }}
          className='m-8 bg-white text-gray-500 rounded-md p-1 text-xl '> Submit</button>
      </div>
    </div>
  );
};

export default NewOrderV2;
