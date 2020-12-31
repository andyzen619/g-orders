/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {HomeContext} from '../../context/HomeContext';
import {FirebaseContext} from '../../context/FirebaseContext';

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
  const {removeOrder} = useContext(FirebaseContext);

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
          removeOrder(id);
        }}/>
    </div>
  );
};

export default ScheduleItemButtons;
