/* eslint-disable react/prop-types */
import React, {useContext} from 'react';

import {HomeContext} from '../../context/HomeContext';
import {Link} from 'react-router-dom';

const Button = ({text, color, onClick}) => {
  return (
    <div className={`
        flex justify-center bg-${color}-400
        shadow 
        rounded m-2 px-1 
        text-white font-bold
        text-md
      `}
    onClick={onClick}
    >
      {text}
    </div>
  );
};

const ScheduleItemButtons = ({id}) => {
  const {ordersOfTheDay, setOrdersOfTheDay} = useContext(HomeContext);
  return (
    <div className='flex justify-center'>
      <Link to={`/editOrder/${id}`}>
        <Button text='Edit' color='blue'/>
      </Link>
      <Button text='Delete' color='red'
        onClick={() => {
          const newOrdersOfTheDay = [...ordersOfTheDay]
              .filter(({id: uid}) => uid !== id);
          setOrdersOfTheDay(newOrdersOfTheDay);
        }}/>
    </div>
  );
};

export default ScheduleItemButtons;
