import React from 'react';

const ScheduleItemButtons = () => {
  return (
    <div className='flex justify-evenly'>
      <div className={`
        flex justify-center bg-gray-300 rounded my-2 px-2 py-1
      `}>
        Edit
      </div>
      <div className={`
        flex justify-center bg-gray-300 rounded my-2 px-2 py-1
      `}>
        Delete
      </div>
    </div>
  );
};

export default ScheduleItemButtons;
