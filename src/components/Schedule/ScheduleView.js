/* eslint-disable react/prop-types */
import React from 'react';

const ScheduleView2 = ({state}) => {
  const {isLoading, error, data} = state;

  if (isLoading) return <div>...is loading</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {data && (
        <div>
          {data.map(({phoneNumber}, i) => (
            <div key={i}>{phoneNumber}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScheduleView2;
