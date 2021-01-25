/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

// stateless component
import React from 'react';
import {Link} from 'react-router-dom';

import {ORDER_ACTION_TYPES} from '../../constants';

export default ({states}) => {
  const {dispatch, setGreaterThanZero, setSearch, startDate} = states;
  return (
    <div className="flex justify-evenly bg-gray-500 p-4">
      <div>
        <div className="text-white">Time: </div>
        <div className="">
          <input
            data-testid="order-time-input"
            onChange={(e) =>
              dispatch({
                type: ORDER_ACTION_TYPES.UPDATE_TIME,
                time: e.target.value,
              })
            }
          />
        </div>
        <div className="text-white">Phone Number: </div>
        <div className="">
          <input
            data-testid="order-phone-input"
            onChange={(e) =>
              dispatch({
                type: ORDER_ACTION_TYPES.UPDATE_PHONE_NUMBER,
                phoneNumber: e.target.value,
              })
            }
          />
        </div>
        <div className="text-white">Search: </div>
        <div className="">
          <input
            data-testid="order-search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col justify-evenly ml-2">
        <Link to="/home">
          <div
            className={
              `bg-white mt-4 rounded-md text-md 
              text-gray-500 flex justify-center`
            }>
            Home
          </div>
        </Link>
        <button
          className="bg-white mt-4 rounded-md text-md text-gray-500"
          onClick={() =>
            dispatch({type: ORDER_ACTION_TYPES.SET_TIME, startDate})
          }
        >
          Set Time
        </button>
        <button
          className="bg-white mt-4 rounded-md text-md text-gray-500"
          onClick={() => setGreaterThanZero(!greaterThanZero)}
        >
          Current Order
        </button>
      </div>
    </div>
  );
};
