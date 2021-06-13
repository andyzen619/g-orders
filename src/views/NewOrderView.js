import React, { useState } from 'react';

import OrderItems from '../components/OrderItems';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

function NewOrderView() {
  const [pageTitle] = useState('Order');
  return (
    <div className="flex flex-col h-screen">
      <Navbar title={pageTitle} />
      <SearchBar input="Search" />
      <div className="flex">Categories</div>
      <OrderItems />
    </div>
  );
}

export default NewOrderView;
