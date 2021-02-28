/* eslint-disable react/prop-types */
import React from 'react';

const ConfirmView = ({states}) => {
  const {onConfirm} = states;
  return (
    <div className={
      `flex h-full w-full 
      opacity-75 bg-gray-500
      absolute bottom-0 left-0`
    }>
      <div className='flex-col m-auto h-3/4 w-3/4 bg-white opacity-100'>
        <div>Confirm Order</div>
        <div>Phone Number: </div>
        <div>Submit</div>
        <div onClick={onConfirm}>Close</div>
      </div>
    </div>
  );
};

export default ConfirmView;
