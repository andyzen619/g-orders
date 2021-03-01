/* eslint-disable react/prop-types */
import React from 'react';

import Modal from '../Modal';

const View = ({states}) => {
  const {onConfirm, onSubmit} = states;

  return (
    <Modal>
      <div>Confirm Order</div>
      <div>Phone Number: </div>
      <div>Time: </div>
      <div className={`flex justify-between py-4 px-8`}>
        <div onClick={onConfirm}>Close</div>
        <div onClick={onSubmit}>Submit</div>
      </div>
    </Modal>
  );
};

export default View;
