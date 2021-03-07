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
import ConfirmOrder from '../ConfirmOrder';
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

  // set current order on screen
  const {isLoading, error} = useQuery('getOrder', async () => {
    const [currentOrder] = await getOrders({id});
    dispatch({type: ORDER_ACTION_TYPES.SET_ORDER, currentOrder});
  });

  const onSubmit = async () => {
    try {
      // set proper timestamp
      const orderTime = await generateTimeObj(order.time, startDate);

      await setOrder({
        ...order,
        id: uuidv4(),
        time: orderTime,
        totalWithTax: calculateOrderTotal(order.total),
      });
      window.alert('Order Added');
      return;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  const onConfirm = () => {
    setShowConfirm(!showConfirm);
    return;
  };

  useEffect(() => {
    if (!id) {
      dispatch({type: ORDER_ACTION_TYPES.CLEAR_ORDER});
      return;
    }
    return;
  }, []);

  if (isLoading) return <div>...is loading</div>;
  if (error) return <div>{error}</div>;

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
        <ConfirmOrder states={{onConfirm, onSubmit, dispatch}} />
      )}
    </div>
  );
};

export default NewOrder;
