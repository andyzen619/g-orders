/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';

const NewOrderButton = ({states}) => {
  const {startDate} = states;
  return (
    <div
      // eslint-disable-next-line max-len
      className='flex justify-center bg-gray-600 m-4 p-2 rounded text-white font-extrabold w-1/2 mx-auto'>
      <Link to={`/newOrder/${startDate}`}>
        New Order
      </Link>
    </div>
  );
};

export default NewOrderButton;
