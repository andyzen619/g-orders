/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import {ORDER_SIZES} from '../../constants';

const mockOrders = [
  {
    phoneNumber: '613-122-2333',
    size: ORDER_SIZES.EXTRA_LARGE,
  },
  {
    phoneNumber: '613-898-0000',
    size: ORDER_SIZES.SMALL,
  },
];

const ScheduleItem = ({time, timeSlot}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(mockOrders);
  }, []);
  return (
    <div className='flex flex-col flex-1'>
      <div className='flex justify-center text-3xl text-gray-600'>
        {`${timeSlot}:${time}`}
      </div>
      <div className='flex flex-col'>
        {orders.map(
            ({phoneNumber, size}, k) => (
              <div
                key={k}
                className={
                  `
                  flex justify-evenly
                  pt-6 pb-3 text-md border-b-2 border-gray-200
                  `
                }>
                <div>
                  {`#${phoneNumber}`}
                </div>
                <div className='font-bold'>
                  {size}
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default ScheduleItem;
