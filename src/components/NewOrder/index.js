/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */

import React, {useState, useEffect, useReducer} from 'react';
import {useParams} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

import {setOrder} from '../../context/FirebaseContext';
import orderReducer from '../../reducers/OrderReducer';
import {ORDER_ACTION_TYPES} from '../../constants';
import NewOrderView from './NewOrderView';
import Confirm from './Confirm';

const NewOrder = () => {
  const [search, setSearch] = useState('');
  const [greaterThanZero, setGreaterThanZero] = useState(true);
  const [order, dispatch] = useReducer(orderReducer, ({
    total: '0.00',
    time: '',
    size: '',
    phoneNumber: ''}));
  const [showConfirm, setShowConfirm] = useState(false);

  const {id} = useParams();

  const onSubmit = async () => {
    await setOrder({...order, id: uuidv4()});
    window.alert('Order Added');
    return;
  };

  const onConfirm = () => {
    console.log('confirmed!!');
    setShowConfirm(!showConfirm);
  };

  useEffect(() => {
    if (!id) {
      dispatch({type: ORDER_ACTION_TYPES.CLEAR_ORDER});
      return;
    }

    const currentOrder = ordersOfTheDay.find(({id: currentOrderId}) => currentOrderId === id );
    if (!currentOrder) {
      console.error(`Order ${id} not found`);
      clearOrder();
      return;
    }

    dispatch({type: ORDER_ACTION_TYPES.SET_ORDER, currentOrder});
    return;
  }, []);

  return (
    <div>
      <NewOrderView
        states={
          {
            search,
            setSearch,
            greaterThanZero,
            setGreaterThanZero,
            order,
            onConfirm,
            dispatch,
          }
        }/>
      {showConfirm && (
        <Confirm states={
          {
            onSubmit,
            order,
            onConfirm,
          }
        }/>
      )}
    </div>
  );
};

export default NewOrder;
