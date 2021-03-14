/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useState} from 'react';

import NewOrderNavbarView from './NewOrderNavbar';
import NewOrderMenuPicker from './NewOrderMenuPicker';
import {calculateOrderTotal} from '../../utils';

const NewOrderView = ({states}) => {
  const {order, onConfirm} = states;
  // Remove unused states. Menu picker in this component is used to display//
  // current menu items and does not require search.
  // eslint-disable-next-line no-unused-vars
  const {search, setSearch, ...withoutSearch} = states;
  const [viewHeight] = useState(window.innerHeight);

  return (
    <div className="flex flex-col" style={{height: `${viewHeight}px`}}>
      <NewOrderNavbarView states={states} />
      <NewOrderMenuPicker states={withoutSearch} />
      <div className="relative flex justify-between bg-gray-500 text-white font-bold text-lg">
        <div className="flex flex-col w-5/7">
          <div className="flex pl-8  p-2">
            <div>SubTotal: </div>
            <div>{order.total}</div>
          </div>
          <div className="flex pl-8 p-2 text-3xl font-bold">
            <div>Total: </div>
            <div>
              {calculateOrderTotal(order.total)}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end my-auto mx-auto">
          <div
            className="bg-white text-gray-500 rounded-md text-sm p-4"
            onClick={onConfirm}
          >
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderView;
