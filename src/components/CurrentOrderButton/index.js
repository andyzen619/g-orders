/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';

import {NewOrderContext} from '../../context/NewOrderContext';
import {HomeContext} from '../../context/HomeContext';

import {ORDER_ACTION_TYPES} from '../../constants';
import {generateTimeObj} from '../../utils';
import {useParams} from 'react-router-dom';
import CurrentOrderButtonView from './CurrentOrderButtonView';

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

  const currentOrderFunctions = {
    onTimeChange: (e) => {
      setTimeInput(e.target.value);
    },
    onPhoneNumberChange: (e) => {
      setPhoneNumberInput(e.target.value);
    },
    onSubmit: async () => {
      if (id) {
        const newOrdersOfTheDay = [...ordersOfTheDay]
            .filter(({id: orderId}) => orderId !== id);
        setOrdersOfTheDay([...newOrdersOfTheDay, order]);
        return;
      }
      setOrdersOfTheDay([...ordersOfTheDay, order]);
    },
    onTaxClick: async () => {
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
    },
    onAdd: async () => {
      orderDispatch({
        type: ORDER_ACTION_TYPES.ADD_ITEM,
        item,
      });
      setTotalWithTax('');
    },
    onRemove: async () => {
      orderDispatch({
        type: ORDER_ACTION_TYPES.REMOVE_ITEM,
        toRemove: item.name,
      });
      setTotalWithTax('');
    },
    onCurrentOrderClick: () => {
      setClicked(!clicked);
    },
  };

  const currentOrderState = {
    clicked,
    totalWithTax,
    order,
    timeInput,
    totalWithTax,
    phoneNumberInput,
  };

  return (
    <CurrentOrderButtonView
      functions={currentOrderFunctions}
      states={currentOrderState}
    />
  );
};

export default CurrentOrderButton;
