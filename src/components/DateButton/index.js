import React, {useState} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import {VERTICAL_ORIENTATION} from 'react-dates/constants';

const DateButton = () => {
  const [startDate, setStartDate] = useState(moment());
  const [showCalender, setShowCalendar] = useState(false);

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
