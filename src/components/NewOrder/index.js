import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';

import {NewOrderContext} from '../../context/NewOrderContext';
import {HomeContext} from '../../context/HomeContext';

import {ORDER_ACTION_TYPES} from '../../constants';
import NewOrderView from './NewOrderView';

const NewOrder = () => {
  const {id} = useParams();
  const {ordersOfTheDay} = useContext(HomeContext);

  const {orderDispatch} = useContext(NewOrderContext);

  useEffect(() => {
    if (id) {
      const currentOrder = ordersOfTheDay.find(
          ({id: orderId}) => orderId === id,
      );

      if (currentOrder) {
        orderDispatch({
          type: ORDER_ACTION_TYPES.SET_ORDER,
          newOrder: currentOrder,
        });
      }
    } else {
      orderDispatch({type: ORDER_ACTION_TYPES.CLEAR_ORDER});
    }
  }, []);
  return (
    <NewOrderView/>
  );
};

export default NewOrder;
