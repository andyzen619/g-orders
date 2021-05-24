/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import moment from 'moment';
// import {Link} from 'react-router-dom';

// import {DATE_FORMAT} from '../../constants';

const ScheduleView = ({states}) => {
  const {query, startDate} = states;
  const {isLoading, error, data} = query;
  const momentObj = moment(startDate);
  // const startOfDayUnix = momentObj.startOf('day').unix();
  // const endOfDayUnix = momentObj.endOf('day').unix();


  const [timeSlots, setTimeSlots] = useState({
    200: {timeStamp: momentObj.get(), text: '2:00'},
    230: {timeStamp: 0, text: '2:30'},
    300: {timeStamp: 0, text: '3:00'},
    330: {timeStamp: 0, text: '3:30'},
    400: {timeStamp: 0, text: '4:00'},
    430: {timeStamp: 0, text: '4:30'},
    500: {timeStamp: 0, text: '5:00'},
    530: {timeStamp: 0, text: '5:30'},
    600: {timeStamp: 0, text: '6:00'},
    630: {timeStamp: 0, text: '6:30'},
    700: {timeStamp: 0, text: '7:00'},
    730: {timeStamp: 0, text: '7:30'},
    800: {timeStamp: 0, text: '8:00'},
  });
  const [currentTimeSlot, setCurrentTimeSlot] = useState(
      timeSlots[200].timeStamp,
  );

  if (isLoading) return <div>...is loading</div>;
  if (error) return <div>{error}</div>;
  return (
    <div
      className={`
      h-full
      `}
    >
      <div>
        {Object.entries(([key, value]) => {
          const {text} = value;
          return text;
        }).map(({text}, k) => {
          console.log(text);
          return <div key={k}>{text}</div>;
        })}
      </div>
    </div>
  );
};

export default ScheduleView;
