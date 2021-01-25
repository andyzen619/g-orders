/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

import ScheduleItemView from './ScheduleItemView';

const ScheduleItem = ({time, timeSlot}) => {
  return (
    <ScheduleItemView time={time} timeSlot={timeSlot}/>
  );
};

export default ScheduleItem;
