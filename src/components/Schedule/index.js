import React from 'react';
import {useQuery} from 'react-query';

import View from './ScheduleView';
import {getOrders} from '../../context/FirebaseContext';

// eslint-disable-next-line react/prop-types
const Schedule = ({states}) => {
  const query = useQuery('getOrders', () => getOrders({id: null}));
  return <View states={{...states, query}} />;
};

export default Schedule;
