/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */

import React, {useState, useEffect, useReducer} from 'react';
import {useParams} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {useQuery} from 'react-query';

import {setOrder, getOrders} from '../../context/FirebaseContext';
import orderReducer from '../../reducers/OrderReducer';
import {ORDER_ACTION_TYPES} from '../../constants';
import NewOrderView from './NewOrderView';
import ConfirmOrder from '../../components/ConfirmOrder';
import {calculateOrderTotal, generateTimeObj} from '../../utils';

const NewOrder = () => {
  const {id, startDate} = useParams();

  const [search, setSearch] = useState('');
  const [greaterThanZero, setGreaterThanZero] = useState(true);
  const [order, dispatch] = useReducer(orderReducer, {
    total: '0.00',
    time: '',
    size: '',
    phoneNumber: '',
  });
  const [showConfirm, setShowConfirm] = useState(false);
  const [orderAdded, setOrderAdded] = useState(false);

  // set current order on screen
  useQuery('getOrder', async () => {
    if (id) {
      const [currentOrder] = await getOrders({id});
      dispatch({type: ORDER_ACTION_TYPES.SET_ORDER, currentOrder});
      return;
    }
  });

  const onSubmit = async () => {
    try {
      // add order to db
      await setOrder({
        ...order,
        id: order.id || uuidv4(),
        time: order.time || await generateTimeObj(order.time, startDate),
        totalWithTax: calculateOrderTotal(order.total),
      });
      setOrderAdded(true);
      return;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  // show confirmation modal.
  const onConfirm = () => {
    setShowConfirm(!showConfirm);
    return;
  };

  // if new order, clear order
  useEffect(() => id && dispatch({type: ORDER_ACTION_TYPES.CLEAR_ORDER}), []);

  return (
    <div
      className={`
      relative
      `}
    >
      <NewOrderView
        states={{
          search,
          setSearch,
          greaterThanZero,
          setGreaterThanZero,
          order,
          onConfirm,
          dispatch,
        }}
      />
      {showConfirm && (
        <ConfirmOrder states={{onConfirm, onSubmit, dispatch, orderAdded, order}} />
      )}
    </div>
  );
};

export default NewOrder;
