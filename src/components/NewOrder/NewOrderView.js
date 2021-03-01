/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useState} from 'react';

import NewOrderNavbarView from './NewOrderNavbar';
import NewOrderMenuPicker from './NewOrderMenuPicker';

const NewOrderView = ({states}) => {
  const {order, onConfirm} = states;
  const [viewHeight] = useState(window.innerHeight);

  return (
    <div className='flex flex-col' style={{height: `${viewHeight}px`}}>
      <NewOrderNavbarView states={states}/>
      <NewOrderMenuPicker states={states}/>
      <div className='relative flex justify-between bg-gray-500 text-white font-bold text-lg'>
        <div className='flex flex-col w-5/7'>
          <div className='flex pl-8  p-2'>
            <div>SubTotal: </div>
            <div
              data-testid='order-sub-total'
            >{order.total}</div>
          </div>
          <div className='flex pl-8 p-2 text-3xl font-bold'>
            <div>Total: </div>
            <div
              data-testid='order-total'
            >{(Number(order.total) * 1.13).toFixed(2)}</div>
          </div>
        </div>
        <div className='flex flex-col justify-end my-auto mx-auto'>
          <div
            className='bg-white text-gray-500 rounded-md text-sm p-4'
            onClick={onConfirm}
          >
          Confirm
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderView;
