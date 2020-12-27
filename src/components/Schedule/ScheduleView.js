/* eslint-disable react/prop-types */
import React from 'react';
import ScheduleItem from '../ScheduleItem';

const ScheduleView = ({hours, currentDate}) => {
  return (
    <div
      className='flex flex-col flex-1 h-64 overflow-y-auto'
    >
      {
        hours.map((hour, index) => {
          currentDate.set('hour', hour);
          const timeSlot = currentDate.format('h');
          return (
            <div
              className='flex p-3'
              key={index}>
              <ScheduleItem time={'00'} timeSlot={timeSlot}/>
              <ScheduleItem time={'30'} timeSlot={timeSlot}/>
            </div>
          );
        })
      }
    </div>
  );
};

export default ScheduleView;
