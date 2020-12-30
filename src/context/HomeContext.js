/* eslint-disable react/prop-types */
import React, {createContext, useState} from 'react';
import moment from 'moment';

export const HomeContext = createContext(null);

const HomeContextProvider = (props) => {
  const [startDate, setStartDate] = useState(moment());
  const [ordersOfTheDay, setOrdersOfTheDay] = useState([]);
  return (
    <HomeContext.Provider
      value={{startDate, setStartDate, ordersOfTheDay, setOrdersOfTheDay}}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
