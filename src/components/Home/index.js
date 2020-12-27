import React from 'react';

// import HomeContainer from './HomeContainer';
import DateButton from '../DateButton';
import Schedule from '../Schedule';

const Home = () => {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <DateButton/>
      <Schedule/>
      <div className='flex justify-center'>New Order</div>
    </div>
  );
};

export default Home;
