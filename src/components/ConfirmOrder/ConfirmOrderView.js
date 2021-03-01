/* eslint-disable react/prop-types */
import React from 'react';

import Modal from '../Modal';

const View = ({states}) => {
  const {onConfirm, onSubmit, onUpdatePhone, onUpdateTime} = states;

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
      <div className={`flex justify-between py-4 px-8 bg-gray-500`}>
        <button className="p-2 text-white font-black" onClick={onConfirm}>
          Close
        </button>
        <button
          className={`
            bg-white text-gray-500 rounded-md text-sm font-black p-4
            `}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default View;
