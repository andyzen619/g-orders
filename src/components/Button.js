import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonText } = props;
  return (
    <div className="bg-gray-600 text-gray-800 font-semibold text-sm h-14 w-14 border border-gray-600 rounded-full shadow flex justify-center">
      <div className="flex flex-col justify-center text-white">{buttonText}</div>
    </div>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
