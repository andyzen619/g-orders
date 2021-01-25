/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {Link} from 'react-router-dom';

import NewOrderNavbarView from '../NewOrderNavbar';

import {flattenMenuItems} from '../../utils';
import moment from 'moment-timezone';
import {ORDER_ACTION_TYPES} from '../../constants';

const NewOrderV2View = ({states}) => {
  const {dispatch, greaterThanZero, menuItems, order, onSubmit, search} = states;
  return (
    <div className='flex flex-col h-screen'>
      <NewOrderNavbarView states={states}/>
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
                <button
                  data-testid={menuItem.name === '4 Combination Plate' && 'fourComboAddButton'}
                  className='bg-green-300 px-6 py-1 rounded-lg'
                  onClick={
                    () => dispatch({type: ORDER_ACTION_TYPES.ADD_ITEM, item: menuItem})}
                >+</button>
                <button
                  data-testid={menuItem.name === '4 Combination Plate' && 'fourComboRemoveButton'}
                  className='bg-red-300 px-6 py-1 rounded-lg'
                  onClick={
                    () => dispatch({type: ORDER_ACTION_TYPES.REMOVE_ITEM, itemToRemove: menuItem.name})
                  }
                >-</button>
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
            <div>Time: </div>
            <div className='text-lg font-light'>
              {moment(order.time).tz('America/Toronto').format('M/D/yyyy, h:mm a')}
            </div>
          </div>
          <div className='flex p-2'>
            <div>SubTotal: </div>
            <div
              data-testid='order-sub-total'
            >{order.total}</div>
          </div>
          <div className='flex p-2 text-4xl font-bold'>
            <div>Total: </div>
            <div
              data-testid='order-total'
            >{(Number(order.total) * 1.13).toFixed(2)}</div>
          </div>
        </div>
        <div className='flex flex-col justify-end my-auto mx-auto'>
          <Link
            to='/'
            onClick={onSubmit}
            className='bg-white text-gray-500 rounded-md text-xl p-8'> Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewOrderV2View;
