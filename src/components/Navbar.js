import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Navbar(props) {
  const { title = 'Replace Me' } = props;
  return (
    <div className="flex w-screen h-20 bg-gray-700">
      <div className="flex w-1/5 justify-center my-auto">
        <Button buttonText="Home" />
      </div>
      <div className="flex w-3/5 justify-center my-auto font-bold text-2xl text-white">{title}</div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
