/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';

const Button = ({text, color, onClick}) => {
  return (
    <div
      className={`
        flex justify-center bg-${color}-400
        shadow 
        rounded m-2 px-4 py-2 
        text-white font-bold
        text-md
      `}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default ({states}) => {
  const {removeOrder, ordersOfTheDay, setOrdersOfTheDay, id} = states;

  return (
    <div className="flex justify-center">
      <Link to={`/editOrder/${id}`}>
        <Button text="Edit" color="blue" />
      </Link>
      <Button
        text="Delete"
        color="red"
        onClick={() => {
          const newOrdersOfTheDay = [...ordersOfTheDay].filter(
              ({id: uid}) => uid !== id,
          );
          setOrdersOfTheDay(newOrdersOfTheDay);
          removeOrder(id);
        }}
      />
    </div>
  );
};
