/* eslint-disable react/prop-types */
import React, {useState} from 'react';

import DateButtonView from './DateButtonView';

const DateButton = ({states}) => {
  const {startDate, setStartDate} = states;
  const [showCalender, setShowCalendar] = useState(false);

  return (
    <DateButtonView
      states={
        {startDate, setStartDate, showCalender, setShowCalendar}
      }
    />
  );
};

export default DateButton;
