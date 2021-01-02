/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
import React, {useContext, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import moment from 'moment-timezone';

import {NewOrderContext} from '../../context/NewOrderContext';
import {calculateOrder, flattenMenuItems, generateTimeObj, calculateSize} from '../../utils';
import {HomeContext} from '../../context/HomeContext';


const NewOrderV2 = () => {
  const {menuItems} = useContext(NewOrderContext);
  const {setOrdersOfTheDay, ordersOfTheDay, startDate} = useContext(HomeContext);

  const [search, setSearch] = useState('');
  const [greaterThanZero, setGreaterThanZero] = useState(false);
  const [order, setOrder] = useState({total: '0.00', time: '', size: '', phoneNumber: ''});

  const {id} = useParams();


  const clearOrder = () => {
    setOrder({total: '0.00', time: '', size: '', phoneNumber: ''});
  };
  const addItem = (item) => {
    const newOrder = {...order};
    if (newOrder[item.name]) {
      newOrder[item.name].numberOfItems ++;
    } else {
      newOrder[item.name] = {...item, numberOfItems: 1};
    }
    setOrder({...calculateOrder(newOrder), size: calculateSize(Number(order.total))});
  };
  const removeItem = (itemToRemove) => {
    const newOrder = {...order};
    if (newOrder[itemToRemove]) {
      if (newOrder[itemToRemove].numberOfItems > 0) {
        newOrder[itemToRemove].numberOfItems -= 1;
        setOrder({...calculateOrder(newOrder), size: calculateSize(Number(order.total))});
      }
    }
    return;
  };
  const onSetTime = async () => {
    setOrder({...order, time: generateTimeObj(order.time, startDate).format('')});
  };
  const onSubmit = async () => {
    const newOrdersOfTheDay = [...ordersOfTheDay]
        .filter(({id: orderId}) => orderId !== id);
    setOrdersOfTheDay([...newOrdersOfTheDay, order]);
    window.alert('Order Updated');
    return;
  };

  useEffect(() => {
    if (!id) clearOrder();
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex justify-evenly bg-gray-500 p-4'>
        <div>
          <div className='text-white'>Time: </div>
          <div className=''>
            <input
              onChange={(e) => setOrder({...order, time: e.target.value})}/>
          </div>
          <div className='text-white'>Phone Number: </div>
          <div className=''>
            <input onChange={(e) => setOrder({...order, phoneNumber: e.target.value})}/>
          </div>
          <div className='text-white'>Search: </div>
          <div className=''>
            <input onChange={(e) => setSearch(e.target.value)}/>
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
            onClick={onSetTime}
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
                <div
                  className='bg-green-300 px-6 py-1 rounded-lg'
                  onClick={
                    () => addItem(menuItem)}
                >+</div>
                <div
                  className='bg-red-300 px-6 py-1 rounded-lg'
                  onClick={
                    () => removeItem(menuItem.name)
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
            <div>Time: </div>
            <div className='text-lg font-light'>
              {moment(order.time).tz('America/Toronto').format('M/D/yyyy, h:mm a')}
            </div>
          </div>
          <div className='flex p-2'>
            <div>SubTotal: </div>
            <div>{order.total}</div>
          </div>
          <div className='flex p-2 text-4xl font-bold'>
            <div>Total: </div>
            <div>{(Number(order.total) * 1.13).toFixed(2)}</div>
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
