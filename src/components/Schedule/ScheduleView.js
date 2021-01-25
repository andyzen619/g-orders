/* eslint-disable react/prop-types */
import React from 'react';
import ScheduleItem from './ScheduleItem';

const ScheduleView = ({hours, currentDate, states}) => {
  const {isLoading} = states;
  return (
    <div className="flex flex-col flex-1 h-64 overflow-y-auto">
      {isLoading ? (
        <div>Is Loading.....</div>
      ) : (
        hours.map((hour, index) => {
          currentDate.set('hour', hour);
          const timeSlot = currentDate.format('h');
          return (
            <div className="flex p-3 border-b-2 border-gray-200" key={index}>
              <ScheduleItem time={'00'} timeSlot={timeSlot} />
              <ScheduleItem time={'30'} timeSlot={timeSlot} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ScheduleView;
