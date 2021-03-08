/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

import {DATE_FORMAT} from '../../constants';

const ScheduleView2 = ({states}) => {
  const {query, startDate} = states;
  const {isLoading, error, data} = query;
  const momentObj = moment(startDate);
  const startOfDayUnix = momentObj.startOf('day').unix();
  const endOfDayUnix = momentObj.endOf('day').unix();

  if (isLoading) return <div>...is loading</div>;
  if (error) return <div>{error}</div>;
  return (
    <div
      className={`
      h-full
      `}
    >
      {data && (
        <div>
          {data
              .filter(({time}) => {
                const orderUnixTime = moment(time).unix();
                return (
                  // eslint-disable-next-line max-len
                  orderUnixTime >= startOfDayUnix && orderUnixTime < endOfDayUnix
                );
              })
              .map(({phoneNumber, totalWithTax, time, id}, i) => (
                <div key={i} className="flex justify-between">
                  <div>
                    {`${phoneNumber}: $${totalWithTax} - ${moment(time).format(
                        DATE_FORMAT.TIME,
                    )}`}
                  </div>
                  <Link to={`/editOrder/${id}`} className={`px-4`}>
                  Edit
                  </Link>
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default ScheduleView2;
