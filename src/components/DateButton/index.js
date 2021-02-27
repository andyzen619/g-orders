import React, {useState} from 'react';
import moment from 'moment';

import DateButtonView from './DateButtonView';

const DateButton = () => {
  const [startDate, setStartDate] = useState(moment());
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
