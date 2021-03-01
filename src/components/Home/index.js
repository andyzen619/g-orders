import React, {useState} from 'react';
import moment from 'moment';

import DateButton from '../DateButton';
import Schedule from '../Schedule';
import NewOrderButton from '../NewOrderButton';

const Home = () => {
  const [startDate, setStartDate] = useState(moment());
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <DateButton states={{startDate, setStartDate}}/>
      <Schedule/>
      <NewOrderButton states={{startDate}} />
    </div>

  );
};

export default Home;
