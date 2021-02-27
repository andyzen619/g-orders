/* eslint-disable react/prop-types */
import React from 'react';

const ScheduleView2 = ({state}) => {
  const {isLoading,
    error,
    data} = state;
  return (
    <div>
      {isLoading && <div>...isLoading</div>}
      {error && <div>{error}</div>}
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
