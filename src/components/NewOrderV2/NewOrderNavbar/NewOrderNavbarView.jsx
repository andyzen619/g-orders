/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

// stateless component
import React from 'react';
import {Link} from 'react-router-dom';

export default ({states}) => {
  const {setSearch} = states;
  return (
    <div className="flex justify-evenly bg-gray-500 p-4">

      <div className="flex justify-center m-2">
        <input
          data-testid="order-search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="p-2 bg-white">
        <Link to="/home">
            Home
        </Link>
      </div>

    </div>
  );
};
