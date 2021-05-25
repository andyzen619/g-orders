import React from 'react';

import OrderItems from '../components/OrderItems';
import Navbar from '../components/Navbar';

function NewOrderView() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex">Search bar</div>
      <div className="flex">Categories</div>
      <OrderItems />
    </div>
  );
}

export default NewOrderView;
