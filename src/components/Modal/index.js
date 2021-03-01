/* eslint-disable react/prop-types */
import React from 'react';
import View from './ModalView';

const Confirm = ({states, children}) => {
  return <View states={states}>{children}</View>;
};

export default Confirm;
