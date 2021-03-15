/* eslint-disable react/prop-types */
import React from 'react';
import {useQuery} from 'react-query';

import NewOrderMenuPickerView from './NewOrderMenuPickerView';
import {getMenuItems} from '../../context/FirebaseContext';
const NewOrderMenuPicker = ({states}) => {
  const query = useQuery(
      'getMenuItems',
      () => getMenuItems(),
  );
  return (
    <NewOrderMenuPickerView
      states={states}
      getMenuItems={query}
    />
  );
};

export default NewOrderMenuPicker;
