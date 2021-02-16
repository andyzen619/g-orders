/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

// stateless component
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NewOrderMenuPicker from '../NewOrderMenuPicker';

export default ({states}) => {
  const {setSearch} = states;
  const allOrderState = {...states, greaterThanZero: false};

  const [showSearchResults, setShowSearchResults] = useState(false);


  return (
    <div className="flex justify-evenly bg-gray-500 p-4">

      <div>
        <div className="flex justify-center m-2">
          <input
            data-testid="order-search-input"
            onChange={(e) =>{
              e.target.value.length?
                setShowSearchResults(true):setShowSearchResults(false);

              return setSearch(e.target.value);
            }
            }
          />
        </div>
        {showSearchResults && (
          <div className='
          bg-white shadow-lg absolute
          m-2 h-2/4 w-4/5 overflow-auto
          '>
            <NewOrderMenuPicker states={allOrderState}/>
          </div>
        )}
      </div>

      <div className="px-4 py-2 bg-white rounded-md">
        <Link to="/home">
            Home
        </Link>
      </div>


    </div>
  );
};
