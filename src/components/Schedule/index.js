import React from 'react';
import {useQuery} from 'react-query';

import View from './ScheduleView';
import {getOrders} from '../../context/FirebaseContext';

const Schedule = () => {
  const query = useQuery('getOrders', () => getOrders());
  return <View state={query} />;
};

export default Schedule;
