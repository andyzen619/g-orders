import React, { useState } from 'react';

import OrderItems from '../components/OrderItems';
import Navbar from '../components/Navbar';

function NewOrderView() {
  const [pageTitle] = useState('Order');
  return (
    <div className="flex flex-col h-screen">
      <Navbar title={pageTitle} />
      <div className="flex">Search bar</div>
      <div className="flex">Categories</div>
      <OrderItems />
    </div>
  );
}

export default NewOrderView;
