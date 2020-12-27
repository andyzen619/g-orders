import React, {useState} from 'react';
import moment from 'moment';

import ScheduleView from './ScheduleView';


const ScheduleContainer = () => {
  const [hours] = useState([15, 16, 17, 18, 19, 20, 21]);
  const [currentDate] = useState(moment());

  return (<ScheduleView hours={hours} currentDate={currentDate}/>);
};

export default ScheduleContainer;
