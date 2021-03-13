/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/display-name
export default ({states}) => (
  <div className={`flex justify-between py-4 px-8 bg-gray-500`}>
    <button className="p-2 text-white font-black" onClick={states.onConfirm}>
      Close
    </button>
    <button
      className={`
            bg-white text-gray-500 rounded-md text-sm font-black w-20 py-2
              flex justify-center
            `}
      onClick={states.onSubmit}
    >
      Submit
    </button>
  </div>
);
