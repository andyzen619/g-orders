/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react';

import {NewOrderContext} from '../../context/NewOrderContext';
import {ORDER_ACTION_TYPES} from '../../constants';

const CurrentOrderButton = () => {
  const [clicked, setClicked] = useState(false);
  const [totalWithTax, setTotalWithTax] = useState('');

  const {order, orderDispatch} = useContext(NewOrderContext);

  const minimizedTheme = `
    flex justify-center bg-gray-600 
    p-2 rounded-t-full mx-auto
    text-white font-extrabold w-11/12
  `;

  const maximizedTheme = `
    flex flex-col bg-gray-600 
    p-2 pt-8 rounded-t-xl mx-auto
    text-white font-extrabold w-11/12
    h-screen absolute left-0 right-0
  `;
  return (
    <div
      className={clicked ? maximizedTheme:minimizedTheme}
    >
      <div className='flex justify-between mx-2'>
        <div
          className='text-lg'
          onClick={() => setClicked(true)}>Current Order</div>
        <div
          className='text-sm'
          onClick={() => setClicked(!clicked)}>
          {clicked && 'Minimize'}
        </div>

      </div>
      {clicked && (
        <div className='m-4'>
          {Object.entries(order)
              .filter(([key])=> key !== 'total')
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
                        onClick={() => {
                          orderDispatch({
                            type: ORDER_ACTION_TYPES.REMOVE_ITEM,
                            toRemove: item.name,
                          });
                        }}
                      >
                        -
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div
                        className='ml-4 px-3 rounded-full bg-green-400 text-lg'
                        onClick={() => {
                          orderDispatch({
                            type: ORDER_ACTION_TYPES.ADD_ITEM,
                            item,
                          });
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>))}
        </div>)}
      {clicked && (
        <div className='m-4'>
          Total {order.total}
        </div>
      )}
    </div>
  );
};

export default CurrentOrderButton;
