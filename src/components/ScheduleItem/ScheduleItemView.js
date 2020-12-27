/* eslint-disable react/prop-types */
import React from 'react';
import ScheduleItemButtons from '../ScheduleItemButtons';

const ScheduleItemView = ({time, timeSlot, orders}) => {
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
                  flex flex-col justify-evenly
                  pt-6 pb-3 text-md border-b-2 border-gray-200
                  `
                }
              >
                <div className='flex justify-evenly'>
                  <div className=''>
                    {`#${phoneNumber}`}
                  </div>
                  <div className='font-bold'>
                    {size}
                  </div>
                </div>
                <ScheduleItemButtons/>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default ScheduleItemView;
