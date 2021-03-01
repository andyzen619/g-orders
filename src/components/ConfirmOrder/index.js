/* eslint-disable react/prop-types */
import React from 'react';
import {ORDER_ACTION_TYPES} from '../../constants';
import View from './ConfirmOrderView';

const ConfirmOrder = ({states}) => {
  const {dispatch} = states;

  const onUpdatePhone = (e) => {
    dispatch({
      type: ORDER_ACTION_TYPES.UPDATE_PHONE_NUMBER,
      phoneNumber: e.currentTarget.value,
    });
  };
  const onUpdateTime = (e) => {
    dispatch({
      type: ORDER_ACTION_TYPES.UPDATE_TIME,
      time: e.currentTarget.value,
    });
  };

  return (<View states={{...states, onUpdatePhone, onUpdateTime}}/>);
};

export default ConfirmOrder;

