/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {Link} from 'react-router-dom';

import NewOrderNavbarView from './NewOrderNavbar';
import NewOrderMenuPicker from './NewOrderMenuPicker';

import moment from 'moment-timezone';

const NewOrderV2View = ({states}) => {
  const {order, onSubmit} = states;
  return (
    <div className='flex flex-col h-screen'>
      <NewOrderNavbarView states={states}/>
      <NewOrderMenuPicker states={states}/>
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
