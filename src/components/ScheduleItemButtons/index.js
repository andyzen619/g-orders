/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({text}) => {
  return (
    <div className={`
        flex justify-center bg-gray-400 
        rounded my-2 px-2 py-1 
        text-white font-bold
        text-md
      `}>
      {text}
    </div>
  );
};

const ScheduleItemButtons = () => {
  return (
    <div className='flex justify-evenly'>
      <Button text='Edit'/>
      <Button text='Delete'/>
    </div>
  );
};

export default ScheduleItemButtons;
