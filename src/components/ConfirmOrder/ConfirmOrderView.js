/* eslint-disable react/prop-types */
import React from 'react';
import {parseTimeObject} from '../../utils';

import Modal from '../Modal';
import OrderAdded from './OrderAddedView';
import SubmitOrder from './SubmitOrderView';

const View = ({states}) => {
  const {
    onUpdatePhone,
    onUpdateTime,
    orderAdded,
    order,
  } = states;

  return (
    <Modal>
      <div>Confirm Order</div>
      <div className="m-2">
        <div className={`my-2`}>
          <div>Phone Number</div>
          <input
            className={`
          border-b-2 border-gray-500
          `}
            value={order.phoneNumber}
            onChange={onUpdatePhone}
          />
        </div>
        <div className={`my-2`}>
          <div>Time</div>
          <input
            className={`
          border-b-2 border-gray-500
          `}
            value={order.time ? parseTimeObject(order.time) : ''}
            onChange={onUpdateTime}
          />
        </div>
      </div>
      {orderAdded ? (
        <OrderAdded states={states} />
      ) : (
        <SubmitOrder states={states} />
      )}
    </Modal>
  );
};

export default View;
