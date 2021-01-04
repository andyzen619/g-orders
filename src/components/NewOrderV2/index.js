/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
import React, {useContext, useState, useEffect, useReducer} from 'react';
import {useParams, Link} from 'react-router-dom';
import moment from 'moment-timezone';
import {v4 as uuidv4} from 'uuid';

import {NewOrderContext} from '../../context/NewOrderContext';
import {FirebaseContext} from '../../context/FirebaseContext';
import {flattenMenuItems} from '../../utils';
import {HomeContext} from '../../context/HomeContext';
import orderReducer from '../../reducers/OrderReducer';
import {ORDER_ACTION_TYPES} from '../../constants';


const NewOrderV2 = () => {
  const {menuItems} = useContext(NewOrderContext);
  const {ordersOfTheDay, startDate} = useContext(HomeContext);
  const {setOrder: firestoreSetOrders} = useContext(FirebaseContext);

  const [search, setSearch] = useState('');
  const [greaterThanZero, setGreaterThanZero] = useState(false);
  const [order, dispatch] = useReducer(orderReducer, ({total: '0.00', time: '', size: '', phoneNumber: ''}));

  const {id} = useParams();

  const onSubmit = async () => {
    await firestoreSetOrders({...order, id: uuidv4()});
    window.alert('Order Added');
    return;
  };

  useEffect(() => {
    if (!id) {
      dispatch({type: ORDER_ACTION_TYPES.CLEAR_ORDER});
      return;
    }

    const currentOrder = ordersOfTheDay.find(({id: currentOrderId}) => currentOrderId === id );
    if (!currentOrder) {
      console.error(`Order ${id} not found`);
      clearOrder();
      return;
    }

    dispatch({type: ORDER_ACTION_TYPES.SET_ORDER, currentOrder});
    return;
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex justify-evenly bg-gray-500 p-4'>
        <div>
          <div className='text-white'>Time: </div>
          <div className=''>
            <input
              data-testid='order-time-input'
              onChange={(e) => dispatch({type: ORDER_ACTION_TYPES.UPDATE_TIME, time: e.target.value})}/>
          </div>
          <div className='text-white'>Phone Number: </div>
          <div className=''>
            <input
              data-testid='order-phone-input'
              onChange={(e) => dispatch({type: ORDER_ACTION_TYPES.UPDATE_PHONE_NUMBER, time: e.target.value})}/>
          </div>
          <div className='text-white'>Search: </div>
          <div className=''>
            <input
              data-testid='order-search-input'
              onChange={(e) => setSearch(e.target.value)}/>
          </div>
        </div>
        <div className='flex flex-col justify-evenly ml-2'>
          <Link to='/home'>
            <div
              className='bg-white mt-4 rounded-md text-md text-gray-500 flex justify-center'
            >Home</div>
          </Link>
          <button
            className='bg-white mt-4 rounded-md text-md text-gray-500'
            onClick={() => dispatch({type: ORDER_ACTION_TYPES.SET_TIME, startDate})}
          >Set Time</button>
          <button
            className='bg-white mt-4 rounded-md text-md text-gray-500'
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
          <button
            onClick={onSubmit}
            className='bg-white text-gray-500 rounded-md text-xl p-8'> Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewOrderV2;
