/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import moment from 'moment';

import ScheduleItemButtons from '../ScheduleItemButtons';

import {HomeContext} from '../../../context/HomeContext';

const ScheduleItemView = ({time, timeSlot}) => {
  const {ordersOfTheDay, startDate} = useContext(HomeContext);

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex justify-center text-3xl text-gray-600'>
        {`${timeSlot}:${time}`}
      </div>
      <div className='flex flex-col'>
        {
          ordersOfTheDay
              .filter((theOrder) => {
                const hour = Number(timeSlot) + 12;
                const minute = Number(time);
                const date = startDate.date();
                const month = startDate.month();
                const year = startDate.year();

                const order = moment(theOrder.time);
                const orderHour = order.hour();
                const orderMinute = order.minute();
                const orderDate = order.date();
                const orderMonth = order.month();
                const orderYear = order.year();

                if (year !== orderYear) return false;
                if (month !== orderMonth) return false;
                if (date !== orderDate) return false;
                if (hour !== orderHour) return false;
                if (orderMinute < minute) return false;
                if (orderMinute >= minute + 30) return false;
                return true;
              })
              .map(
                  ({phoneNumber, size, id}, k) => {
                    return (
                      <div
                        key={k}
                        className={
                          `
                          flex flex-col justify-evenly
                          pt-6 pb-3 text-md
                          `
                        }
                      >
                        <div className='flex justify-evenly'>
                          <div className=''>
                            {`#${phoneNumber}`}
                          </div>
                          <div className='font-bold'>
                            {size}
                          </div>
                        </div>
                        <ScheduleItemButtons id={id}/>
                      </div>
                    );
                  })
        }
      </div>
    </div>
  );
};

export default ScheduleItemView;
