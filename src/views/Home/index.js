import React, {useState} from 'react';
import moment from 'moment';

import DateButton from '../../components/DateButton';
import Schedule from '../../components/Schedule';
import NewOrderButton from '../../components/NewOrderButton';

const Home = () => {
  const [startDate, setStartDate] = useState(moment());
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <DateButton states={{startDate, setStartDate}}/>
      <Schedule states={{startDate}}/>
      <NewOrderButton states={{startDate}} />
    </div>

  );
};

export default Home;
