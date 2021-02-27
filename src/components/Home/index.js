import React from 'react';

import DateButton from '../DateButton';
import Schedule from '../ScheduleV2';
import NewOrderButton from '../NewOrderButton';

const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <DateButton />
      <Schedule/>
      <NewOrderButton />
    </div>

  );
};

export default Home;
