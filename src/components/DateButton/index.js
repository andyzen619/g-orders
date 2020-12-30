import React, {useState, useContext} from 'react';

import DateButtonView from './DateButtonView';

import {HomeContext} from '../../context/HomeContext';

const DateButton = () => {
  const {startDate, setStartDate} = useContext(HomeContext);

  const [showCalender, setShowCalendar] = useState(false);

  return (
    <DateButtonView
      startDate={startDate}
      setStartDate={setStartDate}
      showCalender={showCalender}
      setShowCalendar={setShowCalendar}
    />
  );
};

export default DateButton;
