/* eslint-disable react/prop-types */
import React from 'react';
import {useQuery} from 'react-query';

import NewOrderMenuPickerView from './NewOrderMenuPickerView';
import {getMenuItems} from '../../../context/FirebaseContext';
const NewOrderMenuPicker = ({states}) => {
  const {isLoading, error, data} = useQuery(
      'allMenuItems',
      () => getMenuItems,
  );
  return (
    <NewOrderMenuPickerView
      states={states}
      allMenuItems={(isLoading, error, data)}
    />
  );
};

export default NewOrderMenuPicker;
