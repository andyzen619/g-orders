/* eslint-disable react/prop-types */
import React, {createContext, useState, useEffect, useContext} from 'react';
import moment from 'moment';

import {FirebaseContext} from './FirebaseContext';

export const HomeContext = createContext(null);

const HomeContextProvider = (props) => {
  const {getOrders} = useContext(FirebaseContext);

  const [startDate, setStartDate] = useState(moment());
  const [ordersOfTheDay, setOrdersOfTheDay] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      try {
        const orders = await getOrders();
        setOrdersOfTheDay(orders);
      } catch (error) {
        console.error(error);
      }
    };
    initialize();
  }, []);
  return (
    <HomeContext.Provider
      value={{startDate, setStartDate, ordersOfTheDay, setOrdersOfTheDay}}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
