/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

import {DATE_FORMAT} from '../../constants';

const ScheduleView2 = ({state}) => {
  const {isLoading, error, data} = state;

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
          {data.map(({phoneNumber, totalWithTax, time, id}, i) => (
            <div key={i} className="flex justify-between">
              <div>
                {`${phoneNumber}: $${totalWithTax} - ${moment(time).format(
                    DATE_FORMAT.TIME,
                )}`}
              </div>
              <Link to={`/editOrder/${id}`} className={`px-4`}>Edit</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScheduleView2;
