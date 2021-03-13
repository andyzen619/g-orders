import React from 'react';
import {Link} from 'react-router-dom';

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
export default () => (
  <div className={`flex justify-between py-4 px-8 bg-gray-500`}>
    <div className="flex flex-col justify-center text-white font-black">
      Order added!
    </div>
    <Link
      className={`
    bg-white text-gray-500 rounded-md text-sm font-black w-20 py-2
      flex justify-center
    `}
      to="/home"
    >
      Home
    </Link>
  </div>
);
