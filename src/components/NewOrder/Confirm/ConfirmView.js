/* eslint-disable react/prop-types */
import React, {useState} from 'react';

const ConfirmView = ({states}) => {
  const {onConfirm} = states;
  const [viewHeight] = useState(window.innerHeight);
  console.log(viewHeight);
  return (
    <div
      className={`
        flex h-screen w-screen 
        bg-opacity-75 bg-gray-500
        absolute bottom-0 left-0
        `}
      style={{height: `${viewHeight}px`}}
    >
      <div
        className={`
        flex flex-col m-auto w-3/4
        justify-between
        bg-white opacity-100
        shadow-lg
        `}
        style={{height: `${viewHeight * 0.8}px`}}
      >
        <div>Confirm Order</div>
        <div>Phone Number: </div>
        <div>Time: </div>
        <div className={`flex justify-between py-4 px-8`}>
          <div onClick={onConfirm}>Close</div>
          <div>Submit</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmView;
