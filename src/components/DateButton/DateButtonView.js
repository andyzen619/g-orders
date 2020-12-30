/* eslint-disable react/prop-types */
import React from 'react';
import {SingleDatePicker} from 'react-dates';
import {VERTICAL_ORIENTATION} from 'react-dates/constants';

const DateButton = ({
  startDate,
  setStartDate,
  showCalender,
  setShowCalendar,
}) => {
  return (
    <div className='flex justify-center bg-gray-500 p-4'>
      <SingleDatePicker
        date={startDate}
        onDateChange={(date) => setStartDate(date)}
        focused={showCalender}
        onFocusChange={({focused}) => setShowCalendar( focused )}
        id='some-id'
        orientation={VERTICAL_ORIENTATION}
        withFullScreenPortal={true}
      />
    </div>
  );
};

export default DateButton;
