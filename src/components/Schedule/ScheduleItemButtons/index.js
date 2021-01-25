/* eslint-disable react/prop-types */
import React, {useContext} from 'react';

import {HomeContext} from '../../../context/HomeContext';
import {FirebaseContext} from '../../../context/FirebaseContext';

import ScheduleItemButtonsView from './ScheduleItemButtonsView';

const ScheduleItemButtons = ({id}) => {
  const {ordersOfTheDay, setOrdersOfTheDay} = useContext(HomeContext);
  const {removeOrder} = useContext(FirebaseContext);

  return (
    <ScheduleItemButtonsView
      states={ ordersOfTheDay, setOrdersOfTheDay, removeOrder, id}
    />
  );
};

export default ScheduleItemButtons;
