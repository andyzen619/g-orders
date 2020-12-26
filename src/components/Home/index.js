import React from 'react';

// import HomeContainer from './HomeContainer';
import DateButton from '../DateButton';

const Home = () => {
  return (
    <div className='flex flex-col h-screen bg-blue-200'>
      <DateButton/>
      <div className='flex flex-1 justify-center'>Schedule</div>
      <div className='flex justify-center'>New Order</div>
    </div>
  );
};

export default Home;
