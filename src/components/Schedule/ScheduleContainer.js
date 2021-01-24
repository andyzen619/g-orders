/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import moment from 'moment';

import ScheduleView from './ScheduleView';


const ScheduleContainer = ({states}) => {
  const [hours] = useState([15, 16, 17, 18, 19, 20, 21]);
  const [currentDate] = useState(moment());

  // eslint-disable-next-line max-len
  return (<ScheduleView hours={hours} currentDate={currentDate} states={states}/>);
};

export default ScheduleContainer;
