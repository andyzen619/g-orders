/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';

import {NewOrderContext} from '../../context/NewOrderContext';
import {HomeContext} from '../../context/HomeContext';

import {ORDER_ACTION_TYPES} from '../../constants';
import {generateTimeObj} from '../../utils';
import {Link, useParams} from 'react-router-dom';

const CurrentOrderButton = () => {
  const [clicked, setClicked] = useState(false);
  const [totalWithTax, setTotalWithTax] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');

  const {order, orderDispatch} = useContext(NewOrderContext);
  const {
    startDate,
    setOrdersOfTheDay,
    ordersOfTheDay,
  } = useContext(HomeContext);

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      const {time, totalWithTax, phoneNumber} = order;
      setTotalWithTax(Number(totalWithTax));
      setTimeInput(moment(time).format('h:mm'));
      setPhoneNumberInput(phoneNumber);
    }
  }, []);

  const minimizedTheme = `
    flex justify-center bg-gray-600 
    p-2 rounded-t-xl mx-auto
    text-white font-extrabold w-11/12
  `;

  const maximizedTheme = `
    flex flex-col flex-1 bg-gray-600 
    p-2 pt-8 rounded-t-xl mx-auto
    text-white font-extrabold w-11/12
    h-screen absolute left-0 right-0
  `;

  const onTimeChange = (e) => {
    setTimeInput(e.target.value);
  };

  const onPhoneNumberChange = (e) => {
    setPhoneNumberInput(e.target.value);
  };

  const onSubmit = async () => {
    if (id) {
      const newOrdersOfTheDay = [...ordersOfTheDay]
          .filter(({id: orderId}) => orderId !== id);
      setOrdersOfTheDay([...newOrdersOfTheDay, order]);
      return;
    }
    setOrdersOfTheDay([...ordersOfTheDay, order]);
  };

  return (
    <div
      className={clicked ? maximizedTheme:minimizedTheme}
    >
      <div className='flex justify-between mx-2'>
        <div
          className='text-lg'
          onClick={() => setClicked(true)}>Current Order</div>
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
            onClick={() => setClicked(!clicked)}>
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
                        onClick={() => {
                          orderDispatch({
                            type: ORDER_ACTION_TYPES.REMOVE_ITEM,
                            toRemove: item.name,
                          });
                          setTotalWithTax('');
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
                          setTotalWithTax('');
                        }}
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
            onClick={async () => {
              setTotalWithTax(order.total * 1.13);
              const momentTimeObj = await generateTimeObj(timeInput, startDate);
              orderDispatch({
                type: ORDER_ACTION_TYPES.SUBMIT_ORDER,
                newTime: momentTimeObj.format() || '',
                newPhoneNumber: phoneNumberInput || '',
                totalWithTax: order.total * 1.13,
                id: id || uuidv4(),
              });
              setTotalWithTax(order.total * 1.13);
            }}
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

export default CurrentOrderButton;
