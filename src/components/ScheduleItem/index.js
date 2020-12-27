/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import {ORDER_SIZES} from '../../constants';
import ScheduleItemView from './ScheduleItemView';

const mockOrders = [
  {
    phoneNumber: '613-122-2333',
    size: ORDER_SIZES.EXTRA_LARGE,
  },
  {
    phoneNumber: '613-898-0000',
    size: ORDER_SIZES.SMALL,
  },
];

const ScheduleItem = ({time, timeSlot}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(mockOrders);
  }, []);
  return (
    <ScheduleItemView time={time} timeSlot={timeSlot} orders={orders}/>
  );
};

export default ScheduleItem;
