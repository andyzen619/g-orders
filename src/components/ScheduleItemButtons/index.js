/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({text, color}) => {
  return (
    <div className={`
        flex justify-center bg-${color}-400
        shadow 
        rounded m-2 px-1 
        text-white font-bold
        text-md
      `}>
      {text}
    </div>
  );
};

const ScheduleItemButtons = () => {
  return (
    <div className='flex justify-center'>
      <Button text='Edit' color='blue'/>
      <Button text='Delete' color='red'/>
    </div>
  );
};

export default ScheduleItemButtons;
