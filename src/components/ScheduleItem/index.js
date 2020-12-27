/* eslint-disable react/prop-types */
import React from 'react';

const ScheduleItem = ({time, timeSlot}) => {
  return (
    <div className='flex flex-col flex-1'>
      <div className='flex justify-center text-3xl text-gray-600'>
        {`${timeSlot}:${time}`}
      </div>
      <div className='flex flex-col'>
        {[1, 2, 3, 4, 5, 6].map(
            (n, k) => (
              <div
                key={k}
                className={
                  `pt-6 pb-3 text-md border-b-2 border-gray-200`
                }>
                {`Order ${n}`}
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default ScheduleItem;
