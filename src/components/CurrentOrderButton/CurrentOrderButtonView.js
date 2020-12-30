/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';

import {maximizedTheme, minimizedTheme} from './theme';

const CurrentOrderButtonView = ({
  functions,
  states,
}) => {
  const {
    onCurrentOrderClick,
    onRemove,
    onAdd,
    onTaxClick,
    onSubmit,
    onPhoneNumberChange,
    onTimeChange,
  } = functions;
  const {
    clicked,
    totalWithTax,
    order,
    timeInput,
    phoneNumberInput,
  } = states;

  return (
    <div
      className={clicked ? maximizedTheme:minimizedTheme}
    >
      <div className='flex justify-between mx-2'>
        <div
          className='text-lg'
          onClick={onCurrentOrderClick}>Current Order</div>
        <div className='flex'>
          <Link to='/home'>
            <div
              className='text-sm mx-4'
            >
              {clicked && 'Home'}
            </div>
          </Link>

          <div
            className='text-sm'
            onClick={onCurrentOrderClick}>
            {clicked && 'Minimize'}
          </div>
        </div>

      </div>
      {clicked && (
        <div className='m-4 h-full overflow-y-auto'>
          {Object.entries(order)
              .filter(
                  ([key])=> ![
                    'total', 'time', 'totalWithTax',
                    'phoneNumber', 'size', 'id',
                  ].includes(key))
              .map(([key, item])=>
                (<div
                  key={key}
                  className='flex justify-between m-2'
                >
                  <div className='flex text-sm'>{item.name}</div>
                  <div className='flex'>
                    <div>{item.numberOfItems}</div>
                    <div className='flex flex-col justify-center'>
                      <div
                        className='ml-4 px-3 rounded-full bg-red-400 text-lg'
                        onClick={onRemove}
                      >
                        -
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div
                        className='ml-4 px-3 rounded-full bg-green-400 text-lg'
                        onClick={onAdd}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>))}
        </div>)}
      {clicked && (
        <div className='flex justify-center text-red-300'>
          <div className='flex flex-col justify-center'>
            <div>Time</div>
            <input
              type='text'
              value={timeInput}
              onChange={onTimeChange}
              className='flex justify-center'
            />
            <div>Phone Number</div>
            <input
              type='text'
              value={phoneNumberInput}
              onChange={onPhoneNumberChange}
              className='flex justify-center'
            />
          </div>
        </div>
      )}
      {clicked && (
        <div className='flex m-4 justify-between'>
          <div>
            <div className='text-md'>
              SubTotal: ${order.total}
            </div>
            <div className='text-xl'>
              Total: ${totalWithTax?totalWithTax.toFixed(2): '0.00'}
            </div>
          </div>
          <div className='flex flex-col justify-center text-sm'>
            <div className={`
              flex justify-center 
              px-2 py-1 rounded-full 
              bg-blue-400
            `}
            onClick={onTaxClick}
            >
              Tax
            </div>
            <div className={`
              flex justify-center 
              px-2 py-1 my-2 rounded-full 
              bg-green-500
            `}
            onClick={onSubmit}
            >
              Submit
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentOrderButtonView;
