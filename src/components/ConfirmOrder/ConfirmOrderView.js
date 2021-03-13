/* eslint-disable react/prop-types */
import React from 'react';

import Modal from '../Modal';
import OrderAdded from './OrderAddedView';
import SubmitOrder from './SubmitOrderView';

const View = ({states}) => {
  const {
    onUpdatePhone,
    onUpdateTime,
    orderAdded,
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
            onChange={onUpdatePhone}
          />
        </div>
        <div className={`my-2`}>
          <div>Time</div>
          <input
            className={`
          border-b-2 border-gray-500
          `}
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
