import React, {useEffect, useContext, useState} from 'react';

import DateButton from '../DateButton';
import Schedule from '../Schedule';
import NewOrderButton from '../NewOrderButton';

import {FirebaseContext} from '../../context/FirebaseContext';
import {HomeContext} from '../../context/HomeContext';

const Home = () => {
  const {getOrders} = useContext(FirebaseContext);
  const {setOrdersOfTheDay} = useContext(HomeContext);
  const [isLoading, setIsLoad] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        const orders = await getOrders();
        setOrdersOfTheDay(orders);
        setIsLoad(false);
      } catch (error) {
        console.error(error);
      }
    };
    initialize();
  }, []);
  return (
    <div className='flex flex-col w-screen h-screen'>
      <DateButton/>
      <Schedule states={{isLoading, setIsLoad}}/>
      <NewOrderButton/>
    </div>
  );
};

export default Home;
